import React from "react";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel/imageCarousel";
import FeatureGallery from "./components/FeatureGallery/featureGallery";
import DigitalClockApp from "./components/DigitalClock/DigitalClockApp";
import MainCopyBlock from "./components/MainCopyBlock/mainCopyBlock";
import ContentImgLeft from "./components/ContentImgLeft/contentImgLeft";
import ContentImgRight from "./components/ContentImgRight/contentImgRight";

export default function Home() {

  const targetDateTime = "September 15 2025 00:00:00";
  const pictures = [
          {
          name: "Adventure Starts Here",
          url: "./images/carousel_imgs/Carousel_Img_1.png",
          pageUrl: "/KickAds_Parkshore/about"          
          },
          {
          name: "Play Hard, Shine Bright",
          url: "./images/carousel_imgs/Carousel_Img_2.png",
          pageUrl: "/KickAds_Parkshore/programs"
          },
          {
          name: "Growing Minds",
          url: "./images/carousel_imgs/Carousel_Img_3.png",
          pageUrl: "/KickAds_Parkshore/activities"
          },
          {
          name: "Play, Learn, Belong",
          url: "./images/carousel_imgs/Carousel_Img_4.png",
          pageUrl: "/KickAds_Parkshore/dates"
          },
          {
          name: "Building Confidence Through Play",
          url: "./images/carousel_imgs/Carousel_Img_5.png",
          pageUrl: "/KickAds_Parkshore/activities"
          },
          {  
          name: "Learning is just the beginning",
          url: "./images/carousel_imgs/Carousel_Img_6.png",
          pageUrl: "/KickAds_Parkshore/contact"
          }
      ];
  const featureGalImgs = [
    {
    name: "Activities",
    src: "./images/feature_imgs/feat_Img_1.png",
    pageUrl: "/KickAds_Parkshore/activities"          
    },
    {
    name: "Programs",
    src: "./images/feature_imgs/feat_Img_2.png",
    pageUrl: "/KickAds_Parkshore/programs"
    },
    {
    name: "Rates",
    src: "./images/feature_imgs/feat_Img_3.png",
    pageUrl: "/KickAds_Parkshore/dates"
    }
  ];
  const mainCopyContent = [
    { 
      content: `<h1>Let\'s Play, Learn <br /> & Grow Together</h1> 
                <p>Located on a beautiful 15-acre campus in Dix Hills, Park Shore offers an unparalleled experience for children through our Camp and Preschool. From exciting summer adventures to a nurturing preschool environment, Park Shore provides the perfect balance of fun, education, and growth for children of all ages. Discover a place where earning and play come together to create unforgettable memories!</p>`
    },
  ];
  const leftImgContent = [
    { 
      imgName: "Girl on rocks",
      imgSrc: "./images/hp_img_1.png",
      content: `<h1>Park Shore Country Day Camp</h1>
                <p>Park Shore Country Day Camp offers an unforgettable summer experience for children ages 2-15 on our beautiful 15-acre campus. Enjoy all the classic day camp activities with flexible scheduling options— choose 4, 6, or 8 weeks to fit your summer plans.</p>
                <button>Learn More</button>`
    },
  ];
  const rightImgContent = [
    { 
      imgName: "Kids on floor",
      imgSrc: "./images/hp_img_2.png",
      content: `<h1>Park Shore Country School</h1>
                <p>Park Shore Preschool offers an exceptional program for children ages Toddler through Pre-K, combining academics, social development, and creative exploration. Our nurturing environment prepares children for future success with engaging activities, including early literacy, hands-on science, art, music, and imaginative play.</p>
                <button>Learn More</button>`
    },
  ];


  return (
    <div id='mainContainer'>
      <section id="heroSection" className="hero-section">
        <ImageCarousel pictures={pictures}/>        
      </section>
      {/* Digital clock -- Type 1 = Current Time, Type 2 = countdown to listed date / time */}
      <DigitalClockApp type={2} targetDateTime={targetDateTime}></DigitalClockApp>
      <FeatureGallery featureGalImgs={featureGalImgs}></FeatureGallery>
      <MainCopyBlock mainCopyContent={mainCopyContent}></MainCopyBlock>
      <ContentImgLeft leftImgContent={leftImgContent}></ContentImgLeft>
      <ContentImgRight rightImgContent={rightImgContent}></ContentImgRight>
    </div>
  );
}
