import React from 'react';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
const Footer = () => {
    return (
        <>
          <div className="footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                    <div className="footer_first_section">
                        <h3> About us </h3> 
                        <p> we want to help bring a handy Lorem Ipsum Generator that helps to create dummy text 
                            for all layout needs.</p>
                        <h3> Contact us </h3> <br />
                            <PhoneInTalkIcon />    <span> 918628882283 </span>   <br />
                         <MailOutlineIcon />  <span> sandythakur1999@gmail.com  </span> 
                    </div> 
                  </div>

                  <div className="col-md-4">
                    <div className="footer_second_section">
                        <h3> information </h3>
                          <p> Home </p> 
                        <p> About </p>
                        <p> Services </p>
                        <p> Contact Us </p>
                    </div>
                  </div>

                     <div className="col-md-4">
                         <div className="footer_thrid_section">
                      <h3> Follow more info..</h3> <br />
                       <FacebookIcon />      
                        <InstagramIcon />
                        <YouTubeIcon /> 
                        <br />
                        <Button className="footer_btn" variant="contained" href="#"> MOre info. </Button>
                        </div>
                      </div>

                  </div>
                  
                  <hr />
                    <div className="social_icons text-center">
                      <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <TwitterIcon />
                    </div>
              </div> 
          </div>   
        </>
    )
}

export default Footer;
