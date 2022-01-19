import React, { Component } from "react";
import Quicklinks from "../components/Quicklinks";

class Contacts extends Component {
  render() {
    return (
      <div>
         {/*//quick links*/}
         <Quicklinks />
        {/*//quick links*/}
        {/*//quick links*/}
        <div className="page-content">
          {/*section*/}
          <div className="section mt-0">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40119.804311386426!2d-97.32055794896301!3d37.64364017354126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bae4ec254beb5f%3A0x410df48edd2f5ede!2sGraceMed%20Jardine%20Family%20Clinic!5e0!3m2!1sen!2sua!4v1579853082410!5m2!1sen!2sua"
                allowFullScreen
              />
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section mt-0 bg-grey">
            <div className="container">
              <div className="row">
                <div className="col-md">
                  <div className="title-wrap">
                    <h5>Clinic Location</h5>
                    <div className="h-decor" />
                  </div>
                  <ul className="icn-list-lg">
                    <li>
                      <i className="icon-placeholder2" /> DentCo Dental Clinic
                      <br />
                      1560 Holden Street San Diego,
                      <br />
                      CA 92139
                    </li>
                  </ul>
                </div>
                <div className="col-md mt-3 mt-md-0">
                  <div className="title-wrap">
                    <h5>Contact Info</h5>
                    <div className="h-decor" />
                  </div>
                  <ul className="icn-list-lg">
                    <li>
                      <i className="icon-telephone" />
                      Phone:{" "}
                      <span className="theme-color">
                        <span className="text-nowrap">1-800-267-0000,</span>{" "}
                        <span className="text-nowrap">1-800-267-0001</span>
                      </span>
                      <br /> Fax:{" "}
                      <span className="theme-color">
                        <span className="text-nowrap">(957) 267-0020</span>
                      </span>
                    </li>
                    <li>
                      <i className="icon-black-envelope" />
                      <a href="mailto:info@dentco.net">info@dentco.net</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md mt-3 mt-md-0">
                  <div className="title-wrap">
                    <h5>Working Time</h5>
                    <div className="h-decor" />
                  </div>
                  <ul className="icn-list-lg">
                    <li>
                      <i className="icon-clock" />
                      <div>
                        <div className="d-flex">
                          <span>Mon-Thu</span>
                          <span className="theme-color">08:00 - 20:00</span>
                        </div>
                        <div className="d-flex">
                          <span>Friday</span>
                          <span className="theme-color">07:00 - 22:00</span>
                        </div>
                        <div className="d-flex">
                          <span>Saturday</span>
                          <span className="theme-color">08:00 - 18:00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md col-lg-5">
                  <div className="pr-0 pr-lg-8">
                    <div className="title-wrap">
                      <h2>Get In Touch With Us</h2>
                      <div className="h-decor" />
                    </div>
                    <div className="mt-2 mt-lg-4">
                      <p>
                        For general questions, please send us a message and
                        we’ll get right back to you. You can also call us
                        directly to speak with a member of our service team or
                        insurance expert.
                      </p>
                      <p className="p-sm">
                        Fields marked with a * are required.
                      </p>
                    </div>
                    <div className="mt-2 mt-md-5" />
                    <h5>Stay Connected</h5>
                    <div className="content-social mt-15">
                      <a
                        href="https://www.facebook.com/"
                        target="blank"
                        className="hovicon"
                      >
                        <i className="icon-facebook-logo" />
                      </a>
                      <a
                        href="https://www.twitter.com/"
                        target="blank"
                        className="hovicon"
                      >
                        <i className="icon-twitter-logo" />
                      </a>
                      <a
                        href="https://plus.google.com/"
                        target="blank"
                        className="hovicon"
                      >
                        <i className="icon-google-logo" />
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="blank"
                        className="hovicon"
                      >
                        <i className="icon-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md col-lg-6 mt-4 mt-md-0">
                  <form
                    className="contact-form"
                    id="contactForm"
                    method="post"
                    noValidate="novalidate"
                  >
                    <div className="successform">
                      <p>Your message was sent successfully!</p>
                    </div>
                    <div className="errorform">
                      <p>
                        Something went wrong, try refreshing and submitting the
                        form again.
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your name*"
                      />
                    </div>
                    <div className="mt-15">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="mt-15">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="mt-15">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="mt-3">
                      <button type="submit" className="btn btn-hover-fill">
                        <i className="icon-right-arrow" />
                        <span>Send message</span>
                        <i className="icon-right-arrow" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
        </div>
      </div>
    );
  }
}

export default Contacts;
