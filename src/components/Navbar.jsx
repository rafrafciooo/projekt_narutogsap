import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
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

	const { y: currentScrollY } = useWindowScroll();

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

	const navContainerRef = useRef(null);
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
							containerClass='bg0blue-50 md:flex hidden items-center justify-center gap-2'
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
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
