'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import MainCopyBlock from '../components/MainCopyBlock/mainCopyBlock';
import MainCopyHeader from '../components/MainCopyHeader/mainCopyHeader';
import ButtonElement from '../components/Button/button';
import './about.css';

const page = () => {
    const mainHeaderCopy = [
        { 
            imgSrc: "./images/header_imgs/hdr_temp.jpg",
            header: "About Park Shore"
        },
    ];
    const mainCopyContent = [
        { 
        content: "<h1>More than a<br /> Summer Camp</h1> <p>At Park Shore, the campers and staff members immediately feel that they are part of a family. Our mission is to create a community in which each camper will succeed, have a great time, make life-long friends, and leave Park Shore each day excited about the next. We accomplish this by always striving for more! Enthusiasm is contagious. It starts with our dedicated and passionate team of Directors who instill their knowledge, experience, and enthusiasm in our wonderful and well-trained staff. This enthusiasm is quickly picked up by our campers, which creates one fun-filled day after another.</p> <p>Park Shore Country Day Camp is fully accredited by the American Camp Association. As a founding member of the Long Island Association of Private Schools and Day Camps, our commitment to excellence is always a top priority! We are licensed and accredited by the New York State Office of Children and Family Services and are subject to annual review by them as well as The Suffolk County Health Department, and Dix Hills Fire Department. The Park Shore Country Day School maintains compliance with all of the standards set forth by these departments and strictly adheres to its own high standards.</p>"
        },
    ];
  return (
    <div className="aboutPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <MainCopyBlock mainCopyContent={mainCopyContent}></MainCopyBlock>
        <div className="buttonLink">
            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">Enroll Now</a>
        </div>        
        <Image
        src="./images/about_images/accred_img.png"
        alt="Facebook"
        width={300}
        height={351}
        sizes="100vw"
        style={{width: '90%', height: 'auto', margin: '-60px auto 0', objectFit: 'cover'}}
        />
        <div className='contentFooter'>
            <Image
            src="./images/footer_imgs/ftr_Img_1.png"
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