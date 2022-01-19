import React, { Component } from "react";
import Quicklinks from "../components/Quicklinks";

class Blog extends Component {
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
                  <a href="index.html">Home</a>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section page-content-first">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 aside">
                  <div className="blog-posts">
                    <div className="blog-post">
                      <div className="blog-post-info">
                        <div className="post-date">
                          17<span>JAN</span>
                        </div>
                        <div>
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              How to Choose the Best Toothbrush
                            </a>
                          </h2>
                          <div className="post-meta">
                            <div className="post-meta-author">
                              by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                            </div>
                            <div className="post-meta-social">
                              <a href="#">
                                <i className="icon-facebook-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-twitter-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-google-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-image">
                        <a href="blog-post-page.html">
                          <img src="assets/images/blog/blog-post-img-1.jpg" alt='' />
                        </a>
                      </div>
                      <div className="post-teaser">
                        Oral hygiene is essential for your overall wellbeing,
                        not just your oral health. In fact, gum disease is a
                        major risk factor for developing certain dangerous
                        health conditions, such as diabetes and heart disease
                        […]
                      </div>
                      <div className="mt-3 mt-lg-4">
                        <a
                          href="blog-post-page.html"
                          className="btn btn-sm btn-hover-fill"
                        >
                          <i className="icon-right-arrow" />
                          <span>Read more</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-post">
                      <div className="blog-post-info">
                        <div className="post-date">
                          17<span>JAN</span>
                        </div>
                        <div>
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              FREE Dental Screening &amp; X-Rays
                            </a>
                          </h2>
                          <div className="post-meta">
                            <div className="post-meta-author">
                              by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                            </div>
                            <div className="post-meta-social">
                              <a href="#">
                                <i className="icon-facebook-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-twitter-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-google-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-image">
                        <div className="post-video">
                          <iframe
                            src="https://player.vimeo.com/video/1710363?title=0&byline=0&portrait=0"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      <div className="post-teaser">
                        It’s okay to not brush my teeth tonight. A thought that
                        has crossed almost everyone’s minds at least once or
                        twice. Well, it’s time to stop […]
                      </div>
                      <div className="mt-3 mt-lg-4">
                        <a
                          href="blog-post-page.html"
                          className="btn btn-sm btn-hover-fill"
                        >
                          <i className="icon-right-arrow" />
                          <span>Read more</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-post">
                      <div className="blog-post-info">
                        <div className="post-date">
                          17<span>JAN</span>
                        </div>
                        <div>
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              Are you brushing your teeth correctly?
                            </a>
                          </h2>
                          <div className="post-meta">
                            <div className="post-meta-author">
                              by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                            </div>
                            <div className="post-meta-social">
                              <a href="#">
                                <i className="icon-facebook-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-twitter-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-google-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-teaser">
                        <p>
                          Becoming a dentist can result in an abundance of
                          professional possibilities. Besides private practice
                          options, dental school graduates can teach future
                          dentists, travel with international health and relief
                          organizations, work in hospital emergency rooms, or
                          conduct advanced laboratory research.
                        </p>
                        <div className="quote">
                          <p>
                            There are over 65 dental schools in the United
                            States accredited by the ADA’s Commission on Dental
                            Accreditation. Each program is meticulously assessed
                            to ensure compliance with quality and content
                            standards. Typically, DMD and DDS programs take four
                            years to complete. Additional years are necessary
                            for dental specialties such as Pediatric Dentistry
                            and Oral and Maxillofacial Surgery.
                          </p>
                          <p>
                            Admission to dental school is highly competitive,
                            but the application process is straightforward. In
                            fact, many U.S. dental schools utilize the American
                            Association of Dental Schools Application Service
                            enabling you to submit one online application and
                            send it to a variety of schools.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 mt-lg-4">
                        <a
                          href="blog-post-page.html"
                          className="btn btn-sm btn-hover-fill"
                        >
                          <i className="icon-right-arrow" />
                          <span>Read more</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-post">
                      <div className="blog-post-info">
                        <div className="post-date">
                          17<span>JAN</span>
                        </div>
                        <div>
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              How to Choose the Best Toothbrush
                            </a>
                          </h2>
                          <div className="post-meta">
                            <div className="post-meta-author">
                              by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                            </div>
                            <div className="post-meta-social">
                              <a href="#">
                                <i className="icon-facebook-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-twitter-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-google-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-image">
                        <div className="slider-gallery post-carousel js-post-carousel">
                          <a href="#">
                            <img src="assets/images/blog/blog-post-img-2.jpg" alt='' />
                          </a>
                          <a href="#">
                            <img src="assets/images/blog/blog-post-img-2-1.jpg" alt='' />
                          </a>
                          <a href="#">
                            <img src="assets/images/blog/blog-post-img-2-2.jpg" alt='' />
                          </a>
                        </div>
                      </div>
                      <div className="post-teaser">
                        Oral hygiene is essential for your overall wellbeing,
                        not just your oral health. In fact, gum disease is a
                        major risk factor for developing certain dangerous
                        health conditions, such as diabetes and heart disease
                        […]
                      </div>
                      <div className="mt-3 mt-lg-4">
                        <a
                          href="blog-post-page.html"
                          className="btn btn-sm btn-hover-fill"
                        >
                          <i className="icon-right-arrow" />
                          <span>Read more</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-post">
                      <div className="blog-post-info">
                        <div className="post-date">
                          17<span>JAN</span>
                        </div>
                        <div>
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              How to Choose the Best Toothbrush
                            </a>
                          </h2>
                          <div className="post-meta">
                            <div className="post-meta-author">
                              by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                            </div>
                            <div className="post-meta-social">
                              <a href="#">
                                <i className="icon-facebook-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-twitter-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-google-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-image">
                        <div className="post-music">
                          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/9913211&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false" />
                        </div>
                      </div>
                      <div className="post-teaser">
                        Oral hygiene is essential for your overall wellbeing,
                        not just your oral health. In fact, gum disease is a
                        major risk factor for developing certain dangerous
                        health conditions, such as diabetes and heart disease
                        […]
                      </div>
                      <div className="mt-3 mt-lg-4">
                        <a
                          href="blog-post-page.html"
                          className="btn btn-sm btn-hover-fill"
                        >
                          <i className="icon-right-arrow" />
                          <span>Read more</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-post">
                      <div className="blog-post-info">
                        <div className="post-date">
                          17<span>JAN</span>
                        </div>
                        <div>
                          <h2 className="post-title">
                            <a href="blog-post-page.html">
                              The Benefits of Using a Tongue Scraper
                            </a>
                          </h2>
                          <div className="post-meta">
                            <div className="post-meta-author">
                              by{" "}
                              <a href="#">
                                <i>admin</i>
                              </a>
                            </div>
                            <div className="post-meta-social">
                              <a href="#">
                                <i className="icon-facebook-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-twitter-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-google-logo" />
                              </a>
                              <a href="#">
                                <i className="icon-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-image">
                        <a href="blog-post-page.html">
                          <img src="assets/images/blog/blog-post-img-3.html" alt='' />
                        </a>
                        <div className="post-link-wrapper">
                          <div className="vert-wrap">
                            <div className="vert">
                              <a href="#" className="post-link">
                                <i className="icon-link-symbol" />
                                www.cirujanoroger.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-teaser">
                        You probably think that as long as you brush and floss
                        every day your oral health should be fine. While
                        brushing and flossing is critical for […]
                      </div>
                      <div className="mt-3 mt-lg-4">
                        <a
                          href="blog-post-page.html"
                          className="btn btn-sm btn-hover-fill"
                        >
                          <i className="icon-right-arrow" />
                          <span>Read more</span>
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <ul className="pagination justify-content-center">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        15
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 aside-left mt-5 mt-lg-0">
                  <div className="side-block">
                    <form action="#" className="content-search d-flex">
                      <div className="input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Keywords"
                        />
                      </div>
                      <button type="submit">
                        <i className="icon-search" />
                      </button>
                    </form>
                  </div>
                  <div className="side-block">
                    <h3 className="side-block-title">Categories</h3>
                    <ul className="categories-list">
                      <li>
                        <a href="#">Cosmetic Dentistry</a>
                      </li>
                      <li>
                        <a href="#">General Dentistry</a>
                      </li>
                      <li>
                        <a href="#">Children`s Dentistry</a>
                      </li>
                      <li>
                        <a href="#">Dental Implants</a>
                      </li>
                      <li>
                        <a href="#">Orthodontics</a>
                      </li>
                      <li>
                        <a href="#">Dental Emergency</a>
                      </li>
                      <li>
                        <a href="#">Periodontics</a>
                      </li>
                      <li>
                        <a href="#">Dental Surgery</a>
                      </li>
                      <li>
                        <a href="#">Dental Crowns &amp; Bridges</a>
                      </li>
                    </ul>
                  </div>
                  <div className="side-block">
                    <h3 className="side-block-title">Date Posts</h3>
                    <div className="calendar">
                      <div className="calendar__header">
                        <a href="#" className="prev">
                          <i className="icon-left-arrow" />
                        </a>
                        <span className="month">January 2018</span>
                        <a href="#" className="next">
                          <i className="icon-right-arrow" />
                        </a>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                            <th>S</th>
                          </tr>
                          <tr>
                            <td />
                            <td />
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                          </tr>
                          <tr>
                            <td>27</td>
                            <td>28</td>
                            <td className="selected">29</td>
                            <td>30</td>
                            <td>31</td>
                            <td />
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="side-block">
                    <h3 className="side-block-title">Tags</h3>
                    <ul className="tags-list">
                      <li>
                        <a href="#">Dentistry</a>
                      </li>
                      <li>
                        <a href="#">Dental Implants</a>
                      </li>
                      <li>
                        <a href="#">Orthodontics</a>
                      </li>
                      <li>
                        <a href="#">Dentist</a>
                      </li>
                      <li>
                        <a href="#">Dental Surgery</a>
                      </li>
                      <li>
                        <a href="#">Cosmetic Dentistry</a>
                      </li>
                      <li>
                        <a href="#">Tooth Filling</a>
                      </li>
                    </ul>
                  </div>
                  <div className="side-block">
                    <h3 className="side-block-title">Recent Posts</h3>
                    <div className="blog-post post-preview">
                      <div className="post-image">
                        <a href="blog-post-page.html">
                          <img src="assets/images/blog/blog-post-featured-1.jpg" alt />
                        </a>
                      </div>
                      <div>
                        <h4 className="post-title">
                          <a href="blog-post-page.html">
                            Are you brushing your teeth correctly?
                          </a>
                        </h4>
                        <div className="post-meta">
                          <div className="post-meta-author text-nowrap">
                            by{" "}
                            <a href="#">
                              <i>admin</i>
                            </a>
                          </div>
                          <div className="post-meta-date text-nowrap">
                            <i className="icon icon-clock3" />
                            17 Jan, 2018
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post post-preview">
                      <div className="post-image">
                        <a href="blog-post-page.html">
                          <img src="assets/images/blog/blog-post-featured-2.jpg" alt />
                        </a>
                      </div>
                      <div>
                        <h4 className="post-title">
                          <a href="blog-post-page.html">
                            FREE Dental Screening &amp; X-Rays
                          </a>
                        </h4>
                        <div className="post-meta">
                          <div className="post-meta-author text-nowrap">
                            by{" "}
                            <a href="#">
                              <i>admin</i>
                            </a>
                          </div>
                          <div className="post-meta-date text-nowrap">
                            <i className="icon icon-clock3" />
                            17 Jan, 2018
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post post-preview">
                      <div className="post-image">
                        <a href="blog-post-page.html">
                          <img src="assets/images/blog/blog-post-featured-3.jpg" alt />
                        </a>
                      </div>
                      <div>
                        <h4 className="post-title">
                          <a href="blog-post-page.html">
                            COMO ELEGIR EL MEJOR CIRUJANO?
                          </a>
                        </h4>
                        <div className="post-meta">
                          <div className="post-meta-author text-nowrap">
                            by{" "}
                            <a href="#">
                              <i>admin</i>
                            </a>
                          </div>
                          <div className="post-meta-date text-nowrap">
                            <i className="icon icon-clock3" />
                            17 Jan, 2018
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="side-block">
                    <h3 className="side-block-title">Archives</h3>
                    <ul className="marker-list-md">
                      <li>
                        <a href="#">October 2017</a>
                      </li>
                      <li>
                        <a href="#">November 2017</a>
                      </li>
                      <li>
                        <a href="#">December 2017</a>
                      </li>
                      <li>
                        <a href="#">January 2018</a>
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

export default Blog;
