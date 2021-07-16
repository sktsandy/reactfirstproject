import React, { useState } from 'react';
import TabData from './TabData';

const Tabs = () => {

  const [items, setItems] = useState(TabData);

  const filterItem = (catItem) =>{
      const updatedItem = TabData.filter((val) =>{
            return val.category === catItem;
      });
      setItems (updatedItem);
      }

    return (
        <>
          <h1 className="text-center mt-5"> Meet Our Team </h1>  
          <div className="tab_text_line mx-auto"></div>
          <div className="main_tabs_wrapper">
              <div className="container">
                  <div className="tab_btn">
                      <button onClick = { () => filterItem('web designer')} > Web Designer </button> 
                        <button onClick = { () => filterItem('web developer')}> Web Developer </button>
                        <button onClick = { () => filterItem('software engineer')}> Software engineer </button>
                        <button onClick = { () => setItems(TabData)}> All Team </button>
                  </div>


        <div className="categery_holder">
              <div className="row">   
            {
                items.map((val, index) =>{
                    const {imgsrc, heading, description} = val;
                  return(
                    <div className="col-md-4">
                    <div className="tabs_gallery">
                    <div className="tab_img">
                      <img src={imgsrc} alt="tab_img"/>
                    </div>
                    <div className="person_info">
                        <h3> {heading} </h3>
                        <p> 
                          {description}     
                       </p>
                      
                    </div>
                </div>
                </div>
              
                  );
                })


            }

              </div>   
              </div>
            </div>
          </div>
        </>
    )
}

export default Tabs;
