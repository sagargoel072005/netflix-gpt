import React from 'react';
import Browse from './Browse';
import Signup from './Signup';
import MovieDetails from './MovieDetails';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
    
const appRouter = createBrowserRouter([

            {
                path: "/",
                element: <Signup />,
            },
            {
                path: "/browse",
                element: <Browse />,
            },
            {
              path: "/title/:id",
              element: <MovieDetails />,
            },
           
]);

  return (
    <div>
   <RouterProvider router={appRouter}/>
</div>
  );
}

export default Body;