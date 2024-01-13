import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Dropdown } from 'flowbite-react';


const pages = ['Home', 'Shop', 'Categories', 'Cart', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {user, logOut} = React.useContext(AuthContext);
    const [variant, setVariant] = React.useState('solid');

     const photo = (user?.photoURL);
   

    const handleLogOut =async () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
      };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    

  return (
    <AppBar position="static">
    <Container maxWidth="2xl">
    <Toolbar disableGutters>
        
        <Typography
        variant="h6"
        noWrap
        component="a"
        
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
        <img
            className='w-7 h-7' 
            src="https://i.ibb.co/Hh30kKG/image-300x300.png"
            alt="Logo"
            width="30"
            height="30"
            style={{ marginRight: '8px' }}  
        />
        BazarBD
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
            display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
            <Typography
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                my: 2,
                color: 'black',
                display: 'block',
                paddingX: 1,
                textDecoration: 'none',
                
                }}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>
                {page}
                </Typography>
                ))}
        </Menu>
        </Box>
        
        <Typography
        variant="h5"
        noWrap
        component="a"
        
        sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
            <img
            className='w-7 h-7' 
            src="https://i.ibb.co/Hh30kKG/image-300x300.png"
            alt="Logo"
            width="30"
            height="30"
            style={{ marginRight: '8px' }}  
        />
        BazarBD
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', marginRight: 2 } }}>
        {pages.map((page) => (
            <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
            component={Link} to={ page === 'Home'?  '/': `/${page.toLocaleLowerCase()}` }
            >
            {page}
            </Button>
        ))}
        </Box>

        {user ? (
                       
                        <div className="flex md:order-2">
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={<Avatar alt="User settings" src={photo}/>}>
                                <Dropdown.Header>
                                    <span className="block text-sm">{user?.displayName}</span>
                                    <span className="block truncate text-sm font-medium">{user.email}</span>
                                </Dropdown.Header>
                                <Dropdown.Divider />
                                {user?.email ? (
                                    <Dropdown.Item href="dashboard">DashBoard</Dropdown.Item>
                                ) : (
                                    <p>No dashboard</p>
                                )}
                                <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
                            </Dropdown>
                        </div>
                    ) : (
                        
                        <div>
                            <Link
                                to="/signIn"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#333333] underline font-medium text-lg"
                                        : ""
                                }
                            >
                                <button className="btn btn-info bg-white text-black hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg">Login</button>
                            </Link>
                        </div>
                    )}
    </Toolbar>
    </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;