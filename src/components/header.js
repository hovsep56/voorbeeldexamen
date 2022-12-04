import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <Link className="header-logo" to="/">
        {/*Voeg hier het logo toe */}
    </Link>
    <nav className="header-nav">
      <ul>
        <li>
          <Link activeClassName="active" to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
