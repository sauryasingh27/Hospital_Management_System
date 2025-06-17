import React from 'react'

const AppointmentFooter = () => {
  return (
    <div className="footer-btn-wrapper">
        <h3>Your Health Matters</h3>
        <h2>Schedule a Visit with Just One Click!</h2>
        <button
            className="appointment-btn"
            onClick={() => window.location.href = "/appointment"}
        >
            Get Appointment
        </button>
    </div>
  )
}

export default AppointmentFooter
