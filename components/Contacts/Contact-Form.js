import Image from "next/image";

import img from "../../public/images/about/contact.jpg";

const ContactForm = ({ gap }) => {
  return (
    <>
      <div className={`rbt-contact-address ${gap}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <Image
                  className="w-100 radius-6"
                  src={img}
                  alt="Contact Images"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
               
                <h3 className="title">
                Contact Through <span className="gradient-Registration">Submit Form</span> </h3>
                <form
                  id="contact-form"
                  method="POST"
                  action="mail.php"
                  className="rainbow-dynamic-form max-width-auto"
                >
                  <div className="form-group">
                    <input
                      name="contact-name"
                      id="contact-name"
                      type="text"
                      placeholder="Name"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="contact-phone"
                      type="email"
                      placeholder="Email"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Your Subject"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      placeholder="Message"
                    ></textarea>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Send</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
