import './links-page.css'
import '../../vars.css'
import React from "react";
import {Links} from "../Links";
import {Avatar} from "../avatar/Avatar";

export const LinksPage = () => {
  return <div className={"page"}>
    <Avatar/>
    <Links/>
  </div>
}