import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  Toolbar,
  Grid,
  Typography,
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
import { HashLink as Link } from 'react-router-hash-link'
import { Fade } from 'react-awesome-reveal'

import Avatar from './Avatar'
import SocialIcons from './SocialIcons'
import backgroundVideo from 'videos/background.mp4'

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: '240px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '60px',
    backgroundColor: theme.palette.common.black,
    position: 'relative',
  },
  videoContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  appBar: {
    background: 'none',
    '& button': {
      color: theme.palette.common.white,
      textTransform: 'none',
    },
  },
  avatarContainer: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: 'calc(100% - 100px / 2)',
    left: 'calc(50% - 100px / 2)',
    // No box shadow for bottom half of circle
    '&::after': {
      position: 'absolute',
      content: "' '",
      width: '100%',
      height: '50%',
      left: '0',
      top: '50%',
      background: theme.palette.background.default,
    },
  },
  avatar: {
    position: 'absolute',
    top: 'calc(50% - 85px / 2)',
    left: 'calc(50% - 85px / 2)',
    zIndex: 1,
  },
  title: {
    position: 'absolute',
    top: '25%',
    width: '100%',
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
    [theme.breakpoints.down('xs')]: {
      top: '20%',
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
    link: '#work'
  },
  {
    title: 'About',
    link: '#about'
  },
  {
    title: 'Contact',
    link: '#contact'
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

const BackgroundVideo = () => {
  const classes = useStyles()

  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} autoPlay playsInline muted loop playbackrate={0.5}>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
    </div>
  )
}

const Title = () => {
  const classes = useStyles()

  return (
    <div className={classes.title}>
      <Fade direction='down' cascade>
        <Typography variant='h3' align='center'>
          Rita Bancevicius
        </Typography>
        <Typography variant='h5' align='center'>
          UX/UI Designer & Front-End Engineer
        </Typography>
      </Fade>
    </div>
  )
}

const AvatarContainer = () => {
  const classes = useStyles()

  return (
    <div className={classes.avatarContainer}>
      <Avatar size='large' className={classes.avatar} />
    </div>
  )
}

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Nav />
      <BackgroundVideo />
      <Title />
      <AvatarContainer />
    </header>
  )
}

export default Header
