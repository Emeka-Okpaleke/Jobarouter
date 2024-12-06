import { 
  Route,  
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import RootLayout from "./layouts/RootLayouts";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareerLayout from "./layouts/CareerLayout";
import Careers from "./pages/careers/Careers";
import { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { CareerDetailsLoader } from "./pages/careers/CareerDetails";
import { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/> 
      </Route>
      <Route path="career" element ={ <CareerLayout/>} errorElement = {<CareerError/>}>
        <Route 
        index 
        element={<Careers />} 
        loader={careersLoader}
        />
        <Route
          path=":id"
          element = {<CareerDetails/>}  
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
  <RouterProvider router={router}/>

  );
}

export default App
