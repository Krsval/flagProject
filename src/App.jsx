import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import allCountriesLoader from "./util/allCountriesLoader";
import singleCountryLoader from "./util/singleCountryLoader";
import PageNotFound from "./pages/PageNotFound";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={allCountriesLoader} />
      <Route
        path="/country/:countryCode"
        element={<CountryPage />}
        loader={singleCountryLoader}
        errorElement={<PageNotFound />}
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
