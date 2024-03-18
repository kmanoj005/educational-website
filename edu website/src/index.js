import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About_Us from './pages/About_Us';
import Contact_Us from './pages/Contact_Us';
import Team from './pages/Team';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';


let route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About_Us/>
  },
  {
    path:"/contact",
    element: <Contact_Us/>
  },
  {
    path:"/team",
    element: <Team/>
  },
  {
    path:"/courses",
    element: <Courses/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);


reportWebVitals();
