import React from 'react'

export const Contact = () => {
  return (
    <div className="pages">
      <h1 className="heading">Contact</h1>

      <form className="contact">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
