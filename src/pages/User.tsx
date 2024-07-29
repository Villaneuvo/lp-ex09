import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/User.css";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const results = users.map((user) => {
    return (
      <div key={user.id}>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        </table>
      </div>
    );
  });

  return <>{results}</>;
}

export default User;
