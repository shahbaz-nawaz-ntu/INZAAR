import React from 'react';
import Image from 'next/image';
import { ArrowRight, Link } from 'lucide-react';

export default function VolunteerPage() {
  return (
    <div className="min-vh-10 bg-light py-5">
      <div className="container">
        <div className="row g-4 py-5">
          {/* Header Card */}
          <div className="col-md-4 d-flex p-4">
            <div className="bg-light p-4 rounded ">
              <h3>Be a Part of Our Mission</h3>
              <p className="fs-5 fw-semibold text-dark mb-3">
                Volunteer with us in Dawah activities:
              </p>
              <a href={"/Volunteer"} className="btn d-flex align-items-center gap-2 gradient-background text-white width-set">
                Join Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Feedback Card */}
          <div className="col-md-4 d-flex ">
            <div className="bg-warning bg-opacity-25 p-5 rounded shadow-sm w-100 h-100">
              <div className="d-flex align-items-center justify-content-center rounded mb-3" style={{ width: '48px', height: '48px' }}>
                <Image src="/images/icons/icon3.png" width={40} height={40} alt="Feedback" />
              </div>
              <h6 className="fw-bold">Tell Us What You Think </h6>
              <p className="text-muted small mb-0">
                Providing regular feedback about your experience of the website and our social media pages.
              </p>
            </div>
          </div>

          {/* Spread the Word */}
          <div className="col-md-4 d-flex">
            <div className="c-pink bg-opacity-25 p-5 rounded shadow-sm w-100 h-100">
              <div className="d-flex align-items-center justify-content-center rounded mb-3" style={{ width: '48px', height: '48px' }}>
                <Image src="/images/icons/icon1.png" width={40} height={40} alt="Spread the Word" />
              </div>
              <h6 className='fw-bold'>Help Us Spread the Word</h6>
              <p className="text-muted small mb-0">
                Share our message online and give our magazines and books to your friends and family.
              </p>
            </div>
          </div>

          {/* Graphic & Video Editors */}
          
          <div className="col-md-4 d-flex">
            <div className="d-pink bg-opacity-25 p-5 rounded shadow-sm w-100 h-100">
              <div className="d-flex align-items-center justify-content-center rounded mb-3 " style={{ width: '48px', height: '48px' }}>
                <Image src="/images/icons/icon2.png" width={40} height={40} alt="Graphic Editing" />
              </div>
              <h6 className='fw-bold'>Graphic & Video Editors Welcome</h6>
              <p className="text-muted small mb-0">
                If you're good at graphics or video editing, you can help us make content.
              </p>
            </div>
          </div>

          {/* Translate & Transcribe */}
          <div className="col-md-4 d-flex">
            <div className="bg-opacity-25 p-5 rounded shadow-sm w-100 h-100 b-green">
              <div className="d-flex align-items-center justify-content-center rounded mb-3" style={{ width: '48px', height: '48px' }}>
                <Image src="/images/icons/icon4.png" width={40} height={40} alt="Translate & Transcribe" />
              </div>
              <h6 className="fw-bold">Translate & Transcribe With Us</h6>
              <p className="text-muted small mb-0">
                Translations, Transcriptions and Subtitling of Text, Audio and Video files.
              </p>
            </div>
          </div>

          {/* Join Digital Team */}
          <div className="col-md-4 d-flex">
            <div className="e-purple bg-opacity-25 p-5 rounded shadow-sm w-100 h-100">
              <div className="d-flex align-items-center justify-content-center rounded mb-3" style={{ width: '48px', height: '48px' }}>
                <Image src="/images/icons/icon5.png" width={40} height={40} alt="Join Digital Team" />
              </div>
              <h6 className="fw-bold">Join Our Digital Team</h6>
              <p className="text-muted small mb-0">
                If you have IT or internet skills, you can be a part of our web and social media team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}