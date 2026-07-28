import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Details from './pages/details'
import NotFound from './pages/notFound'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
