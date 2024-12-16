import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Home, Shop, ErrorPage, Checkout } from './Pages'
import Layout from "./Layout/Layout";



const routes = createRoutesFromElements(
    <Route path="/ShopEase" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='Shop' element={<Shop />} />
        <Route path="Checkout" element={<Checkout />} />

    </Route>
)

const router = createBrowserRouter(routes);

export default router