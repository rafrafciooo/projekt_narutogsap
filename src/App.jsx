import Features from "./components/Features";
import Hero from "./components/Hero";

function App() {
	return (
		<main className='relative min-h-screen w-screen overflow-x-hidden'>
			<Hero />
			<Features />
			<section className='h-[300vh] bg-pink-700' />
		</main>
	);
}

export default App;
