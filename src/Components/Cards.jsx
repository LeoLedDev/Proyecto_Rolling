import React from 'react';
import CardComp from './CardComp';
import CardServ from './CardServ';

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
          <hr />
          
          {/* <CardServ/> */}
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
          <hr />
          {/* <CardServ/> */}
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
          <hr />
          {/* <CardServ/> */}
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
          <hr />
          {/* <CardServ/> */}
        </div>
      </div>
    </div>
  )
}

export default Cards