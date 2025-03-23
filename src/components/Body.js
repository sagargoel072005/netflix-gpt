import React from 'react';
import Browse from './Browse';
import Signup from './Signup';
import { useDispatch } from 'react-redux';
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
           
]);



  return (
    <div>
   <RouterProvider router={appRouter}/>
</div>
  );
}

export default Body;