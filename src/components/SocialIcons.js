import React, { Fragment } from 'react'
import {
  makeStyles,
  IconButton,
} from '@material-ui/core'

import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.common.white,
    transition: 'all .5s ease',
    '&:hover': {
      opacity: 0.8,
      transform: 'scale(1.4)',
    }
  },
}))

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://linkedin.com/in/ritute'
  },
  {
    label: 'Github',
    icon: GithubIcon,
    link: 'https://github.com/ritute'
  },
];

const SocialIcons = () => {
  const classes = useStyles()

  return (
    <Fragment>
      {socialLinks.map((socialLink, index) => (
        <IconButton key={index} href={socialLink.link} target='_blank' rel='noreferrer' className={classes.link}>
          {<socialLink.icon />}
        </IconButton>
      ))}
    </Fragment>
  )
}

export default SocialIcons
