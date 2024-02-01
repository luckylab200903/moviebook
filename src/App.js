import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./components/Movie";
import BookTicket from "./components/BookTicket";
import Confirmation from "./components/Confirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/:id",
    element: <Movie />,
  },
  {
    path: "/bookticket/:id",
    element: <BookTicket />,
  },
  {
    path: "/bookticket/confirmation",
    element: <Confirmation />,
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <div className="">
        <Body />
      </div>
    </RouterProvider>
  );
}

export default App;
