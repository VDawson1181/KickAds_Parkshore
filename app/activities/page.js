'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import MainCopyBlock from '../components/MainCopyBlock/mainCopyBlock';
import MainCopyHeader from '../components/MainCopyHeader/mainCopyHeader';
import ContentImgLeft from '../components/ContentImgLeft/contentImgLeft';
import ContentImgRight from '../components/ContentImgRight/contentImgRight';
import ButtonElement from '../components/Button/button';
import './activities.css';

const page = () => {

    // useEffect(() => {
    //   const headerContainer = document.querySelector('.mainCopyHeader .headerCopy');
    //   const headerTitle = document.querySelector('.mainCopyHeader .headerCopy h2');
    //   let headerClone = headerTitle.cloneNode(true);
    //   headerContainer.appendChild(headerClone);      
    // }, []); // Empty dependency array ensures this runs once after initial render
    const mainHeaderCopy = [
        { 
            imgSrc: "/images/carousel_imgs/Carousel_Img_4.jpg",
            header: "Activities"
        },
    ];
    const leftImgContentTop = [
            { 
            imgName: "Girl on rocks",
            imgSrc: "/images/hp_img_1.png",
            content: `
            <h1>Aquatics</h1>
            <p>The Park Shore Aquatics Program is designed with
            one goal in mind; to create confident, safe, capable,
            and happy swimmers. We feature three heated
            swimming pools complete with pool slides and
            conveniently located locker facilities. Our pools are
            specially designed to accommodate the different
            ages and abilities of our campers.</p>

            <p>The Park Shore Aquatics Program offers our campers
            the opportunity to progress through the American
            Red Cross list of swimming skills. They are taught by
            highly qualified and trained American Red Cross Swim
            Instructors who are assisted by our group leaders
            and counselors.</p>

            <p>Our campers swim twice each day, which increases
            their opportunity to learn new skills and become
            stronger swimmers.</p>
`
            },
        ];
    const rightImgContentMid = [
            { 
            imgName: "Kids on floor",
            imgSrc: "/images/hp_img_2.png",
            content: `
            <h1>Athletics</h1>
            <p>The Park Shore Athletics Program is an essential part
            of every camper's day, offering a dynamic mix of sports
            and activities for all ages. Campers develop their skills
            through a planned schedule led by our professional
            athletic specialists, with a balance of individual
            instruction, sports clinics, and team play. Our state-
            of-the-art facilities include baseball fields, basketball
            courts, volleyball courts, Gaga ball pits, European
            Handball, flag football, lacrosse, hockey, track and
            field, along with a dedicated Preschool Athletics Area
            designed just for our youngest athletes. We create an
            exciting, supportive environment where every camper
            is encouraged to grow, have fun, and reach their full
            athletic potential.</p>
            `
            },
        ];
        const leftImgContentMid = [
                { 
                imgName: "Kids on floor",
                imgSrc: "/images/carousel_imgs/Carousel_Img_1.jpg",
                content: `
                <h1>Extreme Adventure</h1>
                <p>Ready for action-packed adventure EVERY DAY?
                The Extreme Adventure Programs are among the
                most popular activities Park Shore Country Day Camp
                has to offer. Extreme Adventure activities are led by
                our highly qualified and trained Extreme Specialists.
                We provide individual instruction based on the age
                and ability of our campers. Our focus is on creating
                an exciting adventure filled environment where all
                of our campers climb and bounce up into the sky,
                go off-roading, or even walk up in the clouds.
                </p>

                <ul>
                    <li>• Two Story Sky Trail High Ropes Course</li>
                    <li>• Bungee Trampoline</li>
                    <li>• Rock Wall</li>
                    <li>• Electric Go Karts</li>
                    <li>• Archery</li>
                    <li>• Pedal Cars</li>
                    <li>• Sky Tykes</li>
                </ul>
                `
                },
            ];
        const rightImgContentBot = [
                { 
                imgName: "Kids on floor",
                imgSrc: "/images/carousel_imgs/Carousel_Img_1.jpg",
                content: `
                <h1>Specialty Areas</h1>
                <p>Each day, our campers dive into a dynamic mix of
                creative and exciting activities, all led by highly
                qualified specialists. Designed to spark adventure,
                creativity, and artistic expression, our newly updated
                and expanded programs offer the perfect blend of
                cutting-edge experiences and beloved camp traditions.
                Campers can explore arts and crafts, baking and
                cooking, tie-dye, woodworking, maker space/LEGO,
                science, and preschool enrichment—ensuring endless
                opportunities for fun, discovery, and growth at Park
                Shore, a leader in the day camp industry.</p>`
                },
            ];
        const leftImgContentBot = [
                { 
                imgName: "Kids on floor",
                imgSrc: "/images/carousel_imgs/Carousel_Img_1.jpg",
                content: `
                <h1>Specialty Events</h1>
                <p>Park Shore always has a long list of exciting and
                thrilling Special Events for each camp season. Our
                aim is to offer our boys and girls the most Spectacular
                time they can possibly have. We accomplish this by
                combining our regular activity schedule with our
                rip-roaring and full of fun SPECIAL EVENTS each week.
                Different themes are created each week. All campers
                participate in the fun that is generated with our
                exciting events that take place. Our campers and
                staff maintain very high levels of enthusiasm and
                always look forward to another rewarding and
                fun-filled day at Park Shore.</p>`
                },
            ];
    
  return (
    <div className="programPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <ContentImgLeft leftImgContent={leftImgContentTop}></ContentImgLeft>
        <ContentImgRight rightImgContent={rightImgContentMid}></ContentImgRight>
        <ContentImgLeft leftImgContent={leftImgContentMid}></ContentImgLeft>
        <ContentImgRight rightImgContent={rightImgContentBot}></ContentImgRight>
        <ContentImgLeft leftImgContent={leftImgContentBot}></ContentImgLeft>
    </div>
  )
}

export default page