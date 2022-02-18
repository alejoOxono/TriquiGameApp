import React from 'react'
import Game from '../Game/Game'
import Gamers from '../Gamers/Gamers'
import Nav from '../Nav/Nav'
import './LandPage.scss'

function LandPage() {
  return (
    <div>
      <Nav />
      <Gamers />
      <div className="game-container-landpage">
        <Game />
      </div>
    </div>
  )
}

export default LandPage