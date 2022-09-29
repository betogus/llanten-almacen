import React from 'react'
import Logo from '../../material/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div style={{width: "20%"}}>
            <img src={Logo} className='navbar-logo' alt='logo'/>
        </div>
        <div style={{width: '60%'}}>
        <ul className='navbar-list'>
            <li>
                Inicio
            </li>
            <li>
                Almacén
            </li>
            <li>
                Contacto
            </li>
        </ul>
        </div>
        <div style={{width: '20%'}}>
            <ul className='navbar-list'>
                <li>
                    <PersonIcon fontSize="large"/>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar