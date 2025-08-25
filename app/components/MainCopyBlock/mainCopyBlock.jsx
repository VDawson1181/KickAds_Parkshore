import React from 'react'
import './mainCopyBlock.css'
import Image from 'next/image'

const mainCopyBlock = ({mainCopyContent}) => {
  return (
    <section className='mainCopy'>
    {mainCopyContent.map((content, index) => (
        <div key={index} className="mainCopyInner">
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
    ))}
    </section>
  )
}

export default mainCopyBlock