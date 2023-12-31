import React,{useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { deepPurple } from '@mui/material/colors';



// import cookie from 'js-cookie';

import { useRouter } from 'next/navigation';



export default function Header() {

  const [jwtoken, setJwToken] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (localStorage.getItem('jwttoken')) {
      setJwToken(localStorage.getItem('jwttoken'));
    } else {
      setJwToken('');
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { push } = useRouter();

  const logout = (req, res) => {
    localStorage.clear();
    setJwToken('');
    push('/signin');
  }

  return (<>
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', bgcolor: deepPurple[700] }} justifyContent="flex-end">
        <Typography sx={{ minWidth: 100, color: 'primary.contrastText' }}><Link href='/'>Home</Link></Typography>
        {/* <Typography sx={{ minWidth: 100, color: 'primary.contrastText' }}><Link href='/dashboard'>Dashboard</Link></Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, mr: 2 }}>D</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {jwtoken ? 
        (
          <>
          <MenuItem onClick={handleClose}>
          <Link href="/dashboard"> <Avatar /> Profile </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
          </>
        ):(
          <>
          <MenuItem onClick={logout}>
          <Avatar /> SignIn
          </MenuItem>
          </>
        )}
        
      </Menu>
    </React.Fragment>
  </>

  )
}
