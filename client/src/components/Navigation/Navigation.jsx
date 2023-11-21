import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

import styles from './Navigation.module.css'

export default function Navigation() {
  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext);

  return (
    <div id="undefined-sticky-wrapper" className="sticky-wrapper">
      <nav className="navbar navbar-default full-sticky-menu" role="navigation">
        <div className="inner">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle btn btn-primary"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="text-center">
                <p className="address">
                  Foodtruck - Big Smoke BBQ
                </p>
              </div>
              <a
                className="navbar-brand"
                href="/"
                data-width={282}
                data-top={40}
                style={{
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-141px",
                  top: 40
                }}
              >
                <img
                  alt=" "
                  src="./src/assets/flavours/bigsmokebbq/images/content/logo.png"
                />
              </a>
              <a
                className="small-brand"
                href="/"
                style={{
                  display: "none",
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-87.5px",
                  top: 24
                }}
                data-width={175}
                data-top={24}
              >
                <img
                  alt=" "
                  src="./src/assets/flavours/bigsmokebbq/images/content/logo-small.png"
                />
              </a>

              <ul className={styles.regBtn}>
                {!isAuthenticated && (
                  <>
                  <li className={styles.regLi}>
                  <Link to={Path.Register}>Register</Link>
                  </li>
                  <li className={styles.regLi}>
                    <Link to={Path.Login}>Login</Link>
                  </li>
                  </>
                )}

                {isAuthenticated && (
                  <>
                  <li className={styles.regLi}>
                    <Link to={Path.Logout}>Logout</Link>
                  </li>
                  <span>| {username}</span>
                  </>
                )}

              </ul>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul
                className="nav navbar-nav pull-left"
                data-type="margin-top"
                data-pos={100}
                style={{ marginTop: 100 }}
              >
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
              </ul>
              <ul
                className="nav navbar-nav pull-right"
                data-type="margin-top"
                data-pos={100}
                style={{ marginTop: 100 }}
              >
                <li>
                  <Link to="/story">Story</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/myaccount">Account</Link>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* / container */}
          <div className="btm" />
        </div>
      </nav>
    </div>

  )
}



