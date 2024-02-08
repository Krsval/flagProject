import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import CountryLayout from './layouts/CountryLayout'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
  </Route>
))

function App() {

  return (
    <>
      <RootLayout />
    </>
  )
}

export default App
