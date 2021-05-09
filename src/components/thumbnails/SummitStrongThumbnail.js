import React from 'react'
import {
  makeStyles,
  CardMedia,
} from '@material-ui/core'
import { Zoom } from 'react-awesome-reveal'

import thumbnail from 'images/summit-strong/summit-strong-thumbnail.jpg'

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: 'calc(514 / 1129 * 100%)',
  },
}))

const SummitStrongThumbnail = () => {
  const classes = useStyles()

  return (
    <Zoom>
      <CardMedia
        className={classes.media}
        image={thumbnail}
        title='Summit Strong'
      />
    </Zoom>
  )
}

export default SummitStrongThumbnail
