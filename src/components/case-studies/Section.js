import React from 'react'
import {
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core'
import { Zoom } from 'react-awesome-reveal'

const useStyles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(6, 2),
  },
  sectionContent: {
    padding: theme.spacing(2),
  },
  sectionBackground: {
    background: ({color}) => color || theme.palette.background.gradient,
  },
  sectionMedia: {
    backgroundImage: ({src}) => `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 0,
    paddingTop: ({width, height}) => `calc(${height} / ${width} * 100%)`,
    margin: theme.spacing(4, 0),
  },
  sectionHeader: {

  },
}))

const Section = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <Container maxWidth='md' {...props}>
      <div className={classes.section}>
        {children}
      </div>
    </Container>
  )
}

const SectionWithBackground = ({ color, children, ...props }) => {
  const classes = useStyles({color})
  return (
    <div className={classes.sectionBackground}>
      <Section {...props}>{children}</Section>
    </div>
  )
}

const SectionHeader = ({ title, ...props }) => {
  const classes = useStyles()
  return (
    <Typography variant='h4' align='center' gutterBottom
      className={classes.sectionHeader} {...props}>{title}</Typography>
  )
}

const SectionContent = ({ title, subtitle, children, ...props }) => {
  const classes = useStyles()
  return (
    <div className={classes.sectionContent} {...props}>
      {title && <Typography variant='subtitle1' gutterBottom>{title}</Typography>}
      {subtitle && <Typography variant='subtitle2' gutterBottom>{subtitle}</Typography>}
      {children && <Typography variant='body1' component='div' gutterBottom>{children}</Typography>}
    </div>
  )
}

const SectionMedia = ({ src, width, height, ...props }) => {
  const classes = useStyles({src, width, height})
  return (
    <Zoom><div className={classes.sectionMedia} {...props}></div></Zoom>
  )
}

export {
  Section,
  SectionWithBackground,
  SectionHeader,
  SectionContent,
  SectionMedia
}
