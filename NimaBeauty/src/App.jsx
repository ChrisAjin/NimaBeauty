import { useState } from 'react'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Histoire from './components/Histoire'
import Navbar from './components/Navbar';
import Selects from './components/Selects';
import video1 from './assets/video1.mp4';

const App = () => (
	<div>
		<Navbar/>
		<div className='fixed inset-0 z-0'>
          <video
            className='w-full h-full object-cover'
            src={video1}
            autoPlay
            loop
            muted
          />
        </div>
		<Hero/>
		<Histoire/>
		<Selects />
      	<Carousel />
      	<Footer />
	</div>
);

export default App;
