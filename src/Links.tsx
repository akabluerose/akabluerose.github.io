import React from "react";
import './links.css'

export const Links: React.FC<any> = ({children}) => {
  return <div className={"links-container"}>
    {children}
  </div>
}