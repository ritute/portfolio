import React from 'react'
import {
  makeStyles,
} from '@material-ui/core'

const discoverIcon = 'https://cdn.lordicon.com/msoeawqm.json'
const ideateIcon = 'https://cdn.lordicon.com/puvaffet.json'
const designIcon = 'https://cdn.lordicon.com/joeivjls.json'
const prototypeIcon = 'https://cdn.lordicon.com/qhgmphtg.json'
const developIcon = 'https://cdn.lordicon.com/nobciafz.json'
const learningsIcon = 'https://cdn.lordicon.com/wxnxiano.json'
const smileIcon = 'https://cdn.lordicon.com/pithnlch.json'

const useStyles = makeStyles(theme => ({
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
}))

const LordIcon = ({ icon, primaryColor, secondaryColor, ...props }) => {
  const classes = useStyles()
  const primary = primaryColor || '#545454'
  const secondary = secondaryColor || '#2ec5ce'

  return (
    <div className={classes.icon} {...props}>
      <lord-icon
        src={icon}
        trigger='loop'
        colors={`primary:${primary},secondary:${secondary}`}
        style={{width:'52px', height:'52px'}}>
      </lord-icon>
    </div>
  )
}

const DiscoverIcon  = (props) => <LordIcon icon={discoverIcon} {...props} />
const IdeateIcon    = (props) => <LordIcon icon={ideateIcon} {...props} />
const DesignIcon    = (props) => <LordIcon icon={designIcon} {...props} />
const PrototypeIcon = (props) => <LordIcon icon={prototypeIcon} {...props} />
const DevelopIcon   = (props) => <LordIcon icon={developIcon} {...props} />
const LearningsIcon = (props) => <LordIcon icon={learningsIcon} {...props} />
const SmileIcon     = (props) => <LordIcon icon={smileIcon} {...props} />

export {
  DiscoverIcon,
  IdeateIcon,
  DesignIcon,
  PrototypeIcon,
  DevelopIcon,
  LearningsIcon,
  SmileIcon,
}
