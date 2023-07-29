import React from "react"
import port1 from '../assets/img/portfolio/portfolio-1.jpg';
import port2 from '../assets/img/portfolio/portfolio-2.jpg';
import port3 from '../assets/img/portfolio/portfolio-3.jpg';
import port4 from '../assets/img/portfolio/portfolio-4.jpg';
import port5 from '../assets/img/portfolio/portfolio-5.jpg';
import port6 from '../assets/img/portfolio/portfolio-6.jpg';
import port7 from '../assets/img/portfolio/portfolio-7.jpg';
import port8 from '../assets/img/portfolio/portfolio-8.jpg';
import port9 from '../assets/img/portfolio/portfolio-9.jpg';

export default function Portfolio() {
    return (

<main id="main">
<section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>With top-notch experience in the web application development. This includes full front and back-end design, brand identity, graphics, illustrations, etc.</p>
        </div>

        {/* <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={port1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/xdplax.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={port2} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/Xdfastcom.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={port3} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/O.N_Dennis_Portfolio.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={port4} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/EduStow.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={port5} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/EduStow_Admin.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={port6} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/XdfastAdmin.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={port7}className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/XdfastAdmin.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={port8} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/PlaySafe.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={port9} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/Decondennis/xdplax.git" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

 </main>
    
    )
}