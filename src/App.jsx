import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import allCountriesLoader from "./util/allCountriesLoader";
import singleCountryLoader from "./util/singleCountryLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={allCountriesLoader} />
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
