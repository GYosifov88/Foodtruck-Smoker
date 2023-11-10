import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
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
                Big Smoke BBQ - Atlantic Avenue 1234, New York, +66 87 65 43 21
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
            <a
              href="tel:66-87-65-43-21"
              className="phoneIcon"
              style={{ display: "none" }}
            >
              +66 87 65 43 21
            </a>
            <a
              href="http://goo.gl/maps/IUzKJ"
              className="locationIcon"
              target="_blank"
              style={{ display: "none" }}
            >
              http://goo.gl/maps/IUzKJ
            </a>
            <ul className="smallSocials">
              <li className="fb">
                <a href="#">
                  <img src="./src/assets/images/smallsocial-fb.png" alt="Facebook" />
                </a>
              </li>
              <li className="tw">
                <a href="#">
                  <img src="./src/assets/images/smallsocial-tw.png" alt="Twitter" />
                </a>
              </li>
              <li className="gg">
                <a href="#">
                  <img src="./src/assets/images/smallsocial-gg.png" alt="Google+" />
                </a>
              </li>
              <li className="rss">
                <a href="#">
                  <img src="./src/assets/images/smallsocial-rss.png" alt="RSS" />
                </a>
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

  )
}