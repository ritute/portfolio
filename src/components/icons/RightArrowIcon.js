import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

const RightArrowIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="m15.2931 6.70711c-.3905-.39053-.3905-1.02369 0-1.41422.3906-.39052 1.0237-.39052 1.4143 0l5.9999 6.00001c.3906.3905.3906 1.0237 0 1.4142l-5.9999 6c-.3906.3905-1.0237.3905-1.4143 0-.3905-.3905-.3905-1.0237 0-1.4142l4.2929-4.2929h-17.57497c-.55838 0-1.01103-.4477-1.01103-1s.45265-1 1.01103-1h17.57497z" fill={props.color}/>
    </SvgIcon>
    )
}

export default RightArrowIcon
