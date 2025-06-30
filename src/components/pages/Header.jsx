import React from 'react'
import { Link} from 'react-router-dom'


export const Header = () => {

  return (
    <header>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
      </nav>
    </header>

  )
}

export default Header
