import React, { useState } from "react";
import "../App.css";

const personal = {
  name: "Subhanshu Sabhajit Pardeshi",
  dob: "17 July 1999",
  age: "26",
  height: "5.7 Fit",
  education: "Masters In Computer Science",
  designation: "Software Developer ",
  father: "Mr. Sabhajit Mohal Pardeshi",
  mother: "Mrs. Sunita Sabhajit Pardeshi",
  sister: "Sakshi Sabhajit Pardeshi",
  nationality: "Indian",
  location: "Hadapsar, Pune, Maharashtra",
  plocation:" Village:Ariyar , Post:Ariyar,Tashil:Madhiyahu, District:Jaunpur",
};




const SkillCard = ({ title, items }) => (
  <div className="card skill-card">
    <h4>{title}</h4>
    <ul className="list inline">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Home = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (src) => {
    setPopupImage(src);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="portfolio">
      {/* ABOUT ME - PERSONAL & FAMILY */}
      <section className="section center-container">
        

        {/* Profile image */}
        <div className="about-photo-container">
          <img
            src="/logo.jpg"
            alt="Profile"
            className="about-photo"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onClick={() => openPopup("/logo.jpg")}
          />
        </div>


<h2 className="section-title">About Me</h2>
        <div className="card about-card">
          <p><strong>Name:</strong> {personal.name}</p>
          <p><strong>Age:</strong> {personal.age}</p>
          <p><strong>DOB:</strong> {personal.dob}</p>
          <p><strong>Height:</strong> {personal.height}</p>
          <p><strong>Education:</strong> {personal.education}</p>
          <p><strong>Designation:</strong> {personal.designation}</p>
          <p><strong>Nationality:</strong> {personal.nationality}</p>
          <p><strong>Father:</strong> {personal.father}</p>
          <p><strong>Mother:</strong> {personal.mother}</p>
          <p><strong>Sister:</strong> {personal.sister}</p>
          <p><strong>Address:</strong> {personal.location}</p>
          <p><strong>P-Address:</strong> {personal.plocation}</p>

          {/* Family Images */}
          <div className="family-images">
            <div>
              <img
                src="/papa.jpg"
                alt="Father"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/papa.jpg")}
              />
              <p>{personal.father}</p>
            </div>

            <div>
              <img
                src="/mummy.jpg"
                alt="Mother"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/mummy.jpg")}
              />
              <p>{personal.mother}</p>
            </div>

            <div>
              <img
                src="/didi.jpg"
                alt="Sister"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/didi.jpg")}
              />
              <p>{personal.sister}</p>
            </div>

            <div>
              <img
                src="/sagar1.jpeg"
                alt="Sagar"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/sagar1.jpeg")}
              />
            </div>
             <div>
              <img
                src="/sagar2.JPG"
                alt="Sagar"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/sagar2.JPG")}
              />
            </div>
             <div>
              <img
                src="/sagar3.jpg"
                alt="Sagar"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/sagar3.jpg")}
              />
            </div>
             <div>
              <img
                src="/sagar4.jpg"
                alt="Sagar"
                className="family-photo"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onClick={() => openPopup("/sagar4.jpg")}
              />
            </div>
          </div>
        </div>

        {/* POPUP MODAL */}
        {popupImage && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content">
              <img
                src={popupImage}
                className="popup-image"
                alt="Zoom"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;