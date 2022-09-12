import React from 'react';

import { NavLink } from 'react-router-dom';

const Common = ({name,title,img}) => {
  return (
    <>
   
       <section id='header' className='d-flex align-items-center' style={{width:'100%', height:'80vh', marginTop:'70px'}}>
            <div className="container-fluid ">
                <div className='row'>
                    <div className="col-10 mx-auto">
                      <div className="row">
                          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                              <h1>{name}<strong style={{color:'#2980b9'}}>{title}</strong></h1>
                              <h2 className='my-3'>
                                We are the team of talented developer making websites
                              </h2>

                              <div className="mt-3">
                                  <NavLink to="/service" className="head_btn" style={{fontWeight:'500',fontSize:'16px',letterSpacing:'1px',display:'inlineBlock',padding:'10px 30px',borderRadius:'50px',transition:'0.5s',color:'#3498db',border:'2px solid #3498db',textDecoration:'none'}}>Get Started</NavLink>
                              </div>
                          </div>

                          <div className="col-lg-6 text-right order-1 order-lg-2 header_img">
                                <img src={img} className='img-fluid animated' alt="hello" />
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Common;
