import React from "react"
// import profileImg from '.apple-touch-icon.png';
import profileImg2 from '../assets/img/profile-img.jpg';

export default function About() {
    return (

<main id="main">
<section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I am a skilled Full Stack Developer with a passion for creating exceptional web applications. 
            I excel in crafting intuitive and visually appealing user interfaces and implementing robust
              back-end functionalities and APIs. With a commitment to continuous learning.
               I keeps up-to-date with the latest trends and best practices. 
               My strong problem-solving skills, effective communication, and collaborative nature make 
               me an invaluable asset to any development team. </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profileImg2} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Software Developer.</h3>
            {/* <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p> */}
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>19 July 1986</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.xdplax.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+234 706 202 8958</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Calabar Nigeria</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>37</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Eng.</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>decondennis@yahoo.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            {/* <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p> */}
          </div>
        </div>

      </div>
    </section>

 </main>
    
    )
}