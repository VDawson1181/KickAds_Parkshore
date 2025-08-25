import React from "react";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel/imageCarousel";
import FeatureGallery from "./components/FeatureGallery/featureGallery";
import DigitalClockApp from "./components/DigitalClock/DigitalClockApp";
import MainCopyBlock from "./components/MainCopyBlock/mainCopyBlock";
import ContentImgLeft from "./components/ContentImgLeft/contentImgLeft";
import ContentImgRight from "./components/ContentImgRight/contentImgRight";

export default function Home() {

  const targetDateTime = "September 5 2025 00:00:00";
  const pictures = [
          {
          name: "Girl Playing",
          url: "./images/carousel_imgs/Carousel_Img_1.jpg",
          pageUrl: "https://fourseasonsroofingny.com/residential-roofing/"          
          },
          {
          name: "Boys On Bars",
          url: "./images/carousel_imgs/Carousel_Img_2.jpg",
          pageUrl: "https://fourseasonsroofingny.com/residential-home-services/"
          },
          {
          name: "Boy and Project",
          url: "./images/carousel_imgs/Carousel_Img_3.jpg",
          pageUrl: "https://fourseasonsroofingny.com/residential-outdoor-living/"
          },
          {
          name: "Teens Smiling",
          url: "./images/carousel_imgs/Carousel_Img_4.jpg",
          pageUrl: "https://fourseasonsroofingny.com/masonry-decking/"
          },
          {
          name: "Boys on Slide",
          url: "./images/carousel_imgs/Carousel_Img_5.jpg",
          pageUrl: "https://fourseasonsroofingny.com/residential-roofing/#metal-copper"
          },
          {  
          name: "Boy on Swing",
          url: "./images/carousel_imgs/Carousel_Img_6.jpg",
          pageUrl: "https://fourseasonsroofingny.com/residential-roofing/"
          }
      ];
  const featureGalImgs = [
    {
    name: "Activities",
    src: "./images/feature_imgs/feat_img_1.png",
    pageUrl: "https://fourseasonsroofingny.com/residential-roofing/"          
    },
    {
    name: "Programs",
    src: "./images/feature_imgs/feat_img_2.png",
    pageUrl: "https://fourseasonsroofingny.com/residential-home-services/"
    },
    {
    name: "Rates",
    src: "./images/feature_imgs/feat_img_3.png",
    pageUrl: "https://fourseasonsroofingny.com/residential-outdoor-living/"
    }
  ];
  const mainCopyContent = [
    { 
      content: '<h1>Let\'s Play, Learn <br /> & Grow Together</h1> <p>Located on a beautiful 15-acre campus in Dix Hills, Park Shore offers an unparalleled experience for children through our Camp and Preschool. From exciting summer adventures to a nurturing preschool environment, Park Shore provides the perfect balance of fun, education, and growth for children of all ages. Discover a place where earning and play come together to create unforgettable memories!</p>'
    },
  ];
  const leftImgContent = [
    { 
      imgName: "Girl on rocks",
      imgSrc: "./images/hp_img_1.png",
      content: '<h1>Park Shore Country Day Camp</h1><p>Park Shore Country Day Camp offers an unforgettable summer experience for children ages 2-15 on our beautiful 15-acre campus. Enjoy all the classic day camp activities with flexible scheduling options— choose 4, 6, or 8 weeks to fit your summer plans.</p><button>Learn More</button>'
    },
  ];
  const rightImgContent = [
    { 
      imgName: "Kids on floor",
      imgSrc: "./images/hp_img_2.png",
      content: '<h1>Park Shore Country School</h1><p>Park Shore Preschool offers an exceptional program for children ages Toddler through Pre-K, combining academics, social development, and creative exploration. Our nurturing environment prepares children for future success with engaging activities, including early literacy, hands-on science, art, music, and imaginative play.</p><button>Learn More</button>'
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
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
