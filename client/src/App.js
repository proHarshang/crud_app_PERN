import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateUser from './pages/CreateUsers';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users/create' element={<CreateUser />} />
      <Route path='/users/update/:id' element={<UpdateUser />} />
      <Route path='/users/delete/:name/:id' element={<DeleteUser />} />
    </Routes>
  );
};

export default App;
