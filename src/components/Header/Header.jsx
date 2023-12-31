import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Container, Grid, Tooltip, Avatar, Stack, Box, SvgIcon, Menu, Typography, IconButton, Paper, InputBase, FormControl, FormGroup, Select, MenuItem, Button } from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import logo from "../Assets/img/logo.svg";
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header() {
  const [language, setLanguage] = useState('English');
  const [isAgreeCategory, setIsAgreeCategory] = useState('none');
  const navigate = useNavigate();
  const [role, setRole] = useState(2);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userMenu, setUserMenu] = useState([]);
  const [trainingCenterMenu, setTrainingCenterMenu] = useState([]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    setUserMenu(['Profile', 'Account', 'Submit An Application'])
    setTrainingCenterMenu(['Dashboard', 'My Advertising', 'Profile', "Create Advertising", 'Increase Efficiency', 'Log Out'])
  }, [])

  function openCategory () {
    if(isAgreeCategory === 'none') {
      setIsAgreeCategory('block');
    }else {
      setIsAgreeCategory('none');
    }
  }

  function adminPanelLink (menu) {
    let newMenu = menu.toLowerCase().split(" ");
    
    if(newMenu.length > 1){
      newMenu = newMenu[0] + "-" + newMenu[1];
    }else {
      newMenu = menu.toLowerCase();
    }
    console.log(newMenu);

    navigate(`/institution-admin/${newMenu}`)
  }

  function search () {
    navigate("/search")
  }

  function signIn () {
    navigate('/sign-in')
  }

  function signUp () {
    navigate('/sign-up')
  }

  function like () {
    navigate('like')
  }

  return (
    <Stack>
        <Container>
            <Grid container height={55} alignItems='center'>
              <Grid item xl={2}>
                <NavLink style={navLinkStyle}><span style={{color: "#BC002D"}}>JDU</span> System</NavLink>
              </Grid>
              <Grid item xl={7}>
                <Typography variant='subtitle2'>Bizning foydalanuvchilarimiz 999999 ga yetdi.</Typography>
              </Grid>
              <Grid item xl={3} display='flex' justifyContent='space-between' alignItems='center'>
                <NavLink style={navLinkStyle}>Doc</NavLink>
                <IconButton aria-label="contrast" color='primary'>
                  <ContrastIcon />
                </IconButton>
                <FormControl sx={{minWidth: 150 }} size="small">
                  <Select
                    defaultValue='English'
                    id="demo-select-small"
                    color='primary'
                    value={language}
                    onChange={handleChange}
                    renderValue={(value) => {
                      return (
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <SvgIcon color="primary">
                            <LanguageIcon />
                          </SvgIcon>
                          {value}
                        </Box>
                      );
                    }}
                  >
                    <MenuItem value='English'> English</MenuItem>
                    <MenuItem value='Russian'>Russian</MenuItem>
                    <MenuItem value='Uzbek'>Uzbek</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1} height={90} alignItems='center'>
              <Grid item xl={3} display='flex' justifyContent='space-between' alignItems='center'>
                <Link to='home'>
                    <img src={logo} width={150} alt="Space os Knowledge" />
                </Link>
                <Button onClick={openCategory} size='large' sx={{height: 44}} variant="outlined" color='danger' startIcon={<CategoryIcon />}>
                  Category
                </Button>
              </Grid>
              <Grid item xl={6}>
              <Paper
                  component="form"
                  sx={{display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Academy Name..."
                  />
                  <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item xl={3} display='flex' justifyContent='space-between' alignItems='center'>
                {
                  role === null ? <>
                    <Button size='large' onClick={signIn} sx={{height: 44}} variant="contained" color='danger'>
                    Sign In
                  </Button>
                  <Button size='large' onClick={signUp} sx={{height: 44}} variant="contained" color='primary'>
                    Sign Up
                  </Button>
                  </> : <Box sx={{ flexGrow: 0, width: '220px' }}>
                    <Stack width='100%' flexDirection='row' gap={1} alignItems='center' display='flex' justifyContent='flex-start'>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />  
                      </IconButton>
                      <Typography variant="" fontWeight='bold' fontSize={16}>Full Name</Typography>
                    </Stack>
                    {
                      role === 1 ?
                        <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        {
                          userMenu.map((item, index) => {
                            return (
                              <MenuItem key={index + 1}>
                                <Typography textAlign="center">{item}</Typography>
                              </MenuItem>
                            )
                          })
                        }
                        </Menu>
                      : <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        {
                          trainingCenterMenu.map((item, index) => {
                            return (
                              <MenuItem onClick={() => adminPanelLink(item)} key={index + 1}>
                                <Typography textAlign="center">{item}</Typography>
                              </MenuItem>
                            )
                          })
                        }
                      </Menu>
                    }
                  </Box>
                }
                <IconButton aria-label="contrast" onClick={like} color='danger'>
                  <FavoriteBorderIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Box sx={{position: 'relative'}}>
              <Stack bgcolor='white' boxShadow='0 5px 5px #42434681' position='absolute' width="100%" zIndex={33} display={isAgreeCategory}>
                <Category />
              </Stack>
            </Box>
            <Outlet/>
            <Footer />
        </Container>
    </Stack>
  )
}

const navLinkStyle = {
  color: '#072556',
  textDecoration: 'none'
}

export default Header