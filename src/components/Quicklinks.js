import React, { Component } from "react";

class Quicklinks extends Component {
  render() {
    return (
        <div className="quickLinks-wrap js-quickLinks-wrap-d d-none d-lg-flex">
          <div className="quickLinks js-quickLinks">
            <div className="container">
              <div className="row no-gutters">
                <div className="col">
                  <a href="#" className="link">
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
                  <a href="#" className="link">
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
                  <a href="#" className="link">
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
                          Something went wrong, try refreshing and submitting
                          the form again.
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
                        <select name="requestservice" className="form-control">
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
                  <a href="#" className="link">
                    <i className="icon-calendar" />
                    <span>Doctors Timetable</span>
                  </a>
                  <div className="link-drop">
                    <h5 className="link-drop-title">
                      <i className="icon-calendar" />
                      Doctors Timetable
                    </h5>
                    <p>
                      This simply works as a guide and helps you to connect with
                      dentists of your choice. Please confirm the doctor’s
                      availability before leaving your premises.
                    </p>
                    <p className="text-right">
                      <a
                        href="schedule.html"
                        className="btn btn-sm btn-hover-fill"
                      >
                        Details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col">
                  <a href="#" className="link">
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
                        href="index.html#bmiCalculator"
                        className="btn btn-sm btn-fill"
                      >
                        <i className="icon-right-arrow" />
                        <span>Calculator</span>
                        <i className="icon-right-arrow" />
                      </a>{" "}
                      <a href="prices.html" className="btn btn-sm btn-fill">
                        <i className="icon-right-arrow" />
                        <span>Details</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <a href="#" className="link">
                    <i className="icon-emergency-call" />
                    <span>Emergency Case</span>
                  </a>
                  <div className="link-drop">
                    <h5 className="link-drop-title">
                      <i className="icon-emergency-call" />
                      Emergency Case
                    </h5>
                    <p>
                      Emergency dental care may be needed if you have had a blow
                      to the face, lost a filling, or cracked a tooth.{" "}
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
                        href="contact.html"
                        className="btn btn-sm btn-hover-fill"
                      >
                        Our Contacts
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col col-close">
                  <a href="#" className="js-quickLinks-close">
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
    );
  }
}

export default Quicklinks;
