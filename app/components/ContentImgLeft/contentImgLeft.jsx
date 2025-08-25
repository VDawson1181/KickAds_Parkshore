import React from 'react'
import './contentImgLeft.css'
import Image from 'next/image'

const contentImgLeft = ({leftImgContent}) => {
  return (
    <section className="content_image_left_container">
        {leftImgContent.map((content, index) => (
            <div key={index} className="content_image_left">
                <Image
                    src={content.imgSrc}
                    alt={content.imgName}
                    width={1200}
                    height={800}
                    style={{width:'100%', height:'auto', objectFit: 'cover'}}
                    priority={0} // Only the first image is prioritized
                    />
                <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          ))}
      </section>
  )
}

export default contentImgLeft