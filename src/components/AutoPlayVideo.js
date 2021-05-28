import React, { useRef, useEffect } from 'react'

// Component to fix longstanding known issue with React
// ('muted' attribute not showing up in rendered DOM element)
// https://github.com/facebook/react/issues/10389
const AutoPlayVideo = ({ src, ...props}) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current) return

    videoRef.current.defaultMuted = true
    videoRef.current.muted = true
  })

  return (
    <video ref={videoRef} autoPlay playsInline loop {...props}>
      <source src={src} type='video/mp4' />
    </video>
  )
}

export default AutoPlayVideo
