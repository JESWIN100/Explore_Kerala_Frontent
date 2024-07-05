import { createBrowserRouter, Navigate } from "react-router-dom";

import About from "./Pages/About";
import ContactForm from "./Pages/Contact";
import DetailsPage from "./Pages/DetailsPage";
import Home from "./Pages/Home";
import SignupForm from './Components/SignupForm;';
import AllRounder from './Pages/AllRounder';
import NotFound from "./layout/NotFound";
import LoginPage from "./Pages/LoginPage";
import useAuthStore from "./store/authStore";


const PrivateRoute = ({ children }) => {
    const { isAuth } = useAuthStore();
    return isAuth ? children : <Navigate to='/login' />;
}

const router = createBrowserRouter([
    {
        path: '/',
        element:<PrivateRoute><AllRounder /></PrivateRoute> 
    },
    {
        path: '/home',
        element: <PrivateRoute><Home /></PrivateRoute>
    },
    {
        path: '/about',
        element: <PrivateRoute><About /></PrivateRoute>
    },
    {
        path: '/contact',
        element: <PrivateRoute><ContactForm /></PrivateRoute>
    },
    {
        path: '/detailspage/:id',
        element: <PrivateRoute><DetailsPage /></PrivateRoute>
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/signup',
        element: <SignupForm />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
 