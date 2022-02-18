import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss'

function Nav() {
  return (
    <div className="content-all-nav">
      <div className="title-pag">
        <Link to='/' className='links'><h3><b>TRIQUI</b></h3><p><b>player vs player</b></p></Link>
      </div>
      <div className="link-records">
        <Link to='/historial' className='links'><p><b>Historial</b></p></Link>
      </div>
    </div>
  )
}

export default Nav