import React from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {
  const now = 90;
  const now1 = 90;
  const now2= 80;
  const now3 = 60;
  const now4 = 75;
  const now5 = 70;
  const now6= 70;
  const now7 = 60;
  const now8 = 80;
  // const now9 = 40;
    return (

<main id="main">
  <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now} label={`${now}%`} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">CSS </span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now1} label={`${now1}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now2} label={`${now2}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">PHP</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now3} label={`${now3}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">React Js</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now4} label={`${now4}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Version control (GIT)</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now3} label={`${now3}%`} />
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            

            <div className="progress">
              <span className="skill">Node Js</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now5} label={`${now5}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Express Js</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now6} label={`${now6}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Java</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now7} label={`${now7}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">MySQL</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now8} label={`${now8}%`} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">RESTful APIs</span>
              <div className="progress-bar-wrap">
              <ProgressBar now={now5} label={`${now5}%`} />
              </div>
            </div>
            

          </div>

        </div>

      </div>
  </section>

 </main>
    
    )
}