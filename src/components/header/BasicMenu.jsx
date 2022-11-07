import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';



export default function BasicMenu() {

    const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOnMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose1 = (e) => {
    setAnchorEl(null);
    navigate('/store')
  };

  const handleClose2 = (e) => {
    setAnchorEl(null);
    navigate('/category')
  };

  const outOfTheComponent = (e) => {
  !e.target.className.includes("navbar-store-button") && setAnchorEl(null)
    
    
  }

  return (
    <div onClick={outOfTheComponent} className='navbar-store-button'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleOnMouseOver}
        style={{ fontSize: "20px", textTransform: "none"}}
      >
        Almacén
      </Button>
      <Menu
      
        id="basic-menu"
        
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={handleClose1} >Todo</MenuItem>
        <MenuItem  onClick={handleClose2} >Categorías</MenuItem>
      </Menu>
      
    </div>
  );
}
