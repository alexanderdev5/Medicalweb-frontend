import React, { Component } from "react";
import Quicklinks from "../components/Quicklinks";

class Gallery extends Component {
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
                    <span>Smiles Gallery</span>
                  </div>
                </div>
              </div>
            </div>
            {/*//section*/}
            {/*section*/}
            <div className="section page-content-first">
              <div className="container">
                <div className="text-center mb-2  mb-md-3 mb-lg-4">
                  <div className="h-sub theme-color">Our Clients Stories</div>
                  <h1>Smiles Gallery</h1>
                  <div className="h-decor" />
                </div>
              </div>
              <div className="container">
                <div className="text-center mb-3 mb-md-4 max-900">
                  <p>
                    We love to see our patients smile! Here are some of our best
                    before-and-after pictures,
                    <br />
                    all in one fantastic Smile Gallery
                  </p>
                </div>
                <div className="filters-by-category mb-2 mb-lg-4">
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
                        Crowns
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category2">
                        Bridges
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category3">
                        Dental Implants
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category4">
                        Cosmetic Filling
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category5">
                        Lumineers
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category6">
                        Dentures
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category7">
                        Porcelain Veneers
                      </a>
                    </li>
                    <li>
                      <a href="#filter" data-option-value=".category8">
                        Diamond Polish
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-wrap">
                  <div className="loading-content">
                    <div className="inner-circles-loader" />
                  </div>
                  <div className="gallery-smiles gallery-isotope" id="gallery">
                    <div className="gallery-item category2 category7">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-1-1.jpg" alt />
                        <img src="images/content/gallery/smile-1-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category1 category5 category8">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-2-1.jpg" alt />
                        <img src="images/content/gallery/smile-2-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category2 category4 category3">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-3-1.jpg" alt />
                        <img src="images/content/gallery/smile-3-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category4 category8 category6">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-4-1.jpg" alt />
                        <img src="images/content/gallery/smile-4-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category3 category7">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-5-1.jpg" alt />
                        <img src="images/content/gallery/smile-5-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category4 category7 category3">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-6-1.jpg" alt />
                        <img src="images/content/gallery/smile-6-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category1 category8">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-7-1.jpg" alt />
                        <img src="images/content/gallery/smile-7-2.jpg" alt />
                      </div>
                    </div>
                    <div className="gallery-item category2 category6">
                      <div className="twentytwenty-container">
                        <img src="images/content/gallery/smile-8-1.jpg" alt />
                        <img src="images/content/gallery/smile-8-2.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            {/*//section*/}
            {/*section call us*/}
            <div className="section mt-5">
              <div className="container">
                <div className="banner-call">
                  <div className="row no-gutters">
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text-center w-100">
                        <h2>
                          Want the Same{" "}
                          <span className="theme-color">Wonderful Smile?</span>
                        </h2>
                        <div className="h-decor" />
                        <p className="mt-sm-1 mt-lg-4 text-left text-sm-center">
                          We provide advanced, trusted dental care delivered by
                          a dedicated team in our modern practice.
                        </p>
                        <div className="mt-2 mt-lg-4 text-center">
                          <a href="#" className="banner-call-phone">
                            <i className="icon-telephone" />
                            1-800-267-0000
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-5 mt-3 mt-md-0 text-center text-lg-left">
                      <img
                        src="images/content/banner-callus-2.jpg"
                        alt
                        className="shift-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*section call us*/}
          </div>
      </div>
    );
  }
}

export default Gallery;
