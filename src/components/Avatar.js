import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
} from '@material-ui/core'

import avatarImage from 'images/avatar.jpg'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundImage: `url(${avatarImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%',
  },
  avatarSmall: {
    height: '55px',
    width: '55px',
  },
  avatarLarge: {
    height: '85px',
    width: '85px',
  },
}))

const Avatar = ({ size, className, ...rest }) => {
  const classes = useStyles()

  return (
    <div {...rest} className={`${classes.avatar}
      ${size === 'small' && classes.avatarSmall}
      ${size === 'large' && classes.avatarLarge} ${className}` }>
    </div>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'large'])
}

Avatar.defaultProps = {
  size: 'small'
}

export default Avatar
