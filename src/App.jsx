import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalState from './context/globalState';
import Intro from './pages/intro'
import Scalability from './pages/scalability'
import PostCoordinator from './pages/post-coordinator'
import Modules from './pages/modules'
import Module5 from './pages/module5'
import Module51 from './pages/module5.1'
import Module511 from './pages/module5.1.1'
import Module512 from './pages/module5.1.2'
import Module1 from './pages/module1'
import Module2 from './pages/module2'
import Module3 from './pages/module3'
import Module4 from './pages/module4'
import Modularity from './pages/modularity'
import Glossary from './pages/glossary'
import Future from './pages/future'
import Conclusion from './pages/conclusion'
import './styles/index.scss'

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route path={'/scalability'} element={<Scalability />} />
          <Route path={'/post-coordinator'} element={<PostCoordinator />} />
          <Route path={'/modules'} element={<Modules />} />
          <Route path={'/module5'} element={<Module5 />} />
          <Route path={'/module5.1'} element={<Module51 />} />
          <Route path={'/module5.1.1'} element={<Module511 />} />
          <Route path={'/module5.1.2'} element={<Module512 />} />
          <Route path={'/module1'} element={<Module1 />} />
          <Route path={'/module2'} element={<Module2 />} />
          <Route path={'/module3'} element={<Module3 />} />
          <Route path={'/module4'} element={<Module4 />} />
          <Route path={'/modularity'} element={<Modularity />} />
          <Route path={'/glossary'} element={<Glossary />} />
          <Route path={'/future'} element={<Future />} />
          <Route path={'/conclusion'} element={<Conclusion />} />
          <Route index element={<Intro />} />
          <Route path='*' element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  )
}

export default App
