import React from 'react'
import RamanaSoft from '../Resources/image (1).png';
import './Style/NavBar.css'


const NavBar = () => {
  return (
    <>
         <div>
              <div className='left'>
                <img src={RamanaSoft} alt='' className='company-logo'/>
                <div className='Dashboard'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"fill="#e3e3e3" className='homeLogo'><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                  <p className='Dashboard-txt'>Dashboard</p>
                </div>
              </div>
              <div className='NavTab'>

              </div>
        
          </div>
    </>
  )
}

export default NavBar