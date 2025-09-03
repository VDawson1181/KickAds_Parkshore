import React from 'react'
import Image from 'next/image'
import './mainCopyHeader.css'

const mainCopyHeader = ({mainHeaderCopy}) => {
  return (
    <section className="mainCopyHeader">
      {mainHeaderCopy.map((copy, index) => (
          <div key={index} className="mainHeaderInner">
                          <Image
              src={copy.imgSrc}
              alt="Facebook"
              width={1024}
              height={500}
              sizes="100vw"
              style={{width: '100%', height: 'auto', maxHeight:'500px', margin: '-50px auto 0', objectFit: 'cover'}}
              />
              <div className="headerCopy">
                  <h2>{copy.header}</h2>
              </div>
          </div>
      ))}
    </section>
  )
}

export default mainCopyHeader
