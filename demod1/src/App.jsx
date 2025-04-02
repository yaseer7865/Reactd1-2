import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './Component/Layout';
import Error from './Component/Error';
import Home from './Component/Home' ;
import About from './Component/About';
import Contact from './Component/Contact';
import'./component/Style.css'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
 const path=createBrowserRouter([{
      path:'/',
      element:<Layout/>,
      errorElement:<Error/>,

      children:[
{
  index:true,
  element:<Home/>
},
{
    path:'About',
    element:<About />

},
{
    path:'Contact',
    element:<Contact/>
}
 ]
}

])

 return (
     <>
       <RouterProvider router={path} />
    </>

   
  )
}

export default App
