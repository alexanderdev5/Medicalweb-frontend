import React, { Component } from "react";
import Quicklinks from "../components/Quicklinks";

class About extends Component {
  render() {
    return (
      <div>
        
        {/*//quick links*/}
        <Quicklinks />
        {/*//quick links*/}
        <div className="page-content">
          {/*section*/}
          <div className="section mt-0">
            <div className="breadcrumbs-wrap">
              <div className="container">
                <div className="breadcrumbs">
                  <a href="X">Home</a>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section page-content-first">
            <div className="container">
              <div className="text-center mb-2  mb-md-3 mb-lg-4">
                <div className="h-sub theme-color">
                  Our dentists working to your smile
                </div>
                <h1>About Our Clinic</h1>
                <div className="h-decor" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-left pr-md-4">
                  <img
                    src="assets/images/content/about-01.jpg"
                    className="w-100"
                    alt=''
                  />
                  <div className="row mt-3">
                    <div className="col-6">
                      <img
                        src="assets/images/content/about-03.jpg"
                        className="w-100"
                        alt=''
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="assets/images/content/about-04.jpg"
                        className="w-100"
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3 mt-lg-0">
                  <p>
                    For nearly 16 years, our financial district dentist, Adam
                    Smith, DDS and the dental team at DentCo Dental Clinic have
                    provided cosmetic dentistry as well as family dentistry
                    services. Dr. Adam understands that patients have a variety
                    of practices in the area to choose from.
                  </p>
                  <p>
                    Come and experience dentistry carried out a little
                    differently in our Private Practice. A practice where you
                    will:
                  </p>
                  <ul className="marker-list-md">
                    <li>Be involved in your care and treatment choices</li>
                    <li>Be welcomed and feel relaxed and cared for</li>
                    <li>Appreciate the well qualified, experienced team</li>
                    <li>Want the best dentistry available</li>
                  </ul>
                  <div className="mt-3 mt-md-7" />
                  <h3>
                    Mission / Vision{" "}
                    <span className="theme-color">Statement</span>
                  </h3>
                  <div className="mt-0 mt-md-4" />
                  <p>
                    It is our mission to exceed expectations by providing
                    exceptional dental care to our patients and at the same
                    time, building relationships of trust with them.
                  </p>
                  <p>
                    Our vision is to be one of the leading dental clinic in the
                    area, expanding our services to reach additional community
                    members. We work to be trusted by patients, a valued partner
                    in the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container-fluid px-0">
              <div className="row no-gutters">
                <div className="col-xl-6 bg-grey">
                  <div className="max-670 mx-lg-auto px-15">
                    <div className="title-wrap">
                      <h2 className="h1">
                        Our <span className="theme-color">Advantages</span>
                      </h2>
                    </div>
                    <div className="mt-lg-5" />
                    <div className="row">
                      <div className="col-sm-7">
                        <ul className="marker-list-md">
                          <li>Specialists and Dentists as One Team</li>
                          <li>Initial Dental Assessment</li>
                          <li>All Types of Dental Services</li>
                          <li>Safety by Credentials</li>
                          <li>Dental Implant Experience</li>
                          <li>Innovation</li>
                          <li>3D Imaging Center</li>
                        </ul>
                      </div>
                      <div className="col-sm-5 mt-1 mt-sm-0">
                        <ul className="marker-list-md">
                          <li>On-site Laboratory</li>
                          <li>“Same Day” Dentistry</li>
                          <li>“Same Day” Dental Implants</li>
                          <li>Innovative Clinic Design</li>
                          <li>Complimentary Consultations</li>
                          <li>Insurance and Financing</li>
                          <li>Services Cost</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 banner-left bg-full"
                  style={{
                    backgroundImage: "url(images/content/banner-right-1.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container">
              <div className="title-wrap text-center">
                <div className="h-sub theme-color">Motivation is easy</div>
                <h2 className="h1">Our Core Values</h2>
                <div className="h-decor" />
              </div>
              <div
                className="row js-icn-carousel icn-carousel flex-column flex-sm-row text-center text-sm-left"
                data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}]}'
              >
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-innovation" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Innovation</h5>
                      <p>
                        Embrace change, encourage invention and continually
                        remain at the forefront of advances in oral health for
                        the good of our patients
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-compassion" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Compassion</h5>
                      <p>
                        Demonstrate caring and sensitivity for the diverse
                        backgrounds of our patients and colleagues and
                        generosity in our communities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-integrity" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Integrity</h5>
                      <p>
                        Adhere to high ethical and professional standards,
                        demonstrating commitment to our responsibilities with
                        trust, honesty and respect for all
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container-fluid px-0">
              <div
                className="banner-center bg-cover"
                style={{
                  backgroundImage: "url(images/content/banner-center.jpg)",
                }}
              >
                <div className="banner-center-caption text-center">
                  <div className="banner-center-text1">
                    Get the Smile You've Always Wanted!
                  </div>
                  <div className="banner-center-text2">
                    We strive to provide the highest quality dental treatment at
                    reasonable fees
                  </div>
                  <a
                    href="#"
                    className="btn btn-white mt-5"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow" />
                    <span>Request an Appointment</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*section*/}
          {/*section*/}
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="title-wrap">
                    <h2 className="h1">Our Office </h2>
                    <div className="h-decor" />
                  </div>
                  <p>
                    Our dental office in is a state of the art dental facility
                    equipped with the newest technology, capable of handling all
                    of your dental needs. All of our operatories are equipped
                    with intraoral cameras that are able to show us, and you,
                    the precise treatment you might attain on a television
                    screen.
                  </p>
                  <div className="mt-4" />
                  <h3>Amenities</h3>
                  <div className="mt-lg-4" />
                  <ul className="marker-list-md">
                    <li>TV’s in each treatment room</li>
                    <li>Complimentary coffee, Juice</li>
                    <li>Wireless Internet</li>
                    <li>Warm lavender towels</li>
                  </ul>
                </div>
                <div className="col-lg-8 mt-4 mt-lg-0">
                  <div className="slider-gallery">
                    <ul className="slider-gallery-main list-unstyled js-slider-gallery-main">
                      <li>
                        <img src="assets/images/content/slider-gallery-00.html" alt='' />
                      </li>
                      <li>
                        <img src="assets/images/content/slider-gallery-01.html" alt='' />
                      </li>
                      <li>
                        <img src="assets/images/content/slider-gallery-02.html" alt='' />
                      </li>
                      <li>
                        <img src="assets/images/content/slider-gallery-03.html" alt='' />
                      </li>
                      <li>
                        <img src="assets/images/content/slider-gallery-04.html" alt='' />
                      </li>
                      <li>
                        <img src="assets/images/content/slider-gallery-05.jpg" alt='' />
                      </li>
                    </ul>
                    <ul className="slider-gallery-thumbs list-unstyled js-slider-gallery-thumbs">
                      <li>
                        <img
                          src="assets/images/content/slider-gallery-00-sm.html"
                          alt=''
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/content/slider-gallery-01-sm.html"
                          alt=''
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/content/slider-gallery-02-sm.html"
                          alt=''
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/content/slider-gallery-03-sm.html"
                          alt=''
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/content/slider-gallery-04-sm.html"
                          alt=''
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/content/slider-gallery-05-sm.html"
                          alt=''
                        />
                      </li>
                    </ul>
                  </div>
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

export default About;
