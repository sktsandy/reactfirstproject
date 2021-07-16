import React from 'react';
import { NavLink } from 'react-router-dom';


const Common  = (props) =>{
    return(
        <>
            <div className="common_page_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1> {props.heading} <span> Tech WebArt </span> </h1>
                            <h2> We are team of technical Developer and Designer for <br /> 
                            grow up your business with us </h2> <br />
                            <NavLink to={props.visit}>
                            <button> {props.btnName} </button>
                            </NavLink>
                        </div>                       
                        <div className="col-md-6">                            
                            <img src={props.imgsrc} alt="img1" className="image_animated" />                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Common;