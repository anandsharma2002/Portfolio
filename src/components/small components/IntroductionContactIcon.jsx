import React from 'react'

export default function IntroductionContactIcon({image, link}) {
  return (
    <div className='introductionContactIcon mr-4'>
      <a href={link}>{image}</a>
    </div>
  )
}
