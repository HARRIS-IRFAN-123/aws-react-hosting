import React from 'react';
import UserTable from './components/UsersTable';
import './App.css'

function App() {
  const users = [
    { name: 'glass', email: 'glass@gmail.com', password: 123 },
    { name: 'water', email: 'water@gmail.com', password: 456 },
    { name: 'jug', email: 'jug@gmail.com', password : 789 },
    {name : 'bike', email : 'bike@gmail.com',password : 1011},
    {name : 'motor', email : 'motor@gmail.com',password : 985},
    {name : 'table', email : 'table@gmail.com', password : 456},
  ];

  return (
    <div>
      <h1>User List</h1>
      <UserTable users={users} />
    </div>
  );
}

export default App;
