import React from 'react';

function Button({text,link}) {
  return (
    <a href={link} className='btn'>{text}</a>
  )
}

export default Button;