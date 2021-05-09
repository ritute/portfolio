import React, { useEffect, useState } from 'react'
import {
  makeStyles,
  Fab,
} from '@material-ui/core'
import {
  ArrowUpward as ArrowUpIcon
} from '@material-ui/icons'
import { Slide } from 'react-awesome-reveal'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 100,
  },
  fab: {
    backgroundColor: 'rgba(40,42,43,.1)',
    boxShadow: 'none',
    color: 'white',
    transition: 'all .5s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}))

const ScrollTop = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false)
  const rootElement = document.documentElement

  // Show button when page is scrolled down 25% of total page height
  const toggleVisibility = () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    ((rootElement.scrollTop / scrollTotal) > 0.25) ? setIsVisible(true) : setIsVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return function cleanup() {
      window.removeEventListener('scroll', toggleVisibility)
    }
  })

  return (
    <div onClick={scrollToTop} className={classes.root}>
      {isVisible &&
        <Slide direction='up' triggerOnce>
          <Fab className={classes.fab}>
            <ArrowUpIcon />
          </Fab>
        </Slide>}
    </div>
  );
}

export default ScrollTop
