'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import MainCopyBlock from '../components/MainCopyBlock/mainCopyBlock';
import MainCopyHeader from '../components/MainCopyHeader/mainCopyHeader';
import ContactCarousel from '../components/ContactCarousel/contactCarousel';
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
                <li>
                    <span class="contactImgs">
                        <Image
                        src="./images/phone_icon.jpg"
                        alt="Phone"
                        width={134}
                        height={134}
                        style={{min-width: '134px', height: '134px'}}
                        />
                    </span>
                    <a href="tel:+6314998580">(631) 499-8580</a>
                </li>
                <li>
                    <span class="contactImgs">
                        <Image
                        src="./images/location_icon.jpg"
                        alt="location"
                        width={134}
                        height={134}
                        style={{min-width: '134px', height: '134px'}}
                        />
                    </span>
                    450 Deer Park Rd, Dix Hills, NY 11746
                </li>
                <li>
                    <span class="contactImgs">
                        <Image
                        src="./images/email_icon.jpg"
                        alt="email"
                        width={134}
                        height={134}
                        style={{min-width: '134px', height: '134px'}}
                        />
                    </span>
                    <a href="mailto:info@parkshoredaycamp.com">Info@ParkShoreDayCamp.com</a>
                </li>
            </ul>
            
        `
        },
    ];

      const pictures = [
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_1.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_2.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_3.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_4.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_5.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_6.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_7.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_8.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_9.png",        
          },                
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_10.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_11.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_12.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_13.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_14.png",        
          },          
          {
          name: "Parkshore Kids",
          url: "./images/contact_imgs/contact_Img_15.png",        
          },          
          {  
          name: "Learning is just the beginning",
          url: "./images/contact_imgs/contact_Img_16.png"
          }
      ];
  return (
    <div className="contactPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <MainCopyBlock mainCopyContent={mainCopyContent}></MainCopyBlock>  
        <div class="formContainer">
                <div class="imageContainer">            
                    {/* <Image
                    src="./images/contact_Gal_temp.png"
                    alt="map"
                    width={300}
                    height={351}
                    sizes="100vw"
                    style={{minWidth: '450px', height: 'auto', margin: '0 auto'}}
                    /> */}
                     
                    <ContactCarousel pictures={pictures}/>
                </div>
                <div className="contactContainer">
                    <form action="/process-form" method="post">
                        <div>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="user_name" required/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="user_email" required/>
                        </div>
                        <div>
                            <label for="phone">Phone:</label>
                            <input type="tel" id="phone" name="user_phone"/>
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