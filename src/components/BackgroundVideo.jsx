import React from 'react';
import Video from '../assets/video.mp4'

const BackgroundVideo = () => {
    return (
        <div className='background'>
			<div className='overlay'></div>
			<video src={Video} autoPlay loop muted/>
		</div>
    );
};

export default BackgroundVideo;
