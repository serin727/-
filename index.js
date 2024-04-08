import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Button from'./components/ui/button.jsx'
import PostViewPage from './components/page/PostViewPage';
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='write' element={<PostWritePage/>}/>
        <Route path='post/:id' element={<PostViewPage/>}/>
    </Routes>
  </BrowserRouter>
);


