import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

function NavbarV2(props) {
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
      Label: 'Calendario',
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
        <img width={45} src={Logo} />
        <div className="title-navbar">
          <div className="bigWords">
            <NavLink exact activeClassName="active" to="/">
              {' '}
              <b>LBXF</b>{' '}
            </NavLink>
          </div>
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
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
            >
              {' '}
              <img width={90} src={Logo} />
            </Typography>
          </div>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, float: 'right' }}>
            {Routes.map((item) => (
              <Button
                component={Link}
                to={item.Value}
                key={item.Value}
                sx={{ color: '#fff' }}
              >
                {item.Label}
              </Button>
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

NavbarV2.propTypes = {
  window: PropTypes.func,
}

export default NavbarV2
