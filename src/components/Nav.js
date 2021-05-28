import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  Toolbar,
  Grid,
  AppBar,
  Button,
  Drawer,
  Hidden,
  ListItem,
  ListItemText,
  List,
  IconButton,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
// Link is giving findDOMNode warnings
import { Link } from 'react-scroll'

import SocialIcons from './SocialIcons'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'none',
    '& button': {
      color: theme.palette.common.white,
      textTransform: 'none',
    },
  },
  navLinks: {
    '& a': {
      color: theme.palette.common.white,
      textTransform: 'none',
      transition: 'all .5s ease',
      '&:hover': {
        opacity: 0.8,
        transform: 'scale(1.1)',
      }
    }
  },
  drawerPaper: {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    '& a': {
      padding: theme.spacing(1, 4)
    }
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    }
  },
}))

const navLinks = [
  {
    title: 'Work',
    link: 'work'
  },
  {
    title: 'About',
    link: 'about'
  },
  {
    title: 'Contact',
    link: 'contact'
  },
]

const NavDrawer = ({ onClick }) => {
  return (
    <nav>
      <List>
        {navLinks.map(({ link, title }, index) => (
          <ListItem button key={index} component={Link} smooth to={link} onClick={onClick}>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

const Nav = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar position='absolute' elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Container maxWidth='lg'>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item className={classes.navLinks}>
              <Hidden xsDown>
                <nav>
                  {navLinks.map(({ link, title }, index) => (
                    <Button key={index} component={Link} smooth to={link}>{title}</Button>
                  ))}
                </nav>
              </Hidden>
              <Hidden smUp implementation='css'>
                <IconButton onClick={handleDrawerToggle}><MenuIcon /></IconButton>
                <Drawer
                  variant='temporary'
                  anchor='left'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // better open performance on mobile
                  }}>
                  <NavDrawer onClick={handleDrawerToggle} />
                </Drawer>
              </Hidden>
            </Grid>
            <Grid item>
              <SocialIcons />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
