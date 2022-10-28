import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="navigation_links">
            <Link to="/">HOME</Link>
            <br />
            <Link to="/about">AFFIRMATION</Link>
            <br/>
            <Link to="/sign">HOROSCOPE</Link>
            <br/>
            <Link to="/mashup">MASHUP</Link>
            </nav>
    );
}

