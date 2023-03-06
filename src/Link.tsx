import './link.css'
import React, {useCallback, useEffect} from "react";
import AppleMusicIcon from './apple-music.png'
import {animated, useSpring} from '@react-spring/web';

const APPLE_SERVICE = 'apple'
type Service = typeof APPLE_SERVICE

export interface LinkProps {
  text: string
  service: Service
}

const serviceIcons: Map<Service, string> = new Map([
  ['apple', AppleMusicIcon]
])

export const Link: React.FC<LinkProps> = ({text, service}) => {
  const serviceIcon = serviceIcons.get(service)
  const [isAnimated, setIsAnimated] = React.useState(false)
  const triggerAnimation = useCallback(() => {
    setIsAnimated(true)
  }, [])
  const iconStyle = useSpring({
    transform: isAnimated ? `rotate(30deg) scale(1.1)` : `rotate(0deg) scale(1)`,
    config: {
      tension: 200,
      friction: 10
    }
  })

  useEffect(() => {
    if (!isAnimated) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsAnimated(false)
    }, 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [isAnimated])

  return (<div className={"link-container"} onMouseEnter={() => triggerAnimation()}>
    {text}
    <animated.img src={serviceIcon} style={iconStyle}/>
  </div>)
}