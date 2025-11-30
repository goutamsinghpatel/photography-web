
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Baby_shoot from './pages/Baby_shoot'
import Wedding_shoot from './pages/Wedding_shoot'
import Reels from './pages/Reels'
import PreWedding from './pages/PreWedding'
import Modeling from './pages/Modeling'
import Login from './pages/Login'
  import { ToastContainer} from 'react-toastify';
import UserImages from './pages/UserImages'
import AllUsers from './pages/AllUsers'
import UploadImage from './pages/UploadImage'
import UserImagesPage from './pages/UserImagesPage'
import BookingPage from './pages/BookingPage'
function App() {
  

  return (
<>
<ToastContainer/>
 <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<Home/>}/>
    <Route path="/wedding-shoot" element={<Wedding_shoot/>}/>
  <Route path="/preWedding" element={<PreWedding/>}/>
  <Route path="/reels" element={<Reels/>}/>
  <Route path="/Baby-shoot" element={<Baby_shoot/>}/>
    <Route path="/modeling" element={<Modeling/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/images" element={<UserImages/>}/>
<Route path="/All-users" element={<AllUsers/>}/>
<Route path="/upload-image" element={<UploadImage />} />
<Route path="/user-images" element={<UserImagesPage />} />
<Route path="Booking" element={<BookingPage/>}/>


</Routes> 


    </>
  )
}

export default App
