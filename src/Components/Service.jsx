import React from 'react';
import CardPlate from './Card';
import ServiceDescp from './ServiceDesc';

const Service = () => {
  return (
    <>
      <div style={{marginTop:'54px'}}>
        <h1 className='text-center'>Our Services</h1>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
            
               <div className=''>
                  <div className="row" style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
                      {ServiceDescp.map((list)=>{
                        return <CardPlate list={list} key={list.id}/>
                      })}
                  </div>
               
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
