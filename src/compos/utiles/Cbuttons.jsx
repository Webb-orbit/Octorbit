import React from 'react'

export const Cbuttons = ({btype="0", classes="", text="button"}) => {
    const buttons = [
        "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2",
        "text-white bg-gradient-to-br from-red-600 to-yellow-500 hover:bg-gradient-to-bl  font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2"
    ]
  return (
    <button className={`${buttons[btype]} ${classes}`}>{text}</button>
  )
}
