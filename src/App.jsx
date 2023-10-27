import Product from "./components/Product"
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Cart from "./components/Cart"
import Navigation from "./components/Navigation"
import ProductDetail from "./components/ProductDetail"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Navigation />}>
      <Route index element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Route>
  ))

  return (
    <div className="container-fluid">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
