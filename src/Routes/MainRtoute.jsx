import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import AddRooms from "../Pages/AddRooms";
import RoomDetails from "../components/RoomDetails";
import axios from "axios";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/rooms",
        element:<Rooms></Rooms>,
       
      },
      {
        path:"/mybooking",
        element:<MyBooking></MyBooking>
      },
      {
        path:"/addroom",
        element:<AddRooms></AddRooms>
      },
      {
        path:"/room/:id",
        element:<RoomDetails></RoomDetails>,
        loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/singleroom/${params.id}`)
      },
    ]
  },
]);
export default router