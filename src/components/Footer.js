import React from 'react'

import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import tictok from '../assets/tictok.png'


const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', icon: fb },
  { url: 'https://github.com/taniarascia', icon: insta },
  { url: 'https://www.netlify.com', icon: tictok },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <div>
            <img src="../img/logo.png" alt="logo" />
            <span>UNIMAY Media, Студія озвучування аніме, 2023 (с) Всі права захищені.</span>
        </div>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}