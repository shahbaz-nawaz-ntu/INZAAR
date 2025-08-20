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
              <span className="select-label d-block">Sort By Catagory</span>
              <select>
                  <option>All</option>
                <option>LMS</option>
                <option>Introspection</option>
                <option>Ramdan Courses</option>
               
              </select>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By Popularity</span>
              <select data-live-search="true" title="Select Author">
                 <option data-subtext="Experts">default</option>
                <option data-subtext="Experts">Frequently  Courses</option>
             <option data-subtext="Experts">Completed Courses</option>
              </select>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By NEW</span>
              <select>
                <option>default </option>
                <option>Fresh Courses Offered </option>
             
              </select>
            </div>
          </div>

          <div className="filter-select-option">
            <div className="filter-select rbt-modern-select">
              <span className="select-label d-block">Sort By length</span>
              <select data-live-search="true">
                <option>default</option>
                <option>Short Courses</option>
               <option>Long Courses</option>
              </select>
            </div>
          </div>

          <div className="filter-select-option pt-5">
            <div className=" d-flex align-items-center pt-3">
              <a className="rbt-btn btn-gradient btn-sm" href="#">
                Apply Filter 
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
