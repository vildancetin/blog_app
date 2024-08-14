import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import BlogPosts from "../pages/BlogPosts";
import BlogDetail from "../pages/BlogDetail";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/blogs" element={<PrivateRouter />}>
          <Route path="posts" element={<BlogPosts />} />

          <Route path="posts/:postId" element={<BlogDetail />} />
        </Route>
        <Route path="/users" element={<PrivateRouter />}>
          <Route path="" element={<Users />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
