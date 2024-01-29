import React from 'react';
import { useState, useEffect } from 'react';

function UserList({ users }) {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
  }, []);
  return (
    <>
      {showTitle && <h1>사용자 목록</h1>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
