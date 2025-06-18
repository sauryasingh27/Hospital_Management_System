import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [ "Pediatrics", "Orthopedics", "Cardiology", "Neurology","Gynecology", "Dermatology",];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://hospital-management-system-yb4o.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "https://hospital-management-system-yb4o.onrender.com/api/v1/appointment/post",
        { firstName, lastName, email, contact, aadhaar, dob, gender,
          appointment_date: appointmentDate, department, doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName, hasVisited: hasVisitedBool, address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
      setLastName(""),
      setEmail(""),
      setContact(""),
      setAadhaar(""),
      setDob(""),
      setGender(""),
      setAppointmentDate(""),
      setDepartment(""),
      setDoctorFirstName(""),
      setDoctorLastName(""),
      setHasVisited(""),
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div class = "AppointmentForm">
        <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Aadhaar Number"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
            />
            <input
              type={dob ? "date" : "text"}
              placeholder="Date of Birth"
              value={dob}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!dob) e.target.type = "text";
              }}
              onChange={(e) => setDob(e.target.value)}
            />

          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type={appointmentDate ? "date" : "text"}
              placeholder="Appointment Date"
              value={appointmentDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!appointmentDate) e.target.type = "text";
              }}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />

          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              <option value="">Select Department</option> 
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>

            <select
              value={JSON.stringify({
                firstName: doctorFirstName,
                lastName: doctorLastName,
              })}
              onChange={(e) => {
                const { firstName, lastName } = JSON.parse(e.target.value);
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    key={index}
                    value={JSON.stringify({
                      firstName: doctor.firstName,
                      lastName: doctor.lastName,
                    })}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
           <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px" }}>
              <p style={{ marginBottom: 0 }}>Have you visited before?</p>
              <input
                type="checkbox"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
                style={{ flex: "none", width: "25px" }}
              />
            </div>

          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AppointmentForm;