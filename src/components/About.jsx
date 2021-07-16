import React from 'react';
import Common from './Common';
import img2 from '../images/img2.png';
import Collapse from './Collapse';

const About  = () =>{
    return(
        <>
           <Common 
            heading = "Welcome to About page"
            imgsrc = {img2}
            btnName = "Contact Now"
            visit = "/Contact"
            />

            <Collapse />
            
        </>
    );
}


export default About;