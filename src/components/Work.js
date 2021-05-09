import React, { Fragment } from 'react'
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Chip,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import SummitStrongThumbnail from './thumbnails/SummitStrongThumbnail'
import SalesAppThumbnail from './thumbnails/SalesAppThumbnail'
import RightArrowIcon from './icons/RightArrowIcon'

const useStyles = makeStyles(theme => ({
  workCardContainer: {
    paddingBottom: theme.spacing(10),
  },
  workCard: {
    padding: theme.spacing(6),
  },
  thumbnail: {
    // borderBottom: '1px solid #EFEFEF',
  },
  skillChip: {
    margin: theme.spacing(0, 0.25),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0.25),
    }
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  badge: {
    fontFamily: [
      'Nanum Pen Script',
      'Manrope',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeight: 400,
    fontSize: '2rem',
  },
}))

const caseStudies = [
  {
    title: 'Summit Strong',
    subtitle: 'A training platform for the mountain athlete',
    thumbnail: SummitStrongThumbnail,
    // link: '/summit-strong-case-study',
    skills: ['UX Design', 'UI Design'],
  },
  {
    title: 'Sales Presentation Tablet App',
    subtitle: 'Allows sales reps to build simple yet powerful custom presentations on the go',
    thumbnail: SalesAppThumbnail,
    link: '/sales-app-case-study',
    skills: ['UI Design', 'Front-End Prototype'],
  },
]

const WorkCardSkills = ({ skills }) => {
  const classes = useStyles()

  return (
    <Fragment>
      {skills.map((skill, index) => (
        <Chip
          key={index}
          className={classes.skillChip}
          variant='outlined'
          size='small'
          label={skill} />
      ))}
    </Fragment>
  )
}

const WorkCardDescription = ({ title, subtitle, skills }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid item container alignItems='center' spacing={2} className={classes.title}>
        <Grid item>
          <Typography variant='h5'>{title}</Typography>
        </Grid>
        <Grid item>
          <WorkCardSkills skills={skills} />
        </Grid>
      </Grid>
      <Typography variant='body1'>{subtitle}</Typography>
    </Fragment>
  )
}

const WorkCardAction = ({ link }) => {
  const classes = useStyles()

  return (
    link ?
      <Button
        variant='outlined'
        endIcon={<RightArrowIcon />}
        component={Link}
        to={link}>
        View Project
      </Button> :
      <Typography className={classes.badge}>Coming Soon!</Typography>
  )
}

const WorkCard = ({ caseStudy }) => {
  const classes = useStyles()

  return (
    <Card className={classes.workCard} variant='outlined'>
      <div className={classes.thumbnail}>
        {<caseStudy.thumbnail />}
      </div>
      <CardContent>
        <Grid container alignItems='center' justify='space-between' spacing={2}>
          <Grid item>
            <WorkCardDescription
              title={caseStudy.title}
              subtitle={caseStudy.subtitle}
              skills={caseStudy.skills} />
          </Grid>
          <Grid item>
            <WorkCardAction link={caseStudy.link} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const Work = () => {
  const classes = useStyles()

  return (
    <Grid container id='work'>
      {caseStudies.map((caseStudy, index) => (
        <Grid item xs={12} key={index} className={classes.workCardContainer}>
          <WorkCard caseStudy={caseStudy} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Work
