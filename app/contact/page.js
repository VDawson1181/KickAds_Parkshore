'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import MainCopyBlock from '../components/MainCopyBlock/mainCopyBlock';
import MainCopyHeader from '../components/MainCopyHeader/mainCopyHeader';
import ButtonElement from '../components/Button/button';
import './contact.css';

const page = () => {
    const mainHeaderCopy = [
        { 
            imgSrc: "./images/header_imgs/hdr_contact.png",
            header: "Contact Us"
        },
    ];
    const mainCopyContent = [
        { 
        content: `
            <h1>Got Questions?<br />Let's talk!</h1> 
            <ul>
                <li><a href="tel:+6314998580">(631) 499-8580</a></li>
                <li>450 Deer Park Rd, Dix Hills, NY 11746</li>
                <li><a href="mailto:info@parkshoredaycamp.com">Info@ParkShoreDayCamp.com</a></li>
            </ul>
            <div class="formContainer">
                <div class="imageContainer">            
                    <Image
                    src="./images/contact_Gal_temp.png"
                    alt="map"
                    width={300}
                    height={351}
                    sizes="100vw"
                    style={{min-width: '450px', height: 'auto', margin: '0 auto'}}
                    />
                </div>
                <div class="contactContainer">
                    <form action="/process-form" method="post">
                        <div>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="user_name" required>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="user_email" required>
                        </div>
                        <div>
                            <label for="phone">Phone:</label>
                            <input type="tel" id="phone" name="user_phone">
                        </div>
                        <div>
                            <label for="message">Message:</label>
                            <textarea id="message" name="user_message" rows="5" required></textarea>
                        </div>
                        <div>
                            <button class="buttonLink" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        `
        },
    ];
  return (
    <div className="contactPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <MainCopyBlock mainCopyContent={mainCopyContent}></MainCopyBlock>     
        <a href="https://maps.app.goo.gl/ZpYcXg52bSCFJhLW9" target="_blank" rel="noopener noreferrer">        
            <div className='contentFooter'>
                <Image
                src="./images/footer_imgs/ftr_Img_contact.png"
                alt="map"
                width={300}
                height={351}
                sizes="100vw"
                style={{width: '100%', height: 'auto', margin: '0 auto', objectFit: 'cover'}}
                />
            </div>
        </a> 
    </div>
  )
}

export default page