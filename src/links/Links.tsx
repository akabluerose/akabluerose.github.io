import React from "react";
import './links.css'
import {Link} from "./Link";

export const Links = () => {
  return <div className={"links-container"}>
    <Link service={"apple"} text={"Apple Music"}/>
    <Link service={"spotify"} text={"Spotify"}/>
    <Link service={"youtube"} text={"Youtube"}/>
    <Link service={"latest"} text={"\"No Molestar\" ft. La Maldad"}/>
  </div>
}