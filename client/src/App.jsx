import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Recommendations from "./components/Recommendations/Recommendations"
import Menu from "./components/Menu/Menu"
import Events from "./components/Events/Events"
import Story from "./components/Story/Story"
import Gallery from "./components/Gallery/Gallery"
import GalleryAddItem from './components/GalleryAddItem/GalleryAddItem';
import GalleryItemDetails from './components/GalleryItemDetails/GalleryItemDetails';
import MyAccount from "./components/MyAccount/MyAccount"
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import UserAccountDetails from "./components/UserAccountDetails/UserAccountDetails"

// import './assets/css/style.css'
// import './assets/css/bootstrap.css'
// import './assets/css/font-awesome.css'
// import './assets/flavours/bigsmokebbq/css/bigsmokebbq.css'


// import './assets/bootstrap/less/index.less'
// import './assets/less/bootstrap.less'
// import './assets/less/media-queries.less'
// import './assets/less/style.less'
// import './assets/less/variables.less'

function App() {
  return (
    <>
      <div id="ct_preloader" style={{ display: "none" }}></div>

      <Navigation />

      <Routes>
        <Route path="/" element={<Recommendations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/add" element={<GalleryAddItem />} />
        <Route path="/gallery/:id" element={<GalleryItemDetails />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount/:id" element={<UserAccountDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />


    </>
  )
}

export default App
