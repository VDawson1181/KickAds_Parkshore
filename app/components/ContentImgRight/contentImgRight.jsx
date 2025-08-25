import React from 'react'
import './contentImgRight.css'
import Image from 'next/image'
// import ButtonComponent from 'components/Button/button'
import ButtonElement from '../Button/button'

  const buttonInfo = [
          {
          copy: "Girl Playing",
          pageUrl: "https://fourseasonsroofingny.com/residential-roofing/"          
          }
      ];

const contentImgright = ({rightImgContent}) => {
  return (
    <section className="content_image_right_container">
        {rightImgContent.map((content, index) => (
            <div key={index} className="content_image_right">
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
              {/* <ButtonElement buttonInfo={buttonInfo}></ButtonElement> */}
              <Image
                  src={content.imgSrc}
                  alt={content.imgName}
                  width={1200}
                  height={800}
                  style={{width:'100%', height:'auto', objectFit: 'cover'}}
                  priority={0} // Only the first image is prioritized
                  />
            </div>
          ))}
      </section>
  )
}

export default contentImgright