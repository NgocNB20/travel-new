import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,BrowserRouter,
  Route,
  useLocation
} from 'react-router-dom';
import Footer from './components/common/Footer';
import Error from './pages/Error';
import Home from './pages/Home';
import SinglePlace from './pages/SinglePlace';  
import Header from './components/common/Header';
import Hotel from './pages/Hotels';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Places from './pages/Places';
import Blogs from './pages/Blogs';
import Tours from './pages/Tours';
import Vtours from './pages/Vtours';
import Restaurants from './pages/Restaurants';
import Agencies from './pages/Agencies';
import SingleBlog from './pages/SingleBlog';
import SingleTour from './pages/SingleTour';
import SingleRestaurant from './pages/SingleRestaurant';
import SingleHotel from './pages/SingleHotel';
import Login from './pages/Login';
 
 
function App() {
  console.log(window.location.pathname);
  return (
    <>
<BrowserRouter>
    <div className="App page-wrapper">
      
        {!window.location.pathname==="/vi/login"?<Header/>:""}

        <Routes>  
        <Route path="/vi" element={<Home />} />
        <Route path="/vi/places/" element={<Places />} />
        <Route path="/vi/places/detail/:id" element={<SinglePlace />} />
        <Route path="/vi/tours/" element={<Tours />} />
        <Route path="/vi/tours/detail/:id" element={<SingleTour />} />
        <Route path="/vi/blogs/" element={<Blogs />} />
        <Route path="/vi/blogs/detail/:id" element={<SingleBlog />} />
        <Route path="/vi/vtours/" element={<Vtours />} />
        <Route path="/vi/restaurants/" element={<Restaurants />} />
        <Route path="/vi/restaurants/detail/:id" element={<SingleRestaurant />} />
        <Route path="/vi/hotels/" element={<Hotel />} />
        <Route path="/vi/hotels/detail/:id" element={<SingleHotel />} />
        <Route path="/vi/agencies/" element={<Agencies />} />
        <Route path="/vi/login/" element={<Login />} /> 
        <Route path="*" element={<Error/>} />
        </Routes>
         
        {!window.location.pathname==="/vi/login"?<Footer />:""}          
    </div>
       
    </BrowserRouter>
     
   
    </>
    
  );
}

export default App;
