import React from 'react';
import { NavLink } from 'react-router-dom';

const Card  = (props) =>{
    return(
        <>

    <div class="card_wrapper">
            <div className="card custom_card_class">
            <div className="Card_img">
                <img src={props.imgsrc} className="card-img-top" alt="abc" />
            </div>
                <div className="card-body">
                    <h5 className="card-title text-center"> {props.title}</h5>
                    <p className="card-text py-2"> 
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing..                    
                    </p>
                    <NavLink to="/" className="btn btn-primary card_btn"> Learn More.. </NavLink>
                </div>
            </div>
 </div>
        </>
    );
}


export default Card;