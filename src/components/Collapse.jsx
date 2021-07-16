import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CollapseData from './CollapseData';
import img from '../images/collapse.jpg';


const Collapse = () => {
    const [items,setItems] = useState(CollapseData);

    return (
        <>
     <div className="container">
        <div className="main_collapse_wrapper"> 
            <div className="row">
                <div className="col-md-7">
                    <img src={img} alt="collapse img" /> 
                </div>
                <div className="col-md-5">
                        <h2 className="my-4"> Read importent things About us</h2>          
        {
            items.map((val, index) =>{
                const {heading, text} = val;
            return(
               
                <Accordion>
                   <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                       aria-controls="panel1a-content"
                       id="panel1a-header"
                       >
                       <h3> {heading} </h3>
                   </AccordionSummary>
                   <AccordionDetails>
                   <p>
                       {text}
                   </p>
                   </AccordionDetails>
                </Accordion>  

            );
            })
        }
            </div>
         </div>
    </div>
 </div>
        </>
    );
};

export default Collapse;
