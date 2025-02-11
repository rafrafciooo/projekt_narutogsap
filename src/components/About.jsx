import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});


		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
		});
	});

	return (
		<div id='about' className='min-h-screen w-screen'>
			<div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
				<p className='font-general text-sm uppercase tracking-widest md:text-[20px]'>
					Welcome to Naruto Universe
				</p>

				<AnimatedTitle
					title='E<b>x</b>plore rich history <b>a</b>nd legend<b>a</b>ry shinobi'
					containerClass='mt-5 !text-black text-center '
				/>

				<div className='about-subtext'>
					<p>
						Every great ninja starts somewhere. Take your first step into the
						legend today!
					</p>
					<p className='text-zinc-600'>
						The path of the shinobi awaits. Are you ready?
					</p>
				</div>
			</div>

			<div className='h-dvh w-screen' id='clip'>
				<div className='mask-clip-path about-image'>
					<img
						src='img/about.jpg'
						alt='Background'
						className='absolute left-0 top-0 size-full object-cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
