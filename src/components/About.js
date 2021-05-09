import React, { Fragment  } from 'react'
import {
  makeStyles,
  Grid,
  Container,
  Typography,
  Button,
} from '@material-ui/core'
import { Fade, Bounce } from 'react-awesome-reveal'

import runningImage from 'images/running-bkg.jpg'
import QuoteIcon from './icons/QuoteIcon'

const useStyles = makeStyles(theme => ({
  about: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  aboutContainer: {
    backgroundImage: `url(${runningImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    color: theme.palette.common.white,
  },
  greeting: {
    position: 'relative',
    zIndex: 1,
  },
  quote: {
    position: 'absolute',
    top: '-25px',
    left: '-45px',
    zIndex: -1,
    '& > svg': {
      width: '56px',
      height: '50px',
    }
  },
  bannerQuoteContainer: {
    height: '100%',
  },
  email: {
    padding: 0,
    color: theme.palette.common.white,
    textTransform: 'none',
    transition: 'all .5s ease',
    ...theme.typography.body1,
    '&:hover': {
      opacity: 0.8,
    }
  },
  avatar: {
    padding: theme.spacing(2, 4, 4, 0),
  },
  hobbiesContact: {
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  intro: {
    padding: theme.spacing(2, 10, 10, 8),
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(4),
    }
  },
  introBlurb: {
    fontWeight: 600,
  },
}))

const Hobbies = () => {
  return (
    <Grid item>
      <Fade direction='right'>
        <Typography variant='h5' gutterBottom>
          Things that make me smile :)
        </Typography>
        <Typography variant='body1'>
          Running, dogs, books
        </Typography>
      </Fade>
    </Grid>
  )
}

const Contact = () => {
  const classes = useStyles()

  return (
    <Grid item id='contact'>
      <Fade direction='right'>
        <Typography variant='h5' gutterBottom>
          Contact
        </Typography>
        <Button
          href='mailto:rita@ritute.com'
          target='_top' rel='noreferrer'
          className={classes.email}>
          rita@ritute.com
        </Button>
      </Fade>
    </Grid>
  )
}

const Intro = () => {
  const classes = useStyles()

  return (
    <Grid item sm={12} md className={classes.intro}>
      <Fade direction='left'>
        <Typography variant='h3' component='div' gutterBottom className={classes.greeting}>
          Hi!
          <Bounce className={classes.quote}><QuoteIcon color='secondary' opacity='.7' /></Bounce>
        </Typography>
        <Typography variant='h6' className={classes.introBlurb}>
          I’m Rita, an experienced engineer & designer who loves exploring complex
          problems in search of simple & delightful user experiences, and pixel-perfect implementation with high-quality code.
          My blend of design & tech empower me to find solutions that are both desirable & feasible.
        </Typography>
      </Fade>
    </Grid>
  )
}

const About = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.aboutContainer} id='about'>
        <Container maxWidth='md'>
          <Grid container className={classes.about} alignItems='stretch'>
            <Intro />
            <Grid item sm={12} md
              container
              direction='column'
              justify='flex-end'
              className={classes.hobbiesContact}
              spacing={6}>
              <Hobbies />
              <Contact />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  )
}

export default About
