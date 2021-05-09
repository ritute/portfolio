import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core'
import { Zoom } from 'react-awesome-reveal'

import {
  SectionWithBackground,
  SectionHeader,
} from './Section'

const useStyles = makeStyles(theme => ({
  step: {
    height: '100%',
  },
  steps: {
    marginTop: theme.spacing(2),
  },
}))

const ProcessCards = ({ steps }) => {
  const classes = useStyles()

  return (
    steps.map((step, index) => (
      <Grid key={index} item xs={12} sm={6} md>
        <Card className={classes.step}>
          <CardContent>
            {<step.icon />}
            <Typography variant='subtitle1' align='center' gutterBottom>{step.title}</Typography>
            <Typography variant='body1' align='center'>{step.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))
  )
}

const ProcessOverview = ({ steps }) => {
  const classes = useStyles()

  return (
    <SectionWithBackground>
      <Grid container direction='column'>
        <Grid item>
          <SectionHeader title='My Process' />
        </Grid>
        <Grid item className={classes.steps}>
          <Zoom>
            <Grid container spacing={4} alignItems='stretch' justify='center'>
              <ProcessCards steps={steps} />
            </Grid>
          </Zoom>
        </Grid>
      </Grid>
    </SectionWithBackground>
  )
}

ProcessOverview.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.func,
  }))
}

export default ProcessOverview
