import './link.css'
import React, {useCallback, useEffect} from "react";
import {animated, useSpring} from '@react-spring/web';
import {Service, useService} from "./services";

export interface LinkProps {
  text: string
  service: Service
}

export const Link: React.FC<LinkProps> = ({text, service}) => {
  const serviceProps = useService(service)
  const [isAnimated, setIsAnimated] = React.useState(false)
  const triggerAnimation = useCallback(() => {
    setIsAnimated(true)
  }, [])
  const redirectToService = useCallback(() => {
    window.open(serviceProps.link, '_blank')
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

  return (
      <button className={"link-container"} onMouseEnter={triggerAnimation}
              onClick={redirectToService}>
        {text}
        <animated.img src={serviceProps.icon} style={iconStyle} className={"link-icon"}/>
      </button>)
}