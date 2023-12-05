import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Home from "./components/Home/Home"
import Menu from "./components/Menu/Menu"
import Events from "./components/Events/Events"
import Story from "./components/Story/Story"
import Gallery from "./components/Gallery/Gallery"
import GalleryAddItem from './components/GalleryAddItem/GalleryAddItem';
import GalleryItemDetails from './components/GalleryItemDetails/GalleryItemDetails';
import GalleryItemEdit from './components/GalleryItemEdit/GalleryItemEdit';
import MyAccount from "./components/MyAccount/MyAccount";
import MyAccountGallery from "./components/MyAccountGallery/MyAccountGallery";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import NotFound from './components/NotFound/NotFound';
import EventDetails from './components/EventDetails/EventDetails';
import AuthGuard from './components/guards/AuthGuard';


function App() {
  
  return (
    <AuthProvider>

      <div id="ct_preloader" style={{ display: "none" }}></div>

      <Navigation />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Menu} element={<Menu />} />
        <Route path={Path.Events} element={<Events />} />
        <Route path={Path.EventDetails} element={<EventDetails />} />
        <Route path={Path.Story} element={<Story />} />
        <Route path={Path.Gallery} element={<Gallery />} />
        <Route element={<AuthGuard />}>
            <Route path={Path.GalleryAdd} element={<GalleryAddItem />} />
            <Route path={Path.GalleryItemEdit} element={<GalleryItemEdit />} />
            <Route path={Path.Logout} element={<Logout />} />
            <Route path={Path.MyAccountGallery} element={<MyAccountGallery />} />
        </Route>
        <Route path={Path.GalleryItemId} element={<GalleryItemDetails />} />
        <Route path={Path.MyAccount} element={<MyAccount />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Page404} element={<NotFound />} />
      </Routes>

      <Footer />

    </AuthProvider>
  )
}

export default App
