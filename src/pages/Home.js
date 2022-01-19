import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        
        {/*header*/}
        {/*//header*/}
        <div className="page-content">
          {/*section slider*/}
          <div className="section mt-0">
            <div className="quickLinks-wrap js-quickLinks-wrap-d d-none d-lg-flex">
              <div className="quickLinks js-quickLinks closed">
                <div className="container">
                  <div className="row no-gutters">
                    <div className="col">
                      <a href="X" className="link" >
                        <i className="icon-placeholder" />
                        <span>Location</span>
                      </a>
                      <div className="link-drop p-0">
                        <div className="google-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40119.804311386426!2d-97.32055794896301!3d37.64364017354126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bae4ec254beb5f%3A0x410df48edd2f5ede!2sGraceMed%20Jardine%20Family%20Clinic!5e0!3m2!1sen!2sua!4v1579853082410!5m2!1sen!2sua" />
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <a href="X" className="link">
                        <i className="icon-clock" />
                        <span>Working Time</span>
                      </a>
                      <div className="link-drop">
                        <h5 className="link-drop-title">
                          <i className="icon-clock" />
                          Working Time
                        </h5>
                        <table className="row-table">
                          <tbody>
                            <tr>
                              <td>
                                <i>Mon-Thu</i>
                              </td>
                              <td>08:00 - 20:00</td>
                            </tr>
                            <tr>
                              <td>
                                <i>Friday</i>
                              </td>
                              <td> 07:00 - 22:00</td>
                            </tr>
                            <tr>
                              <td>
                                <i>Saturday</i>
                              </td>
                              <td>08:00 - 18:00</td>
                            </tr>
                            <tr>
                              <td>
                                <i>Sunday</i>
                              </td>
                              <td>Closed</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col">
                      <a href="X" className="link">
                        <i className="icon-pencil-writing" />
                        <span>Request Form</span>
                      </a>
                      <div className="link-drop">
                        <h5 className="link-drop-title">
                          <i className="icon-pencil-writing" />
                          Request Form
                        </h5>
                        <form id="requestForm" method="post" noValidate>
                          <div className="successform">
                            <p>Your message was sent successfully!</p>
                          </div>
                          <div className="errorform">
                            <p>
                              Something went wrong, try refreshing and
                              submitting the form again.
                            </p>
                          </div>
                          <div className="input-group">
                            <span>
                              <i className="icon-user" />
                            </span>
                            <input
                              name="requestname"
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="row row-sm-space mt-1">
                            <div className="col">
                              <div className="input-group">
                                <span>
                                  <i className="icon-email2" />
                                </span>
                                <input
                                  name="requestemail"
                                  type="text"
                                  className="form-control"
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="input-group">
                                <span>
                                  <i className="icon-smartphone" />
                                </span>
                                <input
                                  name="requestphone"
                                  type="text"
                                  className="form-control"
                                  placeholder="Your Phone"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="selectWrapper input-group mt-1">
                            <span>
                              <i className="icon-micro" />
                            </span>
                            <select
                              name="requestservice"
                              className="form-control"
                            >
                              <option selected="selected" disabled="disabled">
                                Select Service
                              </option>
                              <option value="Molecular Testing & Oncology">
                                Molecular Testing &amp; Oncology
                              </option>
                              <option value="Histology">Histology</option>
                              <option value="General Diagnostic Tests">
                                General Diagnostic Tests
                              </option>
                              <option value="Naturopathic">Naturopathic</option>
                              <option value="Genetics Tests">
                                Genetics Tests
                              </option>
                              <option value="Cytology">Cytology</option>
                            </select>
                          </div>
                          <div className="row row-sm-space mt-1">
                            <div className="col-sm-6">
                              <div className="input-group flex-nowrap">
                                <span>
                                  <i className="icon-calendar2" />
                                </span>
                                <div className="datepicker-wrap">
                                  <input
                                    name="requestdate"
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="Date"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 mt-1 mt-sm-0">
                              <div className="input-group flex-nowrap">
                                <span>
                                  <i className="icon-clock" />
                                </span>
                                <div className="datepicker-wrap">
                                  <input
                                    name="requesttime"
                                    type="text"
                                    className="form-control timepicker"
                                    placeholder="Time"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right mt-2">
                            <button
                              type="submit"
                              className="btn btn-sm btn-hover-fill"
                            >
                              Request
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col">
                      <a href="X" className="link">
                        <i className="icon-calendar" />
                        <span>Doctors Timetable</span>
                      </a>
                      <div className="link-drop">
                        <h5 className="link-drop-title">
                          <i className="icon-calendar" />
                          Doctors Timetable
                        </h5>
                        <p>
                          This simply works as a guide and helps you to connect
                          with dentists of your choice. Please confirm the
                          doctor’s availability before leaving your premises.
                        </p>
                        <p className="text-right">
                          <a
                            href="#specialistsSection"
                            className="btn btn-sm btn-hover-fill link-inside"
                          >
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <a href="X" className="link">
                        <i className="icon-price-tag" />
                        <span>Calculator</span>
                      </a>
                      <div className="link-drop">
                        <h5 className="link-drop-title">
                          <i className="icon-price-tag" />
                          Quick Pricing
                        </h5>
                        <table className="row-table">
                          <tbody>
                            <tr>
                              <td>Initial Consultation</td>
                              <td>$10</td>
                            </tr>
                            <tr>
                              <td>Dental check-up</td>
                              <td>$15</td>
                            </tr>
                            <tr>
                              <td>Routine Exam (no xrays)</td>
                              <td>$50</td>
                            </tr>
                            <tr>
                              <td>Simple Removal of a tooth</td>
                              <td>$122</td>
                            </tr>
                            <tr>
                              <td>Teeth cleaning</td>
                              <td>$50 - $75</td>
                            </tr>
                            <tr>
                              <td>X-ray image</td>
                              <td>$10</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="text-right btn-wrap mt-2">
                          <a
                            href="#bmiCalculator"
                            className="btn btn-sm btn-fill"
                          >
                            <i className="icon-right-arrow" />
                            <span>Calculator</span>
                            <i className="icon-right-arrow" />
                          </a>
                          <a href="prices.html" className="btn btn-sm btn-fill">
                            <i className="icon-right-arrow" />
                            <span>Details</span>
                            <i className="icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <a href="X" className="link">
                        <i className="icon-emergency-call" />
                        <span>Emergency Case</span>
                      </a>
                      <div className="link-drop">
                        <h5 className="link-drop-title">
                          <i className="icon-emergency-call" />
                          Emergency Case
                        </h5>
                        <p>
                          Emergency dental care may be needed if you have had a
                          blow to the face, lost a filling, or cracked a tooth.{" "}
                        </p>
                        <ul className="icn-list">
                          <li>
                            <i className="icon-telephone" />
                            <span className="phone">
                              1-800-267-0000
                              <br />
                              1-800-267-0001
                            </span>
                          </li>
                          <li>
                            <i className="icon-black-envelope" />
                            <a href="mailto:info@besthotel-email.com">
                              info@besthotel-email.com
                            </a>
                          </li>
                        </ul>
                        <p className="text-right mt-2">
                          <a
                            href="#contactForm"
                            className="btn btn-sm btn-hover-fill link-inside"
                          >
                            Our Contacts
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col col-close">
                      <a href="X" className="js-quickLinks-close">
                        <i
                          className="icon-top"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Close panel"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="quickLinks-open js-quickLinks-open">
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Open panel"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div id="mainSliderWrapper">
              <div className="loading-content">
                <div className="inner-circles-loader" />
              </div>
              <div
                className="main-slider mb-0 arrows-white arrows-bottom"
                id="mainSlider"
                data-slick='{"arrows": false, "dots": true}'
              >
                <div className="slide">
                  <div
                    className="img--holder"
                    data-bg="assets/images/content/slider/slide-01.jpg"
                  />
                  <div className="slide-content center">
                    <div className="vert-wrap container">
                      <div className="vert">
                        <div className="container">
                          <div
                            className="slide-txt1 text-no-uppercase"
                            data-animation="fadeInDown"
                            data-animation-delay="1s"
                          >
                            <b>Find Your Healthy Weight</b>
                          </div>
                          <div
                            className="slide-txt2 text-no-uppercase"
                            data-animation="fadeInUp"
                            data-animation-delay="1.5s"
                          >
                            A goal without a plan is just a wish.
                          </div>
                          <div className="slide-btn">
                            <a
                              href="services.html"
                              className="btn btn-hover-fill"
                              data-animation="fadeInUp"
                              data-animation-delay="2s"
                            >
                              <i className="icon-right-arrow" />
                              <span>Explore our services</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div
                    className="img--holder"
                    data-bg="assets/images/content/slider/slide-02.jpg"
                  />
                  <div className="slide-content center">
                    <div className="vert-wrap container">
                      <div className="vert">
                        <div className="container">
                          <div
                            className="slide-txt1 text-no-uppercase"
                            data-animation="fadeInDown"
                            data-animation-delay="1s"
                          >
                            <b>Meet and Date your Doctor</b>
                          </div>
                          <div
                            className="slide-txt2 text-no-uppercase"
                            data-animation="fadeInUp"
                            data-animation-delay="1.5s"
                          >
                            Perfect online booking service
                          </div>
                          <div className="slide-btn">
                            <a
                              href="services.html"
                              className="btn btn-hover-fill"
                              data-animation="fadeInUp"
                              data-animation-delay="2s"
                            >
                              <i className="icon-right-arrow" />
                              <span>Explore our services</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div
                    className="img--holder"
                    data-bg="assets/images/content/slider/slide-03.jpg"
                  />
                  <div className="slide-content center">
                    <div className="vert-wrap container">
                      <div className="vert">
                        <div className="container">
                          <div
                            className="slide-txt1 text-no-uppercase"
                            data-animation="fadeInDown"
                            data-animation-delay="1s"
                          >
                            <b>Full Medical Care!</b>
                          </div>
                          <div
                            className="slide-txt2 text-no-uppercase"
                            data-animation="fadeInUp"
                            data-animation-delay="1.5s"
                          >
                            Highest standards of customer service
                          </div>
                          <div className="slide-btn">
                            <a
                              href="services.html"
                              className="btn btn-hover-fill"
                              data-animation="fadeInUp"
                              data-animation-delay="2s"
                            >
                              <i className="icon-right-arrow" />
                              <span>Explore our services</span>
                              <i className="icon-right-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section slider*/}
          {/*section welcome */}
          <div className="section bg-norepeat bg-md-none section-top-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6 pl-lg-3 pt-lg-5">
                  <div className="title-wrap-alt">
                    <div className="h-sub-lined theme-color">About us</div>
                    <h2 className="h1">
                      Medical Supervision that Only a{" "}
                      <span className="theme-color">Clinic Can Provide</span>
                    </h2>
                  </div>
                  <p className="p-bold">
                    Dr. Barbara Glover, N.D. is a Body Contouring Expert with a
                    clinical focus in weight loss and weight management care
                  </p>
                  <p>
                    Having been introduced to naturopathic medicine while
                    studying for her medical entrance exams, Dr. Barbara
                    practices integratively, often collaborating with Medical
                    Doctors, Registered Massage Therapists, Chiropractors,
                    Psychotherapists and other Health Care Practitioners.
                  </p>
                  <div className="signature mt-3">
                    <div className="signature-img">
                      <img src="assets/images/content/signature.png" alt="Signature" />
                    </div>
                    <div className="signature-text">
                      <h5>Dr. Barbara Glover</h5>
                      Naturopathic Doctor, Certified Personal Trainer, Ideal
                      Protein Coach
                    </div>
                  </div>
                  <div className="mt-2" />
                  <a
                    href="X"
                    className="btn-link btn-link--sm"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    schedule a visit
                    <i className="icon-right-arrow" />
                  </a>
                </div>
                <div className="col-md-6 mb-lg-5 position-relative mt-3 mt-md-0">
                  <div className="img-with-bg">
                    <img src="assets/images/content/index-img-01.jpg" alt="" />
                    <img
                      src="assets/images/content/img-bg.png"
                      className="img-bg"
                      alt=""
                    />
                  </div>
                  <a href="X"
                    className="video-btn-circle-left js-video-btn"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/uyWt48mWmz0"
                    data-target="#videoModal">
                    <span>
                      <i className="icon-play" />
                    </span>
                  </a>
                  {/* Video Modal */}
                  <div className="modal video-modal fade" id="videoModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              data-src="https://www.youtube.com/embed/mDHGaU_jGrQ?start=10"
                              src="https://www.youtube.com/embed/mDHGaU_jGrQ?start=10"
                              frameBorder={0}
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //Video Modal */}
                  <div className="over-image-card pos-center">
                    <div className="over-image-card-icon">
                      <i className="icon-info" />
                    </div>
                    <div className="over-image-card-text">
                      <h4>Patient Information</h4>
                      <p>
                        The following information will be of interest to weight
                        loss surgery patients.
                      </p>
                      <a
                        href="form-download.html"
                        className="btn btn-white btn-white--all"
                      >
                        <i className="icon-right-arrow" />
                        <span>download forms</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section welcome */}
          {/*section*/}
          <div className="section bg-dotted">
            <div className="container-fluid">
              <div className="title-wrap text-center">
                <h2
                  className="h1 double-title double-title--white double-title--center double-title--vcenter"
                  data-title="Our Services"
                >
                  <span>General Services</span>
                </h2>
                <div className="h-decor" />
              </div>
              <div className="row service-card-style4-carousel js-service-card-style4-carousel">
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-01-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Healthy Nutrition</h5>
                    <div className="service-card-bg">
                      <i className="icon-salat" />
                      <h5 className="service-card-name">Healthy Nutrition</h5>
                      <p>
                        A healthy eating plan that helps you manage your weight
                        includes a variety of foods you may not have considered.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">1</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-02-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Physical Activity</h5>
                    <div className="service-card-bg">
                      <i className="icon-run" />
                      <h5 className="service-card-name">Physical Activity</h5>
                      <p>
                        Physical activity is an important addition to diet, as
                        it boosts metabolism and increases weight-loss.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">2</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-03-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Medical Therapy</h5>
                    <div className="service-card-bg">
                      <i className="icon-pills" />
                      <h5 className="service-card-name">Medical Therapy</h5>
                      <p>
                        Therapy may be offered to individuals who have failed to
                        achieve weight-loss through diet and exercise alone.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">3</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-04-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Changing Behavior</h5>
                    <div className="service-card-bg">
                      <i className="icon-behavior" />
                      <h5 className="service-card-name">Changing Behavior</h5>
                      <p>
                        Modifying behaviors that contributed to developing
                        obesity is one way to treat the disease of obesity.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">4</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-05-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Lifestyle Changes</h5>
                    <div className="service-card-bg">
                      <i className="icon-happy" />
                      <h5 className="service-card-name">Lifestyle Changes</h5>
                      <p>
                        Research shows that taking small steps – not giant leaps
                        — is the best way to get lasting results.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">5</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-06-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Hormone Therapy</h5>
                    <div className="service-card-bg">
                      <i className="icon-molecula" />
                      <h5 className="service-card-name">Hormone Therapy</h5>
                      <p>
                        With aging and weight gain, both men and women can
                        develop an imbalance in hormone production.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">6</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-07-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Wellness Coach</h5>
                    <div className="service-card-bg">
                      <i className="icon-coach" />
                      <h5 className="service-card-name">Wellness Coach</h5>
                      <p>
                        People really need a personalized blend of
                        communication, guidance and accountability to reach
                        their health.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">7</div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="service-page.html" className="service-card-style4">
                    <div className="service-card-img">
                      <img src="assets/images/content/services-08-index.jpg" alt="" />
                    </div>
                    <h5 className="service-card-name">Bariatric Services</h5>
                    <div className="service-card-bg">
                      <i className="icon-instruments" />
                      <h5 className="service-card-name">Bariatric Services</h5>
                      <p>
                        We provide independent, unbiased information on surgical
                        options to assist with weight loss.
                      </p>
                      <span className="btn-plus">+</span>
                      <div className="service-card-img-num">8</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section bg-grey mt-0 pt-2 pb-0">
            <div className="container-fluid container-fluid-visible-sm px-0">
              <div className="row no-gutters bmi-form-wrap">
                <div className="col-md-6">
                  <div className="bmi-form-image">
                    <img src="assets/images/content/banner-left.jpg" alt="" />
                    <div className="image-corner">
                      <i className="icon-calc" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div id="bmiForm" className="bmi-form-col">
                    <div className="bmi-form-col-inside">
                      <div className="title-wrap" id="bmiCalculator">
                        <div className="h-sub-lined theme-color">
                          Get your BMI
                        </div>
                        <h2 className="h1">BMI Calculator</h2>
                      </div>
                      <p className="mt-2">
                        Your treatment options depend on how much you weigh. You
                        can calculate your BMI using this simple tool:
                      </p>
                      <div className="bmi-form">
                        <div id="unit-selector" className="unit-selector row">
                          <div className="col-auto">
                            <input
                              id="unitsMetric"
                              type="radio"
                              name="units"
                              defaultValue="metric"
                              defaultChecked
                            />
                            <label htmlFor="unitsMetric">Metric</label>
                          </div>
                          <div className="col-auto">
                            <input
                              id="unitsUS"
                              type="radio"
                              name="units"
                              defaultValue="us-imperial"
                            />
                            <label htmlFor="unitsUS">US</label>
                          </div>
                        </div>
                        <div id="inputs">
                          <div className="form-group">
                            <div className="row">
                              <div className="col">
                                <input
                                  type="text"
                                  id="bmiHeight"
                                  className="form-control required"
                                  placeholder="Height"
                                />
                                <span className="input-unit" />
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  id="bmiWeight"
                                  className="form-control required"
                                  placeholder="Weight"
                                  pattern="[0-9.]+"
                                />
                                <span className="input-unit" />
                              </div>
                            </div>
                          </div>
                          <div id="bmiError" className="form-group bmi-error" />
                          <div className="form-group mb-0">
                            <div className="row align-items-center">
                              <div className="col">
                                <a
                                  href=""
                                  id="bmiCalculate"
                                  className="btn btn-hover-fill"
                                >
                                  <i className="icon-right-arrow" />
                                  <span>Calculate</span>
                                  <i className="icon-right-arrow" />
                                </a>
                              </div>
                              <div className="col-auto pl-0">
                                <div className="bmi-result">
                                  Your BMI is: <span id="bmi">__</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bmi-form-table">
                        <div className="bmi-class-1">
                          <span>BMI &gt; 18.5</span>
                          <span className="bmi-form-table-info">
                            UNDERWEIGHT
                          </span>
                        </div>
                        <div className="bmi-class-2">
                          <span>18.5 - 24.9</span>
                          <span className="bmi-form-table-info">HEALTHY</span>
                        </div>
                        <div className="bmi-class-3">
                          <span>25 - 29.9</span>
                          <span className="bmi-form-table-info">
                            OVERWEIGHT
                          </span>
                        </div>
                        <div className="bmi-class-4">
                          <span>30 &lt; BMI</span>
                          <span className="bmi-form-table-info">OBESE</span>
                        </div>
                      </div>
                      <p>
                        We recommend you speak to your doctor if your BMI is
                        above 25.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section testimonials*/}
          <div className="section">
            <div className="container-fluid px-0">
              <div className="title-wrap text-center">
                <h2 className="h1">
                  Clients Success <br className="d-sm-none" />
                  Stories
                </h2>
                <div className="h-decor" />
              </div>
              <p className="text-center max-500">
                Check out these unexpected weight-loss lessons from people who
                have been battling their weight for decades.
              </p>
              <div className="reviews-style5">
                <div className="reviews-wrap js-reviews-carousel5">
                  <div className="review">
                    <div className="review-left">
                      <img src="assets/images/content/tesimonials-left-01.png" alt="" />
                    </div>
                    <div className="review-center">
                      <div className="review-title-1">Transform</div>
                      <div className="review-title-2">Life &amp; Health</div>
                      <div className="review-box">
                        <div className="review-author">Diana Wolkers</div>
                        <p className="review-text">
                          Let’s just say I know where to go when I’m taking my
                          health and weight seriously. I’ve had wonderful
                          result. You must be serious with yourself about your
                          weight loss.
                        </p>
                      </div>
                    </div>
                    <div className="review-right">
                      <img src="assets/images/content/tesimonials-right-01.png" alt />
                    </div>
                  </div>
                  <div className="review">
                    <div className="review-left">
                      <img src="assets/images/content/tesimonials-left-02.png" alt />
                    </div>
                    <div className="review-center">
                      <div className="review-title-1">Transform</div>
                      <div className="review-title-2">Life &amp; Health</div>
                      <div className="review-box">
                        <div className="review-author">Mark Brewer</div>
                        <p className="review-text">
                          Mark enjoyed comfort food during family celebrations.
                          Soon, he was eating comfort and fast foods all the
                          time, especially when he was stressed. At 5 feet...
                        </p>
                      </div>
                    </div>
                    <div className="review-right">
                      <img src="assets/images/content/tesimonials-right-02.png" alt />
                    </div>
                  </div>
                  <div className="review">
                    <div className="review-left">
                      <img src="assets/images/content/tesimonials-left-03.png" alt />
                    </div>
                    <div className="review-center">
                      <div className="review-title-1">Transform</div>
                      <div className="review-title-2">Life &amp; Health</div>
                      <div className="review-box">
                        <div className="review-author">Greta Roberts</div>
                        <p className="review-text">
                          It doesn’t sound like much, but it is a big deal to
                          me! I’m on my way and feeling healthier, more
                          energetic and happier than I’ve been in a long time.
                        </p>
                      </div>
                    </div>
                    <div className="review-right">
                      <img src="assets/images/content/tesimonials-right-03.png" alt />
                    </div>
                  </div>
                  <div className="review">
                    <div className="review-left">
                      <img src="assets/images/content/tesimonials-left-04.png" alt />
                    </div>
                    <div className="review-center">
                      <div className="review-title-1">Transform</div>
                      <div className="review-title-2">Life &amp; Health</div>
                      <div className="review-box">
                        <div className="review-author">Natalie Wood</div>
                        <p className="review-text">
                          {" "}
                          Losing weight, working out, and eating healthy has
                          been a complete life style change for me. I haven’t
                          met all of my goals just yet, but I’m on my way for
                          sure.
                        </p>
                      </div>
                    </div>
                    <div className="review-right">
                      <img src="assets/images/content/tesimonials-right-04.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="before-after.html" className="btn btn-hover-fill">
                <i className="icon-right-arrow" />
                <span>more success stories</span>
                <i className="icon-right-arrow" />
              </a>
            </div>
          </div>
          {/*//section testimonials*/}
          {/*section blog posts */}
          <div className="section bg-grey">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="title-wrap text-center text-md-left">
                    <h2 className="h1">From the Blog</h2>
                    <div className="h-decor" />
                  </div>
                  <div className="blog-post-sm-vertical d-block">
                    <div className="blog-post-sm">
                      <div className="blog-post-sm-photo">
                        <img
                          src="assets/images/content/news-01.jpg"
                          alt
                          className="img-fluid"
                        />
                      </div>
                      <div className="blog-post-sm-text">
                        <div className="blog-post-sm-date">Apr 2, 2020</div>
                        <div className="blog-post-sm-title">
                          <a href="blog-post-page.html">
                            Is Eating Late Bad for Your Weight? When to Close
                            the Kitchen
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post-sm">
                      <div className="blog-post-sm-photo">
                        <img
                          src="assets/images/content/news-02.jpg"
                          alt
                          className="img-fluid"
                        />
                      </div>
                      <div className="blog-post-sm-text">
                        <div className="blog-post-sm-date">Apr 2, 2020</div>
                        <div className="blog-post-sm-title">
                          <a href="blog-post-page.html">
                            Lose Weight Without Losing Your Mind: The Small
                            Changes that Get Results
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mt-lg-6">
                    <a href="blog.html" className="btn-link btn-link--sm">
                      view all posts
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-8 mt-3 mt-md-0">
                  <div className="row blog-grid blog-grid-carousel js-blog-grid-carousel m-0">
                    <div className="col-6 col-sm col-lg-6">
                      <div className="blog-post blog-post-style4">
                        <div className="post-image">
                          <a href="blog-post-page.html">
                            <img
                              src="assets/images/blog/blog-post-preview-1.jpg"
                              alt
                            />
                          </a>
                        </div>
                        <div className="blog-post-info">
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              How to Cut Calories Without Going Hungry
                            </a>
                          </h2>
                          <div className="post-teaser">
                            New research suggests that a simple to diagnose
                            heart attacks, may.
                          </div>
                          <div className="post-date-simple">April 4, 2020</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm col-lg-6">
                      <div className="blog-post blog-post-style4">
                        <div className="post-image">
                          <a href="blog-post-page.html">
                            <img
                              src="assets/images/blog/blog-post-preview-2.jpg"
                              alt
                            />
                          </a>
                        </div>
                        <div className="blog-post-info">
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              Upcoming Riverside Activities
                            </a>
                          </h2>
                          <div className="post-teaser">
                            Many things, including infections and develop
                            pimples on the arms.
                          </div>
                          <div className="post-date-simple">April 5, 2020</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section blog posts */}
          {/*section */}
          <div className="section bg-grey mt-0 py-0">
            <div className="container-fluid px-0 over-visible">
              <div className="row white-col-wrap">
                <div className="col-md-6 white-col">
                  <div className="white-col-inside">
                    <div className="title-wrap-alt">
                      <div className="h-sub-lined theme-color">Why us?</div>
                      <h2 className="h1">
                        Weight Loss is Not
                        <br className="d-sm-none" />
                        Just about the <br className="d-sm-none" />
                        <span className="theme-color">
                          Calories and Exercise
                        </span>
                      </h2>
                    </div>
                    <p>
                      Our approach allows to identify the underlying causes that
                      are acting as obstacles which must be addressed before
                      weight loss can be achieved. This approach not only allows
                      you to lose unwanted weight but more importantly allows
                      you to achieve overall health.
                    </p>
                    <ul className="marker-list-md">
                      <li>Access to the latest drugs and treatments</li>
                      <li>Over 25 years’ experience</li>
                    </ul>
                    <div className="mt-3 mt-lg-5">
                      <div className="counter-box-grid">
                        <div className="counter-box-sm">
                          <div className="counter-box-sm-number">
                            <span
                              className="count"
                              data-to={120}
                              data-speed={1500}
                            >
                              0
                            </span>
                            <span className="sup">K</span>
                          </div>
                          <div className="counter-box-sm-text">
                            Kilograms Lost
                          </div>
                        </div>
                        <div className="counter-box-sm">
                          <div className="counter-box-sm-number">
                            <span
                              className="count"
                              data-to={20}
                              data-speed={1500}
                            >
                              0
                            </span>
                            <span className="sup">+</span>
                          </div>
                          <div className="counter-box-sm-text">
                            Permanent Staff
                          </div>
                        </div>
                        <div className="counter-box-sm">
                          <div className="counter-box-sm-number">
                            <span
                              className="count"
                              data-to={25}
                              data-speed={1500}
                            >
                              0
                            </span>
                            <span className="sup">+</span>
                          </div>
                          <div className="counter-box-sm-text">
                            Years Experience
                          </div>
                        </div>
                        <div className="counter-box-sm">
                          <div className="counter-box-sm-number">
                            <span
                              className="count"
                              data-to={10}
                              data-speed={1500}
                            >
                              0
                            </span>
                            <span className="sup">K+</span>
                          </div>
                          <div className="counter-box-sm-text">
                            Happy Clients
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-0 mb-lg-7 image-right-fullheight-col">
                  <div className="image-right-fullheight">
                    <img src="assets/images/content/banner-right.jpg" alt />
                    <div className="image-corner image-corner--left">
                      <i className="icon-achivement" />
                    </div>
                  </div>
                  <div className="over-image-card over-image-card--sm pos-center-1">
                    <div className="over-image-card-icon">
                      <i className="icon-phone-time" />
                    </div>
                    <div className="over-image-card-text">
                      <h4>Free 15 Min Consultation</h4>
                      <p>
                        Use the form to book your FREE 15 min telephone
                        consultation.
                      </p>
                      <a
                        href="#"
                        className="btn btn-white btn-white--all"
                        data-toggle="modal"
                        data-target="#modalBookingForm"
                      >
                        <i className="icon-right-arrow" />
                        <span>book consultation</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section */}
          {/*section prices*/}
          <div className="section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-8 pr-lg-6 order-2 order-md-1">
                  <img
                    src="assets/images/content/img-bg-top-left.png"
                    className="img-bg-top-left"
                    alt
                  />
                  <div className="row no-gutters align-items-center prices-carousel-column js-prices-carousel">
                    <div className="col-sm-6">
                      <div className="prices-box prices-box--style3 prices-box--special">
                        <div className="prices-box-title-wrap">
                          <h4 className="prices-box-title">Weekly Program</h4>
                          <div className="prices-box-price">
                            <sub>$</sub>28<sub>.95</sub>
                          </div>
                          <div className="prices-box-text">Per Week</div>
                        </div>
                        <div className="prices-box-row">
                          Week of Appetite Suppressant
                        </div>
                        <div className="prices-box-row">
                          Crave-a-Way Supplement
                        </div>
                        <div className="prices-box-row">
                          MetaBlast Supplement
                        </div>
                        <div className="prices-box-row">Weekly Weigh-ins</div>
                        <div className="prices-box-row">
                          Physician Consultation
                        </div>
                        <div className="prices-box-link">
                          <a
                            href="form-payonline.html"
                            className="btn-link btn-link--sm"
                          >
                            <span>booking now</span>
                            <i className="icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="prices-box prices-box--style3">
                        <div className="prices-box-title-wrap">
                          <h4 className="prices-box-title">Youth Program</h4>
                          <div className="prices-box-price">
                            <sub>$</sub>120<sub>.00</sub>
                          </div>
                          <div className="prices-box-text">Per Month</div>
                        </div>
                        <div className="prices-box-row">
                          Month of Appetite Suppressant
                        </div>
                        <div className="prices-box-row">Daily Probiotic</div>
                        <div className="prices-box-row">Weekly Weigh-ins</div>
                        <div className="prices-box-row">
                          Physician Consultation
                        </div>
                        <div className="prices-box-link">
                          <a
                            href="form-payonline.html"
                            className="btn-link btn-link--sm"
                          >
                            <span>booking now</span>
                            <i className="icon-right-arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 order-1 order-md-2">
                  <div className="title-wrap-alt">
                    <div className="h-sub-lined theme-color">Our prices</div>
                    <h2 className="h1">
                      Affordable Pricing{" "}
                      <span className="theme-color">Packages</span>
                    </h2>
                  </div>
                  <p>
                    We offer personalized programs to patients who would like to
                    try a diet, weight loss program, or hormone replacement plan
                    that is customized to their specific lifestyles.
                  </p>
                  <div className="mt-3" />
                  <a
                    href="prices.html"
                    className="btn btn-hover-fill d-none d-md-inline"
                  >
                    <i className="icon-right-arrow" />
                    <span>view all prices</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*//section prices*/}
          {/*section call us*/}
          <div className="section mt-5">
            <div className="container">
              <div className="banner-call">
                <div className="row no-gutters">
                  <div className="col-sm-6 col-lg-7 d-flex align-items-center justify-content-center px-15">
                    <div className="text-center">
                      <h2>
                        What are You <br className="d-sm-none" />
                        <span className="theme-color">Weighting</span>
                        for?
                        <br />
                        Let's Get Started
                      </h2>
                      <div className="h-decor" />
                      <p className="mt-sm-1 mt-lg-4 text-center">
                        We pride ourselves in offering programs designed in
                        accordance with healthy weight-loss practices. Our staff
                        provide you with professional guidance AND behavior
                        modification.
                      </p>
                      <div className="mt-2 mt-lg-4">
                        <h6 className="banner-call-text">Call Now:</h6>
                        <a href="X" className="banner-call-phone">
                          <i className="icon-telephone" />
                          1-800-267-0000
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 col-lg-5 col-xl-4 mt-3 mt-md-0">
                    <img
                      src="assets/images/content/banner-callus.jpg"
                      className="shift-right-2"
                      alt = ""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section call us*/}
        </div>
         {/*footer*/}               
        {/*//footer*/}
        <div className="backToTop js-backToTop">
          <i className="icon icon-up-arrow" />
        </div>
        <div
          className="modal modal-form modal-form-sm fade"
          id="modalQuestionForm"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button aria-label="Close" className="close" data-dismiss="modal">
                <i className="icon-error" />
              </button>
              <div className="modal-body">
                <div className="modal-form">
                  <h3>Ask a Question</h3>
                  <form
                    className="mt-15"
                    id="questionForm"
                    method="post"
                    noValidate
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
                    <div className="input-group">
                      <span>
                        <i className="icon-user" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="input-group">
                      <span>
                        <i className="icon-email2" />
                      </span>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Your Email*"
                      />
                    </div>
                    <div className="input-group">
                      <span>
                        <i className="icon-smartphone" />
                      </span>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Your Phone"
                      />
                    </div>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your comment*"
                      defaultValue={""}
                    />
                    <div className="text-right mt-2">
                      <button
                        type="submit"
                        className="btn btn-sm btn-hover-fill"
                      >
                        Ask Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-form fade" id="modalBookingForm">
          <div className="modal-dialog">
            <div className="modal-content">
              <button aria-label="Close" className="close" data-dismiss="modal">
                <i className="icon-error" />
              </button>
              <div className="modal-body">
                <div className="modal-form">
                  <h3>Book an Appointment</h3>
                  <form
                    className="mt-15"
                    id="bookingForm"
                    method="post"
                    noValidate
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
                    <div className="input-group">
                      <span>
                        <i className="icon-user" />
                      </span>
                      <input
                        type="text"
                        name="bookingname"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="row row-xs-space mt-1">
                      <div className="col-sm-6">
                        <div className="input-group">
                          <span>
                            <i className="icon-email2" />
                          </span>
                          <input
                            type="text"
                            name="bookingemail"
                            className="form-control"
                            autoComplete="off"
                            placeholder="Your Email*"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mt-1 mt-sm-0">
                        <div className="input-group">
                          <span>
                            <i className="icon-smartphone" />
                          </span>
                          <input
                            type="text"
                            name="bookingphone"
                            className="form-control"
                            autoComplete="off"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row row-xs-space mt-1">
                      <div className="col-sm-6">
                        <div className="input-group">
                          <span>
                            <i className="icon-birthday" />
                          </span>
                          <input
                            type="text"
                            name="bookingage"
                            className="form-control"
                            autoComplete="off"
                            placeholder="Your age"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="selectWrapper input-group mt-1">
                      <span>
                        <i className="icon-micro" />
                      </span>
                      <select name="bookingservice" className="form-control">
                        <option selected="selected" disabled="disabled">
                          Select Service
                        </option>
                        <option value="Molecular Testing & Oncology">
                          Molecular Testing &amp; Oncology
                        </option>
                        <option value="Histology">Histology</option>
                        <option value="General Diagnostic Tests">
                          General Diagnostic Tests
                        </option>
                        <option value="Naturopathic">Naturopathic</option>
                        <option value="Genetics Tests">Genetics Tests</option>
                        <option value="Cytology">Cytology</option>
                      </select>
                    </div>
                    <div className="input-group flex-nowrap mt-1">
                      <span>
                        <i className="icon-calendar2" />
                      </span>
                      <div className="datepicker-wrap">
                        <input
                          name="bookingdate"
                          type="text"
                          className="form-control datetimepicker"
                          placeholder="Date"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="input-group flex-nowrap mt-1">
                      <span>
                        <i className="icon-clock" />
                      </span>
                      <div className="datepicker-wrap">
                        <input
                          name="bookingtime"
                          type="text"
                          className="form-control timepicker"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <textarea
                      name="bookingmessage"
                      className="form-control"
                      placeholder="Your comment"
                      defaultValue={""}
                    />
                    <div className="text-right mt-2">
                      <button
                        type="submit"
                        className="btn btn-sm btn-hover-fill"
                      >
                        Book now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
