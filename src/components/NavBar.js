import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const drawerWidth = 240

const StyledTitleLink = styled(Link)({
    color: '#ffffff',
    'text-decoration': 'none',
    fontSize: 25,
    'line-height': 30,
});

const StyledLink = styled(Link)({
    'text-decoration': 'none',
    color: '#895370',

    '&:focus':{
      'text-decoration': 'none',
    },
    '&:hover':{
      'text-decoration': 'none',
    },
    '&:visited':{
      'text-decoration': 'none',
    },
    '&:link':{
      'text-decoration': 'none',
    },
    '&:active':{
      'text-decoration': 'none',
    },
});

const AppBarButton = styled(Button)({

  '&:hover': {
    backgroundColor: '#eee0ea',
    color: '#2d0719',
  },
  '&:active': {
    backgroundColor: '#2d0719',
    borderColor: '#2d0719',
    color: '#eee0ea',
  },
  '&:focus': {
    backgroundColor: '#2d0719',
    borderColor: '#2d0719',
    color: '#eee0ea',
  },
});

function Navbar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const Routes = [
    {
      Label: 'Sobre',
      Value: '/sobre',
    },
    {
      Label: 'Integrantes',
      Value: '/integrantes',
    },
    {
      Label: 'Eventos',
      Value: '/eventos',
    },
    {
      Label: 'Calendário',
      Value: '/calendario',
    },
    {
      Label: 'Textos',
      Value: '/textos',
    },
    {
      Label: 'Contato',
      Value: '/contato',
    },
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img width={45} src={Logo} alt=''/>
        <div >
          <div >
            <StyledLink exact to="/" >
              <b>LBXF</b>
            </StyledLink>
          </div>
        </div>
      </Typography>
      <Divider />
      <List>
        {Routes.map((item) => (
          <ListItem key={item.Label} disablePadding>
            <ListItemButton
                component={Link}
                to={item.Value}
                key={item.Value}
                sx={{ textAlign: 'center' }}
            >
              {item.Label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, float: 'left' }}
              style={{ marginRight: '1.5rem' }}
            >
              {' '}
              <img width={90} src={Logo} alt=''/>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block'}, float: 'left' }}>
            <StyledTitleLink exact to="/" >
                <b>LBXF</b>
            </StyledTitleLink>
            <p style={{ 'line-height': 0, fontSize: 13}}>Liga Brasileira de</p>
            <p style={{ 'line-height': 0, fontSize: 13}}>Xadrez Feminino</p>
            </Box>
          </div>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, float: 'right' }}>
            {Routes.map((item) => (
              <AppBarButton color="inherit"
                component={Link}
                to={item.Value}
                key={item.Value}
                sx={{ color: '#fff' }}
              >
                {item.Label}
              </AppBarButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  )
}

Navbar.propTypes = {
  window: PropTypes.func,
}

export default Navbar
