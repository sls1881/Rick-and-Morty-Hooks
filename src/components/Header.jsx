import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from './app/App.css'

export default function Header() {
    return (
        <div>
          <nav className={styles.nav}>
              <NavLink exact activeClassName="link" to="/">
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="link"
                to="/characters"
              >
                Characters
              </NavLink>
          </nav>
        </div>
      );
}

