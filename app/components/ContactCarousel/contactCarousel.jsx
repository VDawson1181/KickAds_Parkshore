'use client';
import React, {useEffect} from "react";
import Image from "next/image";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import './contactCarousel.css'

gsap.registerPlugin(ScrollTrigger);

export default function contactCarousel({pictures}) {



  useEffect(() => {
    // const galleryImages = document.querySelectorAll('#heroSection div.image-item');
    const galleryImages = gsap.utils.toArray('.imageContainer div.image-item');
    const animatedElements = galleryImages.slice(0, galleryImages.length - 1);
    const delayTiming = 2;

    
    if(galleryImages){
        galleryImages.forEach((item, index) => {
            // Append the anchor to the image
            item.style.zIndex = (galleryImages.length - index);
        
        });

        // gsap.to(galleryImages, {autoAlpha: 1, opacity:1},0.5) // Here for testing.... take out later!
        
        const tl = gsap.timeline({defaults: {duration: 1, ease: "power1.inOut"}, paused: true, repeat: -1, repeatDelay: delayTiming, yoyo: false})            
            .from(animatedElements, {duration:0.25, autoAlpha: 0, opacity:0}) // Ensure all images are visible at start;
            .to(animatedElements, {
                opacity: 0,     
                display: 'none',                   
                stagger: {
                    from: 0,                
                    each: delayTiming,
                }          
            }, delayTiming);

        tl.play();
    }
  }, []); // Empty dependency array ensures this runs once after initial render


  return (
    <>
        <div className="contactShadow"></div>
        {pictures.map((picture, index) => (
          <div key={index} className="image-item">
              <Image
                  src={picture.url}
                  alt={picture.name}
                  width={700}
                  height={500}
                  sizes="100vw"
                  style={{width: '700px', height: '100%', objectFit: 'contain'}}
                  // style={{height: '800px', margin: '0 auto', objectFit: 'cover'}}
                  // style={{width:'90%', height:'auto', objectFit: 'cover'}}
                  priority={index === 0} // Only the first image is prioritized
                />
          </div>
        ))}
    </>
  );
}
