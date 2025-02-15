import React, { useState, useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
	const [transformStyle, setTransformStyle] = useState("");
	const itemRef = useRef<HTMLDivElement>(null);
	const handleMouseMove = e => {
		if (!itemRef.current) return;

		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();
		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;
		const tiltX = (relativeY - 0.5) * 20;
		const tiltY = (relativeX - 0.8) * -20;
		const newTransform = `perspective(500px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(0.9, 0.9, 0.9)`;
		setTransformStyle(newTransform);
	};
	const handleMouseLeave = () => {
		setTransformStyle("");
	};

	return (
		<>
			<div
				className={className}
				ref={itemRef}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: transformStyle,
				}}
			>
				{children}
			</div>
		</>
	);
};

const BentoCard = ({ src, title, description }) => {
	return (
		<div className='relative size-full'>
			<video
				src={src}
				loop
				muted
				autoPlay
				className='absolute left-0 top-0 size-full object-cover object-center'
			/>
			<div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-75'>
				<div className=''>
					<h2 className='bento-title special-font'>{title}</h2>
					{description && (
						<p className='max-w-64 text-sm md:text-base  bg-gray-900/40 p-2 rounded-2xl'>
							{description}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

const Features = () => {
	return (
		<section className='bg-black/90 pb-52 '>
			<div className='container mx-auto px-6 md:px-10'>
				<div className='px-5 py-32 '>
					<p className='font-circular-web text-lg text-blue-50'>
						Into the world of Naruto
					</p>
					<p className='max-w-md font-circular-web text-lg text-blue-50/40'>
						Immerse yourself in the captivating world of Naruto, a captivating
						and immersive experience that will transport you to the world of
						ninja warriors and their epic adventures.
					</p>
				</div>
				<BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-lg md:h-[65vh]'>
					<BentoCard
						src='videos/hero-3.mp4'
						title={
							<>
								<b>N</b>aruto <b>Un</b>iverse
							</>
						}
						description='A captivating and immersive experience that will transport you to the world of ninja warriors and their epic adventures.'
					/>
				</BentoTilt>
				<div className='grid h-[135vh] grid-cols-2 grid-row-3 gap-7 '>
					<BentoTilt className=' bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
						<BentoCard
							src='videos/hero-1.mp4'
							title={
								<>
									<b>S</b>hared <b>W</b>orld
								</>
							}
							description='A captivating and immersive experience that will transport you to the world of ninja warriors and their epic adventures.'
						/>
					</BentoTilt>
					<BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
						<BentoCard
							src='videos/hero-2.mp4'
							title={
								<>
									<b>N</b>aruto <b>Un</b>iverse
								</>
							}
							description='A captivating and immersive experience that will transport you to the world of ninja warriors and their epic adventures.'
						/>
					</BentoTilt>
					<BentoTilt className='bento-tilt_1  me-32 md:col-span-1 md:me-0'>
						<BentoCard
							src='videos/feature-3.mp4'
							title={
								<>
									<b>m</b>anga <b>Un</b>iverse
								</>
							}
							description='A captivating and immersive experience that will transport you to the world of ninja warriors and their epic adventures.'
						/>
					</BentoTilt>
					<BentoTilt className='bento-tilt_2'>
						<div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
							<h3 className='bento-title special-font max-w-64'>
								<b>C</b>oming <b>S</b>o<b>o</b>n
							</h3>
							<TiLocationArrow className='m-5 scale-[5] self-end' />
						</div>
					</BentoTilt>
					<BentoTilt className='bento-tilt_2 '>
						<video
							src='/videos/feature-2.mp4'
							muted
							loop
							autoPlay
							className='size-full object-cover object-center'
						/>
					</BentoTilt>
				</div>
			</div>
		</section>
	);
};

export default Features;
