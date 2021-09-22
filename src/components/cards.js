import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div  id="main" align="center">
      <img
        style={{marginTop: '210px'}}
        src="https://i.gifer.com/ZZ5H.gif"
        alt="Loading Please Wait..."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">{user.email}</p>
          <p>User ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;