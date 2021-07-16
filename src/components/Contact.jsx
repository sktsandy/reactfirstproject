import React from 'react';
import img from '../images/contact_us.png';

const Contact  = () =>{
    return(
        <>
            <div className="container">
            <h1 className="text-center mt-5"> Contact Us </h1>
            <div className="disc_line mx-auto"></div>
                <div className="contact_section">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} className="animated"/>                           
                        </div>
                        <div className="col-md-6">
                            <form>
                                <input type="text" placeholder="Enter your name" required/> <br />
                                <input type="email" placeholder="Enter Email Id" required/> <br />
                                <input type="text" placeholder="Enter Phone No." required/> <br />
                                <textarea type="text" placeholder="message...." required /> <br />
                                <button className="contact_btn"> Submit </button>             
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;