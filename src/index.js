import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./layout/header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./layout/footer";
import { Container } from 'react-bootstrap';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Single from './single';
import Basic from './layout/basic';

const feather = require("feather-icons");

setTimeout(() => {
    feather.replace();
  }, 1000);

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                element: (
                    <div className="col-md-8">
                        <div>
                            <StrictMode>
                                <Container fluid>
                                    <div className="text-center mb-3 color-text">
                                        <br></br><h1>BIENVENIDO A NUESTRO SITIO WEB</h1>
                                    </div>
                                </Container>
                                <Header />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <Main />
                                        </div>
                                        <div className="col-md-4">
                                            <Container fluid>
                                                <div className="text-center mb-3 color-t">
                                                    <br></br><h1>Registrate</h1>
                                                </div>
                                            </Container>
                                            <Aside />
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </StrictMode>
                        </div>
                    </div>
                ),
            },
        ],
    },
    {
        path: "detalle/:slug",
        element: <Single />,
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);



    

