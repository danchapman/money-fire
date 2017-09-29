import React from 'react'
import { Link } from 'react-router'
import DuckImage from '../assets/Duck.jpg'
import etherImg from '../assets/ethereum.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>
      <img alt='This is a pic, because Redux!' className='ethereum-logo' src={etherImg} />
    </Link>
  </div>
)

export default HomeView
