import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Grid,
  Typography,
  Container,
} from '@material-ui/core'
import { Slide } from 'react-awesome-reveal'

import AvatarCard from 'components/AvatarCard'

const useStyles = makeStyles(theme => ({
  banner: {
    background: theme.palette.background.gradient,
    padding: theme.spacing(4, 0),
  },
  caseStudyHeader: {
    padding: theme.spacing(2, 0),
  },
  caseStudyTitle: {
    paddingTop: '15%',
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5%',
    }
  },
}))

const Banner = (props) => {
  const classes = useStyles()
  const { title, description } = props

  return (
    <div className={classes.banner}>
      <Container maxWidth='lg'>
        <AvatarCard link='/' />
        <Grid container spacing={4} className={classes.caseStudyHeader}>
          <Grid item xs={12} sm={5}>
            <Slide className={classes.caseStudyTitle}>
              <Typography variant='h3' gutterBottom>{title}</Typography>
              <Typography variant='subtitle2'>{description}</Typography>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={7}>
            {<props.thumbnail />}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.func,
}

export default Banner
