import React, { useState } from 'react'

function Nav() {

  const [menuActive, setMenuActive] = useState(false)
  
  // function handleMenuClick() {
  //   if (menuClicked) {
  //     setMenuActive
  //   }
  // }

  return (
    <div>
      <nav className="navbar has-shadow is-white is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="../assets/pick-logo.png" alt="site-logo"
              style={{ maxHeight: "80px"}} className="py-2 px-2" />
          </a>
          <a className={`navbar-burger ${menuActive ? 'is-active': ''}`} onClick={() => setMenuActive(prevState => !prevState)}> 
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${menuActive ? 'is-active': ''}`} id="nav-links">
          <div className="navbar-end">
          <a className="navbar-item">Login</a>
          <a className="navbar-item">Posts</a>
          <a className="navbar-item">News</a>
          </div>
          </div>
      </nav>

      <div className="section pt-4 pb-0">
        <nav className="breadcrumb has-arrow-separator">
          <ul className="container">
            <li><a className="has-text-grey">Look</a></li>
            <li><a className="has-text-grey">Hear</a></li>
            <li className="is-active"><a>Feel</a></li>
          </ul>
        </nav>
      </div> 
    </div> 
  )
}

export default Nav
