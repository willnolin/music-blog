import React from 'react'
import Nav from "./Nav"
import Footer from './Footer'
import './css/Layout.css'

function Layout(props) {
  return (
    <div className="layout-parent">
    <Nav />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
  )
}

export default Layout
