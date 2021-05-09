import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { Zoom } from 'react-awesome-reveal'

const useStyles = makeStyles(theme => ({
  sectionCards: {
    position: 'relative',
    padding: theme.spacing(6, 0),
    '&::after': {
      position: 'absolute',
      top: 0,
      right: '-100px',
      width: '440px',
      height: '440px',
      backgroundColor: ({circleColor}) => circleColor,
      borderRadius: '50%',
      content: "' '",
      display: 'inline-block',
      zIndex: '-1'
    },
  },
  leftCircle: {
    '&::after': {
      left: '-100px',
    }
  },
  sectionCard: {
    height: '100%',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
}))

const SectionCards = (props) => {
  const classes = useStyles(props)
  const { title, data, leftCircle } = props

  return (
    <Zoom>
      <div className={`${classes.sectionCards} ${leftCircle && classes.leftCircle}`}>
        <Typography variant='subtitle1' align='center' gutterBottom className={classes.title}>{title}</Typography>
        <Grid container spacing={4} alignItems='stretch'>
          {data.map((data, index) => (
            <Grid item key={index} xs={12} sm={6} md>
              <Card className={classes.sectionCard}>
                <CardContent>
                  <Typography variant='subtitle2' gutterBottom>{data.title}</Typography>
                  <ul>
                    {data.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Zoom>
  )
}

SectionCards.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string)
  })),
  leftCircle: PropTypes.bool,
  circleColor: PropTypes.string,
}

SectionCards.defaultProps = {
  leftCircle: false,
  circleColor: '#F1E4FF',
}

export default SectionCards
