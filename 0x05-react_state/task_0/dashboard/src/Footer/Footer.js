import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
//refactoring
function Footer() {
  return (
    <>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </>
  );
}

export default Footer;
