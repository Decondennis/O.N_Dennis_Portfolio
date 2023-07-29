import React from "react"

export default function Resume() {
    return (

<main id="main">
<section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Highly skilled and innovative software development professional with 13 years of hands-on experience in web application development and efficient learner with practical expertise in mobile apps and automated testing, seeking a full stack developer position.</p>
        </div> 

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>O.N.Dennis</h4>
              <p><em>With a background in electrical and electronics engineering, I found my true calling in web development, especially in the exciting world of React JS. I take great pride in creating robust and dynamic web applications that provide an excellent user experience.</em></p>
              <ul>
                <li>Calabar,Cross River,Nigeria</li>
                <li>(234) 706-202-8958</li>
                <li>decondennis@yahoo.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Engineering: Electrical &amp; Electronics Engineering</h4>
              <h5>2006 – 2011</h5>
              <p><em>Cross River University of Technology, Cross River State, Calabar, Nigeria,</em></p>
              {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
            </div>

            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Xdplax International - Full Stack Software Developer (CEO)</h4>
              <h5>2021 - Present</h5>
              <p><em>Calabar, Nigeria </em></p>
              <ul>
                <li>Worked effectively in fast-paced environments.</li>
                <li>Applied effective time management techniques to meet tight deadlines. </li>
                <li>Paid attention to detail while completing assignments.</li>
                <li>Participated in team projects, demonstrating an ability to work collaboratively and effectively.</li>
                <li>Demonstrated strong organizational and time management skills while managing multiple projects.</li>
                
              </ul>
            </div>
            
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            
            <div className="resume-item">
              <h4>Full Stack Software Developer</h4>
              <h5>July 2017 – December 2020</h5>
              <p><em>Kemonai Technologies, Cross River, Nigeria</em></p>
              <ul>
                <li>Coordinated efficient large-scale software deployments.</li>
                <li>Reviewed code, debugged problems, and corrected issues.</li>
                <li>Developed functional databases, applications and servers to support websites on back-end.</li>
                <li>Provided software application engineering and maintenance for development lifecycle.</li>
                <li>Collaborated with fellow engineers to evaluate software and hardware interfaces.</li>
                <li>Worked with back-end developers to design APIs.</li>
                <li>Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>MTN – IT Administrator</h4>
              <h5>August 2014 – March 2017</h5>
              <p><em>MTN, Lagos, Nigeria</em></p>
              <ul>
                <li>Developed multi-site IT execution strategies, aligning work orders at locations to effectively align available resources with historical service data.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

 </main>
    
    )
}