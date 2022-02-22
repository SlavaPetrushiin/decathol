import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import Reports from './pages/Reports/Reports';
import Processing from './pages/Processing/Processing';
import Layout from './comonents/Layout/Layout';


function App() {
  return (

    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Processing />} />
          <Route path='reports' element={<Reports />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
