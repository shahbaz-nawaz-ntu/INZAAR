import Image from "next/image";
import Link from "next/link";

const CourseBreadcrumb = ({ getMatchCourse }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="content text-start">
          <ul className="page-list">
            <li className="rbt-breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li>
              <div className="icon-right">
                <i className="feather-chevron-right"></i>
              </div>
            </li>
            <li className="rbt-breadcrumb-item active">
              {getMatchCourse.category}
            </li>
          </ul>
          <h2 className="title mb--15">{getMatchCourse.courseTitle}</h2>

          <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
            <div className="feature-sin rating">
              <Link href="#">{getMatchCourse.star}</Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
            </div>

            <div className="feature-sin total-rating">
              <Link className="rbt-badge-4" href="#">
                {getMatchCourse.ratingNumber} rating
              </Link>
            </div>

            <div className="feature-sin total-student">
              <span> {getMatchCourse.studentNumber} students</span>
            </div>
          </div>

          <div className="rbt-author-meta mb--20">
            <div className="rbt-avater">
              {getMatchCourse.userImg && (
                <Image
                  width={40}
                  height={40}
                  src={getMatchCourse.userImg}
                  alt={getMatchCourse.userName}
                  unoptimized={true}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              )}
            </div>
            <div className="rbt-author-info">
              By
              <span className="px-1 fw-bold text-white">
                {getMatchCourse.userName}
              </span>
              In <span className="text-white-50">{getMatchCourse.userCategory}</span>
            </div>
          </div>

          <ul className="rbt-meta">
            <li>
              <i className="feather-calendar"></i>Last updated
              {getMatchCourse.date}
            </li>
            <li>
              <i className="feather-globe"></i>
              {getMatchCourse.language}
            </li>
            <li>
              <i className="feather-award"></i> {getMatchCourse.courseAward}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseBreadcrumb;
