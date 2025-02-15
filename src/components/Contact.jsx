import Button from "./Button";

const ImgClipBox = ({ src, clipClass }) => (
	<div className={clipClass}>
		<img src={src} />
	</div>
);

const Contact = () => {
	return (
		<div id='contact' className='my-20 min-h-96 w-screen px-10'>
			<div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
				<div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
					<ImgClipBox
						src='/img/contact-2.png'
						clipClass='clip-path-1 scale-50'
					/>
					<ImgClipBox
						src='/img/contact-2.png'
						clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60 '
					/>
				</div>
				<div className='absolute -top-64 left-24 w-60 sm:left-96 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 '>
					<ImgClipBox src='/img/naruto.png' clipClass='scale-50' />
				</div>
				<div className='flex flex-col items-center text-center'>
					<p className='font-general text-sm uppercase md:text-2xl'>
						Become a Shinobi
					</p>

					<p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] mix-blend-difference md:text-[6rem]'>
						Step into <br />
						th<b>e</b> worl<b>d</b> of ninj<b>a</b>s and <b>u</b>nlock your{" "}
						<b>d</b>estiny as a<br /> shinobi.
					</p>
					<Button title='Contact' containerClass='mt-10 cursor-pointer' />
				</div>
			</div>
		</div>
	);
};

export default Contact;
