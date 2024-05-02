import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
    <div className="text-center p-3">
      <span>Email: mazenj1997@gmail.com</span> |{" "}
      <span>Phone: +1234567890</span>
      <br />© {new Date().getFullYear()}
    </div>
  </footer>
  )
}
