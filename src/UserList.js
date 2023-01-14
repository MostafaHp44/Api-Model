import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

import axios from 'axios';


const UserList=()=> {
  let y=0;
  const [User,SetUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((ress) => {
        SetUser(ress.data);
      })
      .catch((errorr) => console.log(errorr));
  }, []);
  return (

    <div>
    <Table striped bordered hover variant="dark">
        <thead>
          <tr key={y++}>
            <th>ID</th>
            <th>Full-Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody >
          {User.map((user) => (
            <tr key={y++}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
}

export default UserList;
