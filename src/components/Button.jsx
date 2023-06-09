import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} transition hover:scale-110 rounded-xl`}>
      Get Started
    </button>
  )
}

export default Button