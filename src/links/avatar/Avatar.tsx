import {animated, config, easings, useSpring} from '@react-spring/web'
import AvatarIcon from '../../assets/avatar2.png'
import './avatar.scss'
import React from "react";

export const Avatar = () => {
  const [avatarAnimation, _] = useSpring(() => ({
    from: {opacity: 0, transform: 'translateY(-7rem)'},
    to: {opacity: 1, transform: 'translateY(0)'},
    config: config.gentle,
    delay: 400
  }), [])

  return (
      <animated.div className={"avatar-container"} style={avatarAnimation}>
        <img alt="avatar" src={AvatarIcon}/>
        <span>AKA BLUEROSE</span>
      </animated.div>
  )
}