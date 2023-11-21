import { Routes, Route } from 'react-router-dom';

// import * as authService from './services/authService';
// import AuthContext from './contexts/authContext';
import Path from './paths';

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
        <Route path={Path.Home} element={<Recommendations />} />
        <Route path={Path.Menu} element={<Menu />} />
        <Route path={Path.Events} element={<Events />} />
        <Route path={Path.Story} element={<Story />} />
        <Route path={Path.Gallery} element={<Gallery />} />
        <Route path={Path.GalleryAdd} element={<GalleryAddItem />} />
        <Route path={Path.GalleryItemId} element={<GalleryItemDetails />} />
        <Route path={Path.MyAccount} element={<MyAccount />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Logout} element={<Logout />} />
        <Route path={Path.AccountDetails} element={<UserAccountDetails />} />
        <Route path={Path.Page404} element={<NotFound />} />
      </Routes>

      <Footer />


    </>
  )
}

export default App
