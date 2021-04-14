import React from "react";

const ServicesDetail = ({ service }) => {
  return (
    <div className='col-md-4 text-center'>
      <img style={{ height: "50px" }} src={service.img} alt='' />
      <h5 className='mt-3 mb-3'>{service.name}</h5>
      <p className='text-secondary px-5'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae minus
        doloremque omnis.
      </p>
    </div>
  );
};

export default ServicesDetail;
