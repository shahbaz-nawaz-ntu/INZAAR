import Link from "next/link";
import Image from "next/image";
import ContactData from "../../data/pages/contact.json";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Contact = () => {
  return (
    <>
      <div className="row g-5">
        {ContactData &&
          ContactData.contactOne.map((data, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              key={index}
            >
              <div className="rbt-address">
                {data.iconImage && (
                  <div className="icon">
                    <Image
                      src={data.iconImage}
                      width={80}
                      height={80}
                      alt={data.title}
                    />
                  </div>
                )}

                <div className="inner">
                  <h4 className="title">{data.title}</h4>

                  {data.numOne && (
                    <p>
                      <Link href={`tel:${data.numOne}`}>{data.numOne}</Link>
                    </p>
                  )}

                  {data.numTwo && (
                    <p>
                      <Link href={`tel:${data.numTwo}`}>{data.numTwo}</Link>
                    </p>
                  )}

                  {data.mailOne && (
                    <p>
                      <Link href={`mailto:${data.mailOne}`}>{data.mailOne}</Link>
                    </p>
                  )}

                  {/* {data.mailTwo && (
                    <p>
                      <Link href={`mailto:${data.mailTwo}`}>{data.mailTwo}</Link>
                    </p>
                  )} */}

                  {data.address && (
                    <p className="d-flex align-items-center justify-content-start gap-5">
                      <a href="https://www.instagram.com/abuyahya267/" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram size={40} color="#ad65e7" />
                      </a>
                      <a href="https://www.facebook.com/abuyahya.inzaar" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={40} color="#ad65e7" />
                      </a>
                      <a href="https://www.instagram.com/abuyahya267/" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={40} color="#ad65e7" />
                      </a>
                    </p>
                  )} 
                </div>
              </div>
            </div>
          ))}
      </div >
    </>
  );
};

export default Contact;
