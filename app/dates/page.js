'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import MainCopyBlock from '../components/MainCopyBlock/mainCopyBlock';
import MainCopyHeader from '../components/MainCopyHeader/mainCopyHeader';
import ButtonElement from '../components/Button/button';
import './dates.css';

const page = () => {

    const mainHeaderCopy = [
        { 
            imgSrc: "/images/carousel_imgs/Carousel_Img_2.jpg",
            header: "Dates & Rates"
        },
    ];
    const mainCopyContent = [
        { 
        content: `<h1>2025 Dates</h1> 
                <h4>June 30'th - August 22nd</h4> 
                <h4>Flex Scheduling</h4> 
                <p>Choose 4, 6, or 8 Weeks</p>
                <h4>Flexible and Easy Enrollment</h4> 
                <h4>Easy Online Enrollment</h4> 
                <p>All Major Credit Cards Accepted</p>
                `
        },
    ];
  return (
    <div className="aboutPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <MainCopyBlock mainCopyContent={mainCopyContent}></MainCopyBlock>
        <div className="buttonLink">
            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">Enroll Now</a>
        </div>        
        <div className="commitmentStatement">
            <h2>Our Commitment to You</h2>
            <p>The Park Shore family remains committed to maintaining excellence in service, programs, and
                activities to provide the best camp experience for your child(ren). If we can be of any assistance please never hesitate to call us.</p>
        </div>
    </div>
  )
}

export default page