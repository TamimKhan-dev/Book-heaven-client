import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";
import BookDetails from "../pages/BookDetails";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {path: '/', Component: Home},
            {
                path: 'all-books',
                Component: AllBooks
            },
            {
                path: 'add-book',
                element: <PrivateRoute><AddBook/></PrivateRoute>
            },
            {
                path: 'myBooks',
                element: <PrivateRoute><MyBooks/></PrivateRoute>
            },
            {
                path: 'book-details/:id',
                Component: BookDetails
            },
            {
                path: 'login',
                Component: LoginPage
            },
            {
                path: 'register',
                Component: RegisterPage
            }
        ]
    }
])

export default router;