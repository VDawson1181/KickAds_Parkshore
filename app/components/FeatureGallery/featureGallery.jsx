import React from 'react'
import Image from 'next/image'
import './featureGallery.css'

const featureGallery = ({featureGalImgs}) => {
  return (
    <section className="featureGallery">
        <div className="featureMid">
            {featureGalImgs.map((img, index) => (
                <div key={index} className="featureItem">
                    <Image
                        src={img.src}
                        alt={img.name}
                        width={400}
                        height={400}
                        sizes="100%"
                        style={{width:'100%', height:'auto', objectFit: 'cover'}}
                        priority={0} // Only the first image is prioritized
                        />
                    <h2>{img.name}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}

export default featureGallery