import React from "react";
import './links.css'
import {Link} from "./Link";

export const Links = () => {
  return <div className={"links-container"}>
    <Link service={"apple"} text={"Apple Music"}/>
  </div>
}