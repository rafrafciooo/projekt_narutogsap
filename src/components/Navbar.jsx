import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navLinks = [
	{ label: "Characters", path: "/characters" },
	{ label: "Clans", path: "/clans" },
	{ label: "Villages", path: "/villages" },
	{ label: "Tailed Beasts", path: "/beasts" },
	{ label: "Akatuski", path: "/akatuski" },
];

const Navbar = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [mobileMenu, setMobileMenu] = useState(false);
	const { y: currentScrollY } = useWindowScroll();

	const mobileMenuRef = useRef(null);
	const navContainerRef = useRef(null);

	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove("floating-nav");
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add("floating-nav");
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add("floating-nav");
		}
		setLastScrollY(currentScrollY);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2,
			ease: "power2.out",
		});
	}, [isNavVisible]);

	useEffect(() => {
		if (mobileMenu) {
			gsap.set(mobileMenuRef.current, {
				display: "flex",
				y: "-20",
				opacity: 0,
			});
			gsap.to(mobileMenuRef.current, {
				duration: 0.4,
				y: 0,
				opacity: 1,
				ease: "power4.inOut",
			});
		} else {
			gsap.to(mobileMenuRef.current, {
				duration: 0.4,
				y: "-20",
				opacity: 0,
				ease: "power4.inOut",
				onComplete: () => {
					gsap.set(mobileMenuRef.current, { display: "none" });
				},
			});
		}
	}, [mobileMenu]);
	return (
		<div
			ref={navContainerRef}
			className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-7'
		>
			<header className='absolute top-1/2 w-full -translate-y-1/2'>
				<nav className='flex size-full items-center justify-between p-4'>
					<div className='flex items-center gap-7'>
						<a href='/'>
							<img src='/img/logo.png' alt='naruto logo' className='h-20' />
						</a>
						<Button
							id='production-button'
							title='przycisk do czegoś'
							rightIcon={<TiLocationArrow />}
							containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-2'
						/>
					</div>
					<div className='flex h-full items-center'>
						<div className='hidden md:block'>
							{navLinks.map((link, index) => (
								<a key={index} href={link.path} className='nav-hover-btn'>
									{link.label}
								</a>
							))}
						</div>
						<div className='block md:hidden'>
							{mobileMenu ? (
								<FiX
									className='size-full px-2 py-1 text-3xl text-white hover:scale-105'
									onClick={() => setMobileMenu(!mobileMenu)}
								/>
							) : (
								<FiMenu
									className='size-full px-2 py-1 text-3xl text-white hover:scale-105'
									onClick={() => setMobileMenu(!mobileMenu)}
								/>
							)}
						</div>
					</div>
				</nav>
			</header>

			<div
				ref={mobileMenuRef}
				className='absolute right-0 top-full flex h-[180px] flex-col items-end bg-black/90  md:hidden'
				style={{ display: "none" }}
			>
				<p className="border-2 p-4 uppercase text-white">dodac zamykanie po kliknieciu gdziekolwiek i po kliknenciu na podstrone</p>
				{navLinks.map((link, index) => (
					<a
						key={index}
						href={link.path}
						className='nav-hover-btn block px-4 py-2 '
						onClick={() => setMobileMenu(false)}
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default Navbar;
