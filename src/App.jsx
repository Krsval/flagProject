import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import Home from './pages/Home';
import CountryPage from './pages/CountryPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home />}/>
    <Route path='/country' element={<CountryPage />} />
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
