import React from 'react';
import { HashRouter, Routes, Route } from "react-router";
import Layout from './Layout/Layout';
import HomePage from "./Home/HomePage"
import './App.css';

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="Home" element={<HomePage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
  );
}

export default App;