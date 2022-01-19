import React, { Component } from "react";
import Quicklinks from "../components/Quicklinks";

class Specialists extends Component {
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
            <div className="breadcrumbs-wrap">
              <div className="container">
                <div className="breadcrumbs">
                  <a href="index.html">Home</a>
                  <span>Our Specialists</span>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section page-content-first">
            <div className="container">
              <div className="text-center mb-2  mb-md-3 mb-lg-4">
                <div className="h-sub theme-color">Meet the Team</div>
                <h1>Our Specialists</h1>
                <div className="h-decor" />
              </div>
            </div>
            <div className="container">
              <div className="text-center mb-2 mb-md-3">
                <p>
                  At Medin Dental Clinic we strive to give you the best possible
                  treatment and experience to help
                  <br />
                  you achieve your dental goals
                </p>
              </div>
              <div className="filters-by-category mb-2">
                <ul
                  className="option-set justify-content-center"
                  data-option-key="filter"
                >
                  <li>
                    <a
                      href="#filter"
                      data-option-value="*"
                      className="selected"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category1">
                      Endodontics
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category2">
                      General dentistry
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category3">
                      Oral medicine
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category4">
                      Oral surgery
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category5">
                      Orthodontics
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category6">
                      Periodontics
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-option-value=".category7">
                      Prosthodontics
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="gallery-specialist gallery-isotope"
                id="gallery-specialist"
              >
                <div className="gallery-item category1">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-01.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Frank Bigham</a>
                    </h5>
                    <div className="doctor-box-position">Associate Dentist</div>
                    <div className="doctor-box-text">
                      <p>
                        Dr. Frank Bigham has been in practice for almost 20
                        years graduating BDS from the University of Manchester,
                        UK in 1997
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-248-715-8767">1-248-715-8767</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category2 category7">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-02.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Pamela Knaack</a>
                    </h5>
                    <div className="doctor-box-position">Dental Hygienist</div>
                    <div className="doctor-box-text">
                      <p>
                        Having graduated in 1990 with an R.D.H, Pamela worked in
                        and shared ownership of a very successful dental
                        practice.
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-816-941-7259">1-816-941-7259</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category3 category6">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-03.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Gerald Gleaves</a>
                    </h5>
                    <div className="doctor-box-position">General Dentist</div>
                    <div className="doctor-box-text">
                      <p>
                        Gerald graduated from the University of Adelaide in 2004
                        being awarded the Dental School Dean’s Award in his
                        final clinical year{" "}
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-262-374-3970">1-262-374-3970</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category5 category7">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-04.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Lillian Sparks</a>
                    </h5>
                    <div className="doctor-box-position">Prosthodontist</div>
                    <div className="doctor-box-text">
                      <p>
                        In 2015 Dr Sparks was accepted as a Fellow in the
                        International Congress of Oral Implantologists (ICOI)
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-281-341-4654">1-281-341-4654</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category1 category2">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-05.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Dennis Dulaney</a>
                    </h5>
                    <div className="doctor-box-position">Orthodontist</div>
                    <div className="doctor-box-text">
                      <p>
                        Dennis completed his Bachelor of Oral Health from the
                        University of Sydney in 2012 and was awarded in his
                        final year.
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-608-253-2915">1-608-253-2915</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category3 category4">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-06.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Jennifer Foster</a>
                    </h5>
                    <div className="doctor-box-position">
                      Oral Health Therapist
                    </div>
                    <div className="doctor-box-text">
                      <p>
                        Dr. Jennifer Foster has been in practice for almost 20
                        years graduating BDS from the University of Manchester,
                        UK in 1997
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-219-756-6567">1-219-756-6567</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category2 category6">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-07.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. William Gardner</a>
                    </h5>
                    <div className="doctor-box-position">Implantologist</div>
                    <div className="doctor-box-text">
                      <p>
                        Dr William Gardner completed her undergraduate dental
                        degree at the University of Western Australia in 2003
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-212-857-8103">1-212-857-8103</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category3 category7">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-08.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Mayra Hastings</a>
                    </h5>
                    <div className="doctor-box-position">Orthodontist</div>
                    <div className="doctor-box-text">
                      <p>
                        With years of experience she prides herself on providing
                        minimally invasive periodontal care for patients
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-816-941-7259">1-816-941-7259</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-item category1 category5">
                  <div className="doctor-box text-center">
                    <div className="doctor-box-photo">
                      <a href="doctor-page.html">
                        <img
                          src="images/content/doctor-09.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                    <h5 className="doctor-box-name">
                      <a href="doctor-page.html">Dr. Billy Logan</a>
                    </h5>
                    <div className="doctor-box-position">Cosmetic Dentist</div>
                    <div className="doctor-box-text">
                      <p>
                        Working over the past 18 years in both private practice
                        and teaching at the universities inspired an interest in
                        Oral Medicine{" "}
                      </p>
                    </div>
                    <div className="doctor-box-bottom">
                      <div className="doctor-box-phone">
                        <i className="icon-telephone" />
                        <a href="tel:+1-262-374-3970">1-262-374-3970</a>
                      </div>
                      <div className="doctor-box-social">
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="hovicon"
                        >
                          <i className="icon-facebook-logo" />
                        </a>
                        <a href="mailto:info@dentco.net" className="hovicon">
                          <i className="icon-black-envelope" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container">
              <div className="title-wrap text-center">
                <h2 className="h1">Specialist Dental Practice</h2>
                <div className="h-decor" />
              </div>
              <div className="text-center">
                <p className="max-900">
                  Our dentists are committed to improving your general dental
                  health and restoring your smile. We are a specialist dental
                  practice also offering the best and most affordable dental
                  implants for your oral health and rehabilitation. Make a FREE
                  dental implants consultation and assessment for a personal
                  treatment plan and meet our friendly and professional staff.
                </p>
                <a
                  href="#"
                  className="btn mt-3"
                  data-toggle="modal"
                  data-target="#modalBookingForm"
                >
                  <i className="icon-right-arrow" />
                  <span>Booking a visit</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
          {/*//section*/}
        </div>
      </div>
    );
  }
}
export default Specialists;
