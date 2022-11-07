import React from 'react'
import Logo from '../../assets/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import BasicMenu from './BasicMenu';



const NavBar = () => {

  return (
    <div className='navbar-container'>
        <div style={{width: "20%"}}>
            <img src={Logo} className='navbar-logo' alt='logo'/>
        </div>
        <div style={{width: '60%'}}>
        <ul className='navbar-list'>
            <li>
                <Link className='navbar-list-link' to='/'>Inicio</Link>
            </li>
            <li className=' navbar-list-link'>
                <BasicMenu />
            </li>
            <li>
                <Link className='navbar-list-link' to='/about'>Sobre Nosotros</Link>
            </li>
            <li>
                <Link className='navbar-list-link' to='/contact'>Contacto</Link>
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