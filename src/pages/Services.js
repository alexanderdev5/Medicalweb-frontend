import React, { Component } from "react";
import { Link } from "react-router-dom";
import Quicklinks from "../components/Quicklinks";



class Services extends Component {
  render() {
    return (
      
      <div>
          {/*quick links*/}
          <Quicklinks />
          {/*//quick links*/}
          <div className="page-content">
            {/*section*/}
            <div className="section mt-0">
              <div className="breadcrumbs-wrap">
                <div className="container">
                  <div className="breadcrumbs">
                    <Link to='medicalweb/'>Home</Link>
                    <span>Services</span>
                  </div>
                </div>
              </div>
            </div>
            {/*//section*/}
            {/*section*/}
            <div className="section page-content-first">
              <div className="container">
                <div className="text-center mb-2  mb-md-3 mb-lg-4">
                  <div className="h-sub theme-color">What We Offer</div>
                  <h1>Our Services</h1>
                  <div className="h-decor" />
                  <div className="text-center max-670 mt-3 mx-md-auto">
                    <p>
                      Our programs customize the weight loss plan to the
                      patient’s needs. All plans are medically supervised and
                      under physician’s care
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row col-equalH">
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="X">
                          <img
                            src="assets/images/content/services-01.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="X">Healthy Nutrition</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Healthy eating is one of the best things you can do to
                        prevent and control health problems such as heart
                        disease, high blood pressure, type 2 diabetes, and some
                        types of cancer.
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Popular Diet Plans</li>
                        <li>Healthy Weight</li>
                        <li>Tools and Calculators</li>
                        <li>Healthy Eating &amp; Nutrition</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="X">
                          <img
                            src="assets/images/content/services-02.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Physical Activity</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Regular physical activity is important for good health,
                        and it’s especially important if you’re trying to lose
                        weight or to maintain a healthy weight.
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Jogging / running</li>
                        <li>Swimming laps</li>
                        <li>Rollerblading skating</li>
                        <li>Cross-country skiing</li>
                        <li>Jumping rope</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="service-page.html">
                          <img
                            src="assets/images/content/services-03.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Medical Therapy</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Weight loss drugs, approved by the Food and Drug
                        Administration (FDA) for treating obesity, include:
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Phentermine Products</li>
                        <li>Orlistat</li>
                        <li>Lorcaserin HCI</li>
                        <li>Naltrexone HCI AND Bupropion HCI</li>
                        <li>Phentermine-Topiramate ER</li>
                        <li>Liraglutide Injection</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="#">
                          <img
                            src="assets/images/content/services-04.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Changing Behavior</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Modifying behaviors that contributed to developing
                        obesity is one way to treat the disease of obesity
                        either alone or in conjunction with other treatments.{" "}
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Self-monitoring</li>
                        <li>Increasing physical activity</li>
                        <li>Engaging in a support group</li>
                        <li>Setting realistic goals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="service-page.html">
                          <img
                            src="assets/images/content/services-05.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Lifestyle Changes</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Your lifestyle includes seemingly small behaviors that
                        can add up to have a large influence on your health.
                        These may include:
                      </p>
                      <ul className="marker-list-md-line">
                        <li>The amount of water you drink</li>
                        <li>Your snacking habits</li>
                        <li>How you spend your free time</li>
                        <li>The way you cope with stress</li>
                        <li>Sleeping habits</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="service-page.html">
                          <img
                            src="assets/images/content/services-06.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Hormone Therapy</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Both men and women need the right amount of sex hormones
                        for optimal health. When in balance, hormones contribute
                        to various physiological functions, including:
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Keeping bones strong</li>
                        <li>Protecting against certain diseases</li>
                        <li>Distributing fat</li>
                        <li>Reducing fat storage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="service-page.html">
                          <img
                            src="assets/images/content/services-07.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Wellness Coach</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Whether you want to lose weight, eat more nutritiously,
                        or become more physically active, the coaches Weight
                        Loss are here for you.
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Weight Loss Coach Approach</li>
                        <li>EFT for Weight Loss</li>
                        <li>One-on-One Coaching</li>
                        <li>Meet the Weight Loss Coach</li>
                        <li>Group Programs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                      <div className="service-card-photo">
                        <a href="service-page.html">
                          <img
                            src="assets/images/content/services-08.jpg"
                            className="img-fluid"
                            alt=''
                          />
                        </a>
                      </div>
                      <h5 className="service-card-name">
                        <a href="service-page.html">Bariatric Services</a>
                      </h5>
                      <div className="h-decor" />
                      <p>
                        Our surgeries are done laparoscopically, or through
                        minimally-invasive incisions, which reduces pain,
                        complications and recovery time. Some of the surgical
                        services we provide include:
                      </p>
                      <ul className="marker-list-md-line">
                        <li>Gastric bypass surgery (Roux-en-Y)</li>
                        <li>Gastric sleeve surgery</li>
                        <li>Revision surgeries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*//section*/}
          </div>  
      </div>      
    )
  }
}

export default Services;
