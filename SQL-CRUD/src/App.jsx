import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from "./Components/Home";
import { Create } from "./Components/Create";

const App = () => {

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/create",
    element: <Create />
  }

 ])


  return(
    <RouterProvider router={router} />
  )
}

export default App;