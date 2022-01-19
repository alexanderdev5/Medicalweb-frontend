import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
            return(
              
        <header className="header">
          <div className="header-quickLinks js-header-quickLinks d-lg-none">
            <div className="quickLinks-top js-quickLinks-top" />
            <div className="js-quickLinks-wrap-m"></div>
          </div>
          <div className="header-topline header-topline--compact d-none d-lg-flex">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-auto d-flex align-items-center">
                  <div className="header-info">
                    <i className="icon-placeholder2" />
                    Av.Arequipa #5512 - Peru
                  </div>
                  <div className="header-phone">
                    <i className="icon-telephone" />
                    <a href="tel:1-847-555-5555">985862358</a>
                  </div>
                  <div className="header-info">
                    <i className="icon-black-envelope" />
                    <a href="mailto:info@dentco.net">cirujano.roger@gmail.com</a>
                  </div>
                </div>
                <div className="col-auto ml-auto d-flex align-items-center">
                  <span className="header-social">
                    <a href="X" className="hovicon">
                      <i className="icon-facebook-logo-circle" />
                    </a>
                    <a href="X" className="hovicon">
                      <i className="icon-twitter-logo-circle" />
                    </a>
                    <a href="X" className="hovicon">
                      <i className="icon-google-plus-circle" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="header-content">
            <div className="container">
              <div className="row align-items-lg-center">
                <button
                  className="navbar-toggler collapsed"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                >
                  <span className="icon-menu" />
                </button>
                <div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
                  <a href="#" className="header-logo">
                    <img src="assets/images/logo.png"  className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="col-lg ml-auto header-nav-wrap">
                  <div className="header-nav js-header-nav">
                    <nav className="navbar navbar-expand-lg btco-hover-menu">
                      <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarNavDropdown"
                      >
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link 
                              className="nav-link " to="/services">
                              SERVICIOS
                            </Link>                            
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/about">
                              ABOUT US
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link  className="nav-link" to="/succesStory">
                              HISTORIAS DE EXITO
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/gallery"
                              className="nav-link "
                            >
                              GALERIA
                            </Link>                            
                          </li>
                          <li className="nav-item">
                            <a href="#"
                              className="nav-link dropdown-toggle"
                              data-toggle="dropdown" >
                              ESPECIALISTAS
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to='/specialists'>
                                  All Specialists
                                </Link>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="doctor-page.html"
                                >
                                  Doctor Page
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="schedule.html"
                                >
                                  Schedule Table
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/blog"
                              className="nav-link">
                              Blog
                            </Link>                            
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/contacts">
                              CONTACTOS
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="header-search">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
     )
    }
}


export default Header ;
