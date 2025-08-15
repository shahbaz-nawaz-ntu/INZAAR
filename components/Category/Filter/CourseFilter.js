"use client";

import React, { useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const CourseFilter = ({ filterToggle }) => {
  const [value, setValue] = useState([0, 400]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={`default-exp-wrapper ${filterToggle ? "d-none" : ""}`}>
        <div className="filter-inner">
          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By</span>
              <select>
                <option>Default</option>
                <option>Latest</option>
                <option>Popularity</option>
                <option>Trending</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By INSTRUCTOR</span>
              <select data-live-search="true" title="Select Author">
                <option data-subtext="Experts">Janin Afsana</option>
                <option data-subtext="Experts">Joe Biden</option>
                <option data-subtext="Experts">Fatima Asrafy</option>
                <option data-subtext="Experts">Aysha Baby</option>
                <option data-subtext="Experts">Mohamad Ali</option>
                <option data-subtext="Experts">Jone Li</option>
                <option data-subtext="Experts">Alberd Roce</option>
                <option data-subtext="Experts">Zeliski Noor</option>
              </select>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By Offer</span>
              <select>
                <option>Free</option>
                <option>Paid</option>
                <option>Premium</option>
              </select>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By Category</span>
              <select data-live-search="true">
                <option>Web Design</option>
                <option>Graphic</option>
                <option>App Development</option>
                <option>Figma Design</option>
              </select>
            </div>
          </div>

          <div className="filter-select-option pt-5">
            <div className=" d-flex align-items-center pt-3">
              <a className="rbt-btn btn-gradient btn-sm " href="#">
                Filter
              </a>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select">
              {/* <span className="select-label d-block">Price Range</span> */}

              <div className="price_filter s-filter clear">
                <form action="#" method="GET" className="d-flex align-items-center justify-content-center w-50 h-50">
                  {/* <div id="slider-range">
                    <Slider
                      min={0}
                      max={500}
                      range
                      value={value}
                      onChange={handleSliderChange}
                      trackStyle={{ backgroundColor: "#2f57ef" }}
                      handleStyle={{
                        borderColor: "#2f57ef",
                        backgroundColor: "#2f57ef",
                        opacity: "1",
                        boxShadow: "none",
                        outline: "0",
                      }}
                    />
                  </div> */}
                  <div className="slider__range--output">
                    <div className="price__output--wrap">
                      {/* <div className="price--output">
                        <span>Price :</span>
                        <input
                          type="text"
                          id="amount"
                          value={`$${value[0]} - $${value[1]}`}
                          readOnly
                        />
                      </div> */}
                      {/* <div className="price--filter"> */}
                        {/* <a className="rbt-btn btn-gradient btn-sm" href="#">
                          Filter
                        </a> */}
                      {/* </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseFilter;
