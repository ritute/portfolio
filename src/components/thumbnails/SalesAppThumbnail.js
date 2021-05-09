import React from 'react'
import {
  makeStyles,
} from '@material-ui/core'
import { Zoom } from 'react-awesome-reveal'

import salesAppVideo from 'videos/sales-app-proto-video.mp4'
import tabletImage from 'images/sales-app/tablet.svg'

const useStyles = makeStyles(theme => ({
  videoContainer: {
    backgroundImage: `url(${tabletImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 0,
    paddingTop: 'calc(511 / 675 * 100%)',
    position: 'relative',
  },
  // frame width: 539 / 675, left: 67
  // frame height: 375 / 511, top: 68
  video: {
    position: 'absolute',
    top: 'calc((67 - 2) / 511 * 100%)',
    left: 'calc((68 - 2) / 675 * 100%)',
    width: 'calc((539 + 4) / 675 * 100%)',
    height: 'calc((375 + 4) / 511 * 100%)',
  },
}))

const SalesAppThumbnail = () => {
  const classes = useStyles()

  return (
    <Zoom className={classes.videoContainer}>
      <video className={classes.video} autoPlay muted loop playsInline>
        <source src={salesAppVideo} type='video/mp4' />
      </video>
    </Zoom>
  )
}

export default SalesAppThumbnail
