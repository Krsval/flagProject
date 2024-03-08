import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomeLayout from "./layouts/HomeLayout";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import allCountriesLoader from "./util/allCountriesLoader";
import singleCountryLoader from "./util/singleCountryLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} loader={allCountriesLoader} />
      </Route>
      <Route
        path="/country/:countryCode"
        element={<CountryPage />}
        loader={singleCountryLoader}
      />
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
