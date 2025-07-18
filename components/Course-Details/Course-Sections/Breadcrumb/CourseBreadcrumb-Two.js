import Image from "next/image";
import Link from "next/link";

const CourseBreadcrumbTwo = ({ getMatchCourse }) => {
  return (
    <>
      <div className="col-lg-8 offset-lg-2">
        <div className="content text-center">
          <h2 className="title theme-gradient">{getMatchCourse.courseTitle}</h2>
          <ul className="rbt-meta">
            <li>
              <i className="fa fa-user">  By Abu Yahya</i>
            </li>
            <li>
              <i className="feather-calendar"></i>
              {getMatchCourse.date}
            </li>
            
              <span>
                <li>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </li>
                12(Review)
              </span>
          
          </ul>
        </div>


      </div>
    </>
  );
};

export default CourseBreadcrumbTwo;