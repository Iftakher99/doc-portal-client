import React, { useState } from "react";
import chair from "../../../img/Chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main style={{ height: "600px" }} className='row d-flex align-items-center'>
      <div className='col-md-4 offset-md-1'>
        {" "}
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <div>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </div>

      <div className='col-md-6'>
        <img src={chair} alt='' className='img-fluid' />
      </div>
    </main>
  );
};

export default AppointmentHeader;
