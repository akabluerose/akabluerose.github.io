import React, {useEffect, useState} from "react";
import './links.css'
import {Link} from "./Link";
import {animated, config, useSpring} from "@react-spring/web";

export const Links = () => {
  const [isAnimated, setIsAnimated] = useState(true)

  const [linksAnimation, _] = useSpring(() => ({
    from: {opacity: 0, transform: 'translateY(14rem)'},
    to: {opacity: 1, transform: 'translateY(0)'},
    config: config.gentle,
    delay: 800,
    onRest: () => setIsAnimated(false)
  }), [])

  useEffect(() => {
    if (!isAnimated) {
      document.body.classList.remove("prevent-scrolling")
    }
  }, [isAnimated])

  return <animated.div className={"links-container"} style={linksAnimation}>
    <Link service={"apple"} text={"Apple Music"}/>
    <Link service={"spotify"} text={"Spotify"}/>
    <Link service={"youtube"} text={"Youtube"}/>
    <Link service={"latest"} text={"\"No Molestar\" ft. La Maldad"}/>
  </animated.div>
}