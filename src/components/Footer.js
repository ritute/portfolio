import React from 'react'
import {
  makeStyles,
  Grid,
  Container,
  Typography,
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { AttentionSeeker } from 'react-awesome-reveal'

import SocialIcons from './SocialIcons'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(1, 0),
    color: '#D9DBE1',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: theme.spacing(6, 0),
    }
  },
  heart: {
    color: theme.palette.secondary.main,
    verticalAlign: 'middle',
    display: 'inline-flex',
    padding: theme.spacing(.5),
  },
  right: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    }
  },
  center: {
    textAlign: 'center',
  },
}))

const Copyright = () => (
  <Typography variant='body2'>
    {`© ${new Date().getFullYear()} Rita Bancevicius`}
  </Typography>
)

const MadeWithLove = () => {
  const classes = useStyles()
  return (
    <Typography variant='body1' component='div'>Made with
      <AttentionSeeker effect='heartBeat' className={classes.heart}>
        <FavoriteIcon  />
      </AttentionSeeker>
    </Typography>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} sm className={classes.left}>
            <Copyright />
          </Grid>
          <Grid item xs={12} sm className={classes.center}>
            <MadeWithLove />
          </Grid>
          <Grid item xs={12} sm className={classes.right}>
            <SocialIcons />
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
