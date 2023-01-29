import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Write from "./Pages/write/Write";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import ErrorPage from "./Pages/error-page/ErrorPage";
import Layout from "./Layout/Layout";
import Singlepost from "./Pages/singlepost/Singlepost";
import ProfileSetings from "./Pages/profile-setings/ProfileSetings";
import Blog from "./Pages/blog/Blog";
import { useContext } from "react";
import { Context } from "./context/Context";
import ProtectRoute from "./utils/ProtectRouter";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/post/:postId" element={<Singlepost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/write"
          element={
            <ProtectRoute>
              <Write />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/setings"
          element={
            <ProtectRoute>
              <ProfileSetings />
            </ProtectRoute>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Route>
  )
);

function App() {
  const { user } = useContext(Context);
  console.log(user);

  return <RouterProvider router={router} />;
}

export default App;
