import React, { useState, useEffect } from 'react';

const UserDirectory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ searchTerm, setSearchTerm ] = useState('');



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load user data');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

const filteredData = data.filter(user=>[user.name,user.username,user.email,user.address?.city].some(field=> typeof field === 'string' && field.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <div style={{ padding: "20px" }}>
      
    <input
    type="text"
    placeholder="Search by name,city or email"
    value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)}
    style={{marginBottom: "20px", padding: "10px", width: "100%", boxSizing: "border-box"}}
    
    
    />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Username</th>
              <th>Email</th><th>Phone</th><th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td><td>{user.name}</td><td>{user.username}</td>
                <td>{user.email}</td><td>{user.phone}</td><td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDirectory;
