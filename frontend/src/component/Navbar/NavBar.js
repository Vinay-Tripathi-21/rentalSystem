import React, { useState ,useEffect } from 'react'
import './navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import { Avatar, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import { userInfo } from '../services/dataStore';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha} from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.50),
  },
  marginLeft: 0,
  width: '150px',
  height: '100%',
  
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = ({setFileterproduct}) => 
  {
    const[show,setShow] =useState(false);
    const [isLogin, setLogin] = useState(false);
    const [searchedvalue, setSearchValue] =useState('')

    useEffect(()=>{
      if (userInfo.email) {
        setLogin(true);
      }
    },[]);

    const searchItem=async()=>{
      try {
        const res= await fetch(`http://localhost:8080/searchedProduct?query=${searchedvalue}`);
        const data= await res.json();
        console.log(data);
       setFileterproduct(data);
      } catch (error) {
        console.log(error);
      }
    }



    
  return (
    <nav className='background-blue py-4 ' style={{'width':'100%'}}>
        <span>Rental System</span>

        <Search>
          
              <IconButton onClick={searchItem} >
              <SearchIcon />
              </IconButton>
             
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setSearchValue(e.target.value)}
              value={searchedvalue}
            />
          </Search>
        <ul>
            <li> <Link to="">Home</Link></li>
            <li><Link to="/">Product</Link></li>

            <li> {!isLogin &&<Link to="/signin">SignIn</Link>}</li>

            <li>{isLogin && <div className='cursor-pointer' onClick={()=>setShow(!show)}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
          {show ? <Dropdown/> :''}
          </div>}</li>
        </ul>
       
       
    </nav>
  )
}

export default Navbar