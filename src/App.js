
import { Provider } from 'react-redux';
import './App.scss';
import Body from './components/Body';
import appStore from './utils/appStore';
import React from "react";
import Login from "./components/Login";
import Browse from "./components/Browse";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import GptSearch from "./components/GptSearch";
import SearchResultCard from './components/SearchResultCard';

function App() {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Body/>,
      children: [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path : "/gpt-search",
      element : <GptSearch/>
    },
  ]
  }]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </Provider>
  );
}

export default App;
