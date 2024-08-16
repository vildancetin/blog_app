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
import PrivateRouter from "./PrivateRouter";
import Layout from "../components/Layout";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;
