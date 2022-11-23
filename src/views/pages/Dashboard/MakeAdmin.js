import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser(data);
      });
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <h2>make admin : {user.length}</h2>
    </div>
  );
};

export default MakeAdmin;
