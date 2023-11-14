import { Link } from 'react-router-dom';

import styles from './Navigation.module.css'

export default function Navigation() {
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
              <a className="navbar-brand" href="/" data-width={282} data-top={40}>
                <img
                  src="./src/assets/flavours/bigsmokebbq/images/content/logo.png"
                  alt=" "
                />
              </a>
              <a
                className="small-brand"
                href="/"
                style={{ display: "none" }}
                data-width={175}
                data-top={24}
              >
                <img
                  src="./src/assets/flavours/bigsmokebbq/images/content/logo-small.png"
                  alt=" "
                />
              </a>

              <ul className={styles.regBtn}>
                <li className={styles.regLi}>
                  <Link to="/register">Register</Link>
                </li>
                <li className={styles.regLi}>
                  <Link to="/login">Login</Link>
                </li>
                <li className={styles.regLi}>
                  <Link to="/logout">Logout</Link>
                </li>

              </ul>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul
                className="nav navbar-nav pull-left"
                data-type="margin-top"
                data-pos={100}
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
              >
                <li>
                  <Link to="/story">Story</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/myaccount">My Account</Link>
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