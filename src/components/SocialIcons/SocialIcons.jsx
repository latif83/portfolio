import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialIcons({icon,label}) {
  return (
    <div className="text-center">
    <FontAwesomeIcon icon={icon} width={30} className='m-auto' />
    <p className="text-sm mt-2">{label}</p>
  </div>
  )
}

export default SocialIcons