
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Baby_shoot from './pages/Baby_shoot'
import Wedding_shoot from './pages/Wedding_shoot'
import Reels from './pages/Reels'
import PreWedding from './pages/PreWedding'
import Modeling from './pages/Modeling'

function App() {
  

  return (
<>

 <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<Home/>}/>
    <Route path="/wedding-shoot" element={<Wedding_shoot/>}/>
  <Route path="/preWedding" element={<PreWedding/>}/>
  <Route path="/reels" element={<Reels/>}/>
  <Route path="/Baby-shoot" element={<Baby_shoot/>}/>
    <Route path="/modeling" element={<Modeling/>}/>


</Routes> 


    </>
  )
}

export default App
