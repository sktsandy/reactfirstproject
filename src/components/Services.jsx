import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Services  = () =>{
    return(
        <>

    <div className="mt-5">
        <h1 className="text-center"> Our Services </h1>
        <div className="text_line mx-auto"></div>
    </div>

    <div className="container">
        <div className="row">
                {
                 
                    Sdata.map((val, index) =>{
                        return (
                        <div className="col-md-4">
                        <Card 
                                        imgsrc = {val.imgsrc}
                                        title = {val.title}
                                        key = {index}
                                />
                         </div>
                        )
                    })
                 
                }

    </div>
 </div>

        </>
    );
}


export default Services;