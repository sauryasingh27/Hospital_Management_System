import React from "react";

const departments = [
  { name: "Cardiology", image: "/departments/cardio.jpg" },
  { name: "Neurology", image: "/departments/neuro.jpg" },
  { name: "Orthopedics", image: "/departments/ortho.jpg" },
  { name: "Pediatrics", image: "/departments/pedia.jpg" },
  { name: "Dermatology", image: "/departments/derma.jpg" },
  { name: "Gynecology", image: "/departments/Gyneco.webp" },
];

const Departments = () => {
  return (
    <div className="departments-container">
      <h2 className="section-title">Our Medical Departments</h2>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <img src={dept.image} alt={dept.name} />
            <h3>{dept.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
