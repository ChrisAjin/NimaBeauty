import { useState } from 'react'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Selects from './components/Selects';

const App = () => (
	<div>
		<Navbar/>
		<Hero/>
		<Selects />
      	<Carousel />
      	<Footer />
	</div>
);

export default App;
