import React from 'react'
import {
  makeStyles,
  Grid,
  Button,
  Typography,
} from '@material-ui/core'
import {
  Link,
} from 'react-router-dom'

import Avatar from './Avatar'

const useStyles = makeStyles(theme => ({
  avatarButton: {
    textTransform: 'none',
    '&:hover': {
      background: 'none'
    }
  },
}))

const AvatarCardContent = () => {
  return (
    <Grid container alignItems='center' spacing={2} wrap='nowrap'>
      <Grid item><Avatar /></Grid>
      <Grid item>
        <Typography variant='subtitle1'>Rita Bancevicius</Typography>
        <Typography variant='body2'>UX/UI Designer & Front-End Engineer</Typography>
      </Grid>
    </Grid>
  )
}

const AvatarCard = ({ link, ...rest}) => {
  const classes = useStyles()

  return (
    link ?
      <Button component={Link} to={link} className={classes.avatarButton} {...rest}>
        <AvatarCardContent />
      </Button> :
      <AvatarCardContent />
  )
}

export default AvatarCard
