import React,{Component} from 'react'


class Footer extends Component{
    render(){
            return(
                    <div>
                            {/*footer*/}
        <div className="footer mt-0">
          <div className="container">
            <div className="row py-1 py-md-2 px-lg-0">
              <div className="col-lg-4 footer-col1 pt-lg-3">
                <div className="row flex-column flex-md-row flex-lg-column">
                  <div className="col-md col-lg-auto">
                    <div className="footer-logo">
                      <img
                        src="assets/images/footer-logo.png"
                        alt = ""
                        className="img-fluid"
                      />
                    </div>
                    <div className="mt-2 mt-lg-0" />
                    <div className="footer-social d-none d-md-block d-lg-none">
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
                  <div className="col-md">
                    <div className="footer-text mt-1 mt-lg-1">
                      <p>
                        To receive email releases, simply provide
                        <br />
                        us with your email below
                      </p>
                      <form action="#" className="footer-subscribe">
                        <div className="input-group">
                          <input
                            name="subscribe_mail"
                            type="text"
                            className="form-control"
                            placeholder="Your Email"
                          />
                          <span>
                            <i className="icon-black-envelope" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="footer-social d-md-none d-lg-block">
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
              </div>
              <div className="col-sm-6 col-lg-4">
                <h3>Blog Posts</h3>
                <div className="h-decor" />
                <div className="footer-post d-flex">
                  <div className="footer-post-photo">
                    <img
                      src="assets/images/content/footer-post-author-01.jpg"
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="footer-post-text">
                    <div className="footer-post-title">
                      <a href="X">The doctor’s guide to healthy break...</a>
                    </div>
                    <p>September 26, 2018</p>
                  </div>
                </div>
                <div className="footer-post d-flex">
                  <div className="footer-post-photo">
                    <img
                      src="assets/images/content/footer-post-author-03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="footer-post-text">
                    <div className="footer-post-title">
                      <a href="X">So, how much sex is normal?</a>
                    </div>
                    <p>August 22, 2018</p>
                  </div>
                </div>
                <div className="footer-post d-flex">
                  <div className="footer-post-photo">
                    <img
                      src="assets/images/content/footer-post-author-02.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="footer-post-text">
                    <div className="footer-post-title">
                      <a href="X">Tooth Fairy Traditions...</a>
                    </div>
                    <p>July 25, 2018</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <h3>Our Contacts</h3>
                <div className="h-decor" />
                <ul className="icn-list">
                  <li>
                    <i className="icon-placeholder2" />
                    1560 Holden Street San Diego, CA 92139
                    <br />
                    <a href="X" className="btn btn-xs btn-gradient">
                      <i className="icon-placeholder2" />
                      <span>Get directions on the map</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </li>
                  <li>
                    <i className="icon-telephone" />
                    <b>
                      <span className="phone">
                        <span className="text-nowrap">1-800-267-0000</span>,{" "}
                        <span className="text-nowrap">1-800-267-0001</span>
                      </span>
                    </b>
                    <br />
                    (24/7 General inquiry)
                  </li>
                  <li>
                    <i className="icon-black-envelope" />
                    <a href="mailto:info@dentco.net">informacion.surgeon@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row text-center text-md-left">
                <div className="col-sm">
                  Copyright © 2022 <a href="X">MEDICAL WEBSITE</a>
                  <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                  <a href="X">Privacy Policy</a>
                </div>
                <div className="col-sm-auto ml-auto">
                  <span className="d-none d-sm-inline">
                    Para casos de emergencias&nbsp;&nbsp;&nbsp;
                  </span>
                  <i className="icon-telephone" />
                  &nbsp;&nbsp;<b>86-985-655</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*//footer*/}

                    </div>
        )
    }
}

export default Footer ;
