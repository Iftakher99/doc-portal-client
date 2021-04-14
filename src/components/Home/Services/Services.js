import React from "react";
import floride from "../../../img/Flouride.png";
import cavity from "../../../img/Cavity.png";
import whitening from "../../../img/whitening.png";
import ServicesDetail from "../ServiceDetail/ServicesDetail";
const servicesData = [
  {
    name: "Fluoride Treatment",
    img: floride,
  },
  {
    name: "Cavity Feeling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: whitening,
  },
];
const Services = () => {
  return (
    <section className='services-container mt-5'>
      <div className='text-center'>
        {" "}
        <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
        <h2 style={{ color: "#000" }}>Services We Provide</h2>
      </div>
      <div className='d-flex justify-content-center '>
        <div className='w-75 row mt-5 pt-5'>
          {servicesData.map((service) => (
            <ServicesDetail service={service}></ServicesDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
