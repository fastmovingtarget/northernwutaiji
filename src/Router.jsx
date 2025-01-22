import React from 'react';
import { HashRouter, Routes, Route } from "react-router";
import Layout from './Layout/Layout';
import HomePage from "./Home/HomePage"
import Forms from './Forms/Forms';
//import Applications from './FormApplications/Applications';
import QiGong from './QiGong/QiGong';
import Information from './TaijiInfo/Information';
import Foundations from './KungFuFoundations/Foundations';
import './App.css';

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="Home" element={<HomePage />} />
                        <Route path="Forms" element={<Forms />} /> 
                        {/*
                        <Route path="Applications" element={<Applications />} />
                         */}
                        <Route path="QiGong" element={<QiGong />} />
                        <Route path="Information" element={<Information />} />
                        <Route path="Foundations" element={<Foundations />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
  );
}

export default App;