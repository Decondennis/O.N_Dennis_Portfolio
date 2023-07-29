import React from "react";



const Contact = () => {
 


    return (

          <main id="main">
                <section id="contact" className="contact">
                  <div className="container">
                      <div className="section-title">
                          <h2>Contact</h2>
                        </div>
                            <div className="row" data-aos="fade-in">
                              <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                  <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>27 Edgerly, Calabar, CRS, Nigeria</p>
                                  </div>
                                  <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>decondennis@yahoo.com</p>
                                  </div>
                                  <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+234 706 202 8958</p>
                                  </div>
                                  {/* <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                      frameBorder="0"
                                      style={{ border: "0", width: "100%", height: "290px" }}
                                      allowFullScreen
                                    ></iframe> */}

                                  </div>
                                  </div>
                                  <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                      <form >
                                  
                                        <div className="row">
                                          <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text"  name="fields[name]" className="form-control" id="name" required />
                                          </div>
                                          <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Email</label>
                                            <input type="email"  className="form-control" name="email_address" id="email" required />
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="name">Subject</label>
                                          <input type="text"  className="form-control" name="field{subject}" id="subject" required />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="name">Message</label>
                                          <textarea className="form-control"  name="field{messageb}" rows="10" required></textarea><br></br>
                                        </div><button>SUBSCRIBE</button>
                                    
                                        
                                      </form>
                                  
                            </div>
                        
                      
                        </div>

                    </div>

                
              </section>

          </main>
    
    )
}

export default Contact