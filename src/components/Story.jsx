import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
const Story = () => {
	const frameRef = useRef("");

	const handleMouseLeave = () => {
		const element = frameRef.current;
		gsap.to(element, {
			duration: 0.2,
			rotateX: 0,
			rotateY: 0,

			ease: "power1.inOut",
		});
	};

	const handleMouseMove = e => {
		const { clientX, clientY } = e;
		const element = frameRef.current;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((x - centerX) / centerX) * -8;
		const rotateY = ((y - centerY) / centerY) * 8;

		gsap.to(element, {
			duration: 0.2,
			rotateX,
			rotateY,
			transformPerspective: 400,
			ease: "power1.inOut",
		});
	};

	return (
		<section id='story' className='min-h-dvh w-screen bg-black'>
			<div className='flex size-full flex-col items-center py-10 pb-24'>
				<p className='font-general text-sm uppercase text-blue-50 md:text-[10px]'>
					Forge your destiny as a shinobi{" "}
				</p>

				<div className='relative size-full'>
					<AnimatedTitle
						title='<b>Embrace</b> the <b>way</b> of the <b>legendary</b> ninja'
						containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
					/>

					<div className='story-img-container'>
						<div className='story-img-mask'>
							<div className='story-img-content'>
								<img
									ref={frameRef}
									onMouseMove={handleMouseMove}
									onMouseLeave={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseEnter={handleMouseLeave}
									src='/img/embrance.jpg'
									alt='entrance.webp'
									className='object-contain'
								/>
							</div>
						</div>

						<RoundedCorners />
					</div>
				</div>

				<div className='-mt-80 flex w-full justify-center md:-mt-96 md:me-44 md:justify-end '>
					<div className='flex h-full w-fit flex-col items-center md:items-start'>
						<p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
							Naruto universe is a captivating and immersive experience that
							will transport you to the world of ninja warriors and their epic
							adventures.
						</p>
						<Button id='realm-button' containerClass='mt-5' title='button do czegos' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
