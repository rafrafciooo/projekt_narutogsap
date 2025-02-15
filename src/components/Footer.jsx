// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";

const links = [
	{ href: "https://github.com/", icon: <FiGithub /> },
	{ href: "https://twitter.com/", icon: <FiTwitter /> },
	{ href: "https://facebook.com/", icon: <FiFacebook /> },
];

const Footer = () => {
	return (
		<footer className='w-screen bg-orange-300 py-4 text-black'>
			<div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
				<p className='text-start md:text-left'>
					Copyright &copy; 2025 Naruto Universe <br />
				</p>

				<div className='flex justify-center gap-4 md:justify-start'>
					{links.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-full p-2 text-2xl transition-all duration-300 ease-in  hover:bg-orange-800 hover:text-orange-500'
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<div className='h-px w-3/5 bg-black/10 text-center' />
				<a
					href='www.cookieweb.pl'
					target='_blank'
					rel='noopener noreferrer'
					className='mt-2 text-center text-sm font-thin text-black/50 transition-all duration-300 ease-in hover:scale-105 hover:text-black'
				>
					by Cookie
					<span className=' text-orange-500/80 hover:text-orange-500'>Web</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
