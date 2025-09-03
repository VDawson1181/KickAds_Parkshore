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
            imgSrc: "./images/header_imgs/hdr_datesandrates.png",
            header: "Dates & Rates"
        },
    ];
    const mainCopyContent = [
        { 
        content: `<h1>2025 Dates</h1> 
                <p class='subTitle'>June 30'th - August 22nd <br/> Flex Scheduling</p> 
                <p class='dateInfo'>Choose 4, 6, or 8 Weeks</p>
                <p class='dateInfo'>Choose 3-5 Days</p>
                <p class='subTitle'>Flexible and Easy Enrollment</p> 
                <p class='dateInfo'>Easy Online Enrollment</p>
                <p class='dateInfo'>All Major Credit Cards Accepted</p>`
        },
    ];
  return (
    <div className="datesPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <MainCopyBlock mainCopyContent={mainCopyContent}></MainCopyBlock>
        <div className="buttonLink">
            <a href="/contact" target="_blank" rel="noopener noreferrer">Enroll Now</a>
        </div>        
        <div className="commitmentStatement">
            <h2>Our Commitment to You</h2>
            <p>The Park Shore family remains committed to maintaining excellence in service, programs, and
                activities to provide the best camp experience for your child(ren). If we can be of any assistance please never hesitate to call us.</p>
        </div>
        <div className='contentFooter'>
            <Image
            src="./images/footer_imgs/ftr_Img_2.png"
            alt="Facebook"
            width={300}
            height={351}
            sizes="100vw"
            style={{width: '100%', height: 'auto', margin: '0 auto', objectFit: 'cover'}}
            />
        </div>
    </div>
  )
}

export default page