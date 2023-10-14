import React, { useState, useEffect } from "react";
import axios from "axios";

const DummyData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setData(response.data.users); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dummy Data</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile pic</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>ID</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img src={user.avatar} alt="Profile pic" width="50" height="50" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyData;
