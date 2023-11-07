import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Location from "./components/Location/Location"
import Recommendations from "./components/Recommendations/Recommendations"
import Menu from "./components/Menu/Menu"
import Events from "./components/Events/Events"
import Story from "./components/Story/Story"
import Gallery from "./components/Gallery/Gallery"
import MyAccount from "./components/MyAccount/MyAccount"

import './assets/css/style.css'
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/flavours/bigsmokebbq/css/bigsmokebbq.css'
// import './assets/bootstrap/less/index.less'
// import './assets/less/bootstrap.less'
// import './assets/less/media-queries.less'
// import './assets/less/style.less'
// import './assets/less/variables.less'

function App() {
  return (
    <div className="preloader">
    
      <div id="ct_preloader" style={{ display: "none" }}></div>
      <Navigation />
      <Location />
      <Recommendations />
      <Menu />
      <Events />
      <Story />
      <Gallery />
      <MyAccount />
      <Footer />
    
    </div> 
  )
}

export default App
