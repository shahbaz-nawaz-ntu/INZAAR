// pages/donate.js
import Image from 'next/image';
import donationImage from '../../public/images/gallery/gallery-01.jpg'; // replace with your local image or URL

export default function DonatePage() {
  return (
    <div className="container my-5 py-4 bg-light rounded shadow-sm ">
      <div className="row align-items-center ">
        <div className="col-md-7 mb-4 mb-md-0 ">
          
          <span className="badge  gradient-background mb-2 ">Donate Us</span>
    
          <h2 className="fw-bold">
            Join Us in Spreading the <span className="gradient-Registration">Light of Deen</span>
          </h2>
          <p>
            Please join hands with Inzaar in spreading the message of Almighty Allah –
            faith &amp; morality (ایمان و اخلاق), personality development (تعمیر شخصیت),
            and the success in life hereafter (فلاح آخرت).
          </p>
          <a href="#" className="btn text-white gradient-background ">
            Donate Now →
          </a>
        </div>
        <div className="col-md-5 text-center">
          <Image
            src={donationImage}
            alt="Donations"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}
