import React from 'react';
import Common from './Common';
import img1 from '../images/img1.png';
import Tabs from './Tabs';
import Slider from './Slider';

const Home  = () =>{
    return(
        <>
            <Slider />

            <Common 
            heading = "Grow your business with"
            imgsrc = {img1}
            btnName = "Get Started"
            visit = "/Services"
            />
                    <br />
            <Tabs />
        </>
    );
}


export default Home;