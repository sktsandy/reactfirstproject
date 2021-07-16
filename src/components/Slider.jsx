import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SlideData from './SlideData';

const Slider = () => {
    const [items, setItems] = useState(SlideData);

    return (
        <>
    <Carousel infiniteLoop autoPlay>
        {
            items.map((val, index) => {
                const {imgsrc, title} = val;

                return(  
            <div className="slider_wrapper">
                    <img src={imgsrc} alt="img" />
                <div className="slider_contant">
                    <div className="slider_contant_inner">
                        <h3> {title} </h3>
                    </div>
                </div>
            </div>
                );
            })

        }    
    </Carousel> 
        </>
    )
}

export default Slider;
