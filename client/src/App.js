import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Bouncer } from "./utils";
import { CatechesPage, MessagesPage, TripsPage } from "./pages";
import "./App.css";
import { DoneTrip, OnTrip } from "./components";

// const Test = () => <h1>Test</h1>;

const router = createBrowserRouter([
  { path: "/", element: <Bouncer /> },
  { path: "/trips", element: <TripsPage /> },
  { path: "/new-trip", element: <OnTrip /> },
  { path: "/done-trip", element: <DoneTrip />},
  { path: "/catches", element: <CatechesPage /> },
  { path: "/messages", element: <MessagesPage />}
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
