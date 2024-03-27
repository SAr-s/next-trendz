// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="main-logo"
      />
    </div>
    <div className="nav-menu">
      <ul className="nav-menu">
        <Link to="/">
          <li className="list-item">Home</li>
        </Link>

        <Link to="/product">
          <li className="list-item">Product</li>
        </Link>

        <Link to="/cart">
          <li className="list-item">Cart</li>
        </Link>
      </ul>
      <button type="button" className="login-button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
