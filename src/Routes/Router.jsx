import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {index: true, Component: Home},
            {
                path: 'all-books',
                Component: AllBooks
            },
            {
                path: 'add-book',
                Component: AddBook
            },
            {
                path: 'myBooks',
                Component: MyBooks
            },
            {
                path: 'book-details/:id',
                Component: BookDetails
            }
        ]
    }
])

export default router;