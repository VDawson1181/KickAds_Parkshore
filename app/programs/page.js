'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import MainCopyBlock from '../components/MainCopyBlock/mainCopyBlock';
import MainCopyHeader from '../components/MainCopyHeader/mainCopyHeader';
import ContentImgLeft from '../components/ContentImgLeft/contentImgLeft';
import ContentImgRight from '../components/ContentImgRight/contentImgRight';
import ButtonElement from '../components/Button/button';
import './about.css';

const page = () => {

    // useEffect(() => {
    //   const headerContainer = document.querySelector('.mainCopyHeader .headerCopy');
    //   const headerTitle = document.querySelector('.mainCopyHeader .headerCopy h2');
    //   let headerClone = headerTitle.cloneNode(true);
    //   headerContainer.appendChild(headerClone);      
    // }, []); // Empty dependency array ensures this runs once after initial render
    const mainHeaderCopy = [
        { 
            imgSrc: "/images/carousel_imgs/Carousel_Img_3.jpg",
            header: "Programs"
        },
    ];
    const leftImgContentTop = [
            { 
            imgName: "Girl on rocks",
            imgSrc: "/images/hp_img_1.png",
            content: `
            <h1>Toddler Programs<br>(2 year olds)</h1>
            <p>You've heard them say their first word. You've seen
                them take their first step. They are growing and
                changing by leaps and bounds. Now they are ready
                to go to camp. We welcome you to share your first
                camp experience with us at Park Shore. Your child
                will experience a wealth of fun, exploration, and
                excitement in a safe and secure environment.
                Supervised by Melissa Evernham, our Toddler
                Director, our Toddler Summer Camp Program
                is filled with many exciting experiences that
                your toddler will love.</p>
                <ul>
                    <li>• Designed for children ages 2-3</li>
                    <li>• Safe and secure environment</li>
                    <li>• Daily Activities: Swimming, Music & Movement,<br/>
                    Arts & Crafts, Sports, Baking & Cooking,<br/>
                    Dance, Drama<br/></li>
                    <li>• Small camp group for proper supervision</li>
                    <li>• Healthy snacks and lunch provided</li>
                    <li>• Daily ice cream at dismissal</li>
                    <li>• Choose two to five days</li>
                    <li>• Please inquire about transportation<li>
                </ul>`
            },
        ];
    const rightImgContentMid = [
            { 
            imgName: "Kids on floor",
            imgSrc: "/images/hp_img_2.png",
            content: `
            <h1>Preschoolers (Ages 3-4)<br>Day Campers</h1>
            <p>Our Preschool campers have the opportunity to
                experience all that Park Shore has to offer in a smaller,
                more controlled environment. There are specifically
                designed areas that only Preschool campers use,
                such as our Preschool Sports Facility. This area is
                equipped with a Junior Dream Field, mini soccer field,
                small basketball hoops with a mini backstop to
                encourage our campers and provide them with the
                success they need as young people. Preschool tennis
                and Preschool GaGa are more activities exclusively for
                our Preschool campers. Our Preschool Program also
                includes our Early Enrichment Experience. This program
                allows your child the time to practice skills such as
                name writing, counting, sorting, and cutting. Taught
                by one of our own highly qualified teachers, the
                reinforcement of these skills during the summer
                helps to prepare your child for the following school
                year. Our campers arrive at Park Shore approximately
                9 a.m. and leave camp around 4 p.m. They will be in a
                camp group based on their age, grade, and gender and
                will be led by an adult group leader who is assisted by
                college-age counselors. Their activity schedule is
                specially created for their age and will include aquatics,
                athletics, specialty activities, Bungee Trampoline,
                cultural arts activities, lunch, and a long list of very
                exciting special events each week. Our preschool
                (3 - 5-year-old) campers can enroll for either 3 or 5 days
                each week.</p>`
            },
        ];
        const leftImgContentBot = [
                { 
                imgName: "Kids on floor",
                imgSrc: "/images/carousel_imgs/Carousel_Img_1.jpg",
                content: `
                <h1>Juniors (K-1)- Day Campers</h1>
                <p>As Juniors, these campers have reached a new level
                at Park Shore. They have the opportunity to utilize
                all of the facilities and participate in all the Special
                Events and activities that Park Shore has to offer
                such as our 24 foot Rock Climbing Wall, Two-Story
                Sky Trail High Ropes Course, Archery, and Bungee
                Trampoline. Our Juniors will have the opportunity
                to experience a new level in athletics. They will
                enjoy our amazing Dream Field with batting cages
                and ball machines, new professional soccer field with
                a scoreboard, new GaGa complex as well as our
                basketball courts. Our Juniors will also thrive in
                developmentally appropriate instruction and
                challenges in our Aquatics Program. Our campers
                arrive at Park Shore approximately 9:00 am and
                leave around 4:00 pm. They will be in a camp
                group based on their age, grade, and gender
                and will be led by an adult group leader who
                is assisted by college-age counselors. Their
                activity schedule is specially created for their
                age and will include: aquatics, athletics, specialty
                activities, cultural arts activities, lunch, and a long 
                ist of very exciting special events each week.</p>`
                },
            ];
    
  return (
    <div className="programPageContainer">
        <MainCopyHeader mainHeaderCopy={mainHeaderCopy}></MainCopyHeader>
        <ContentImgLeft leftImgContent={leftImgContentTop}></ContentImgLeft>
        <ContentImgRight rightImgContent={rightImgContentMid}></ContentImgRight>
        <ContentImgLeft leftImgContent={leftImgContentBot}></ContentImgLeft>
    </div>
  )
}

export default page