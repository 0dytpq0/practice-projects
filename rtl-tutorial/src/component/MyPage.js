import React from 'react';

function MyPage({ user }) {
  return (
    <div>
      <div>
        <label htmlFor="username">이름</label>
        <input type="text" id="username" value="Tom" readOnly />
      </div>
      <div date-testid="my-div" />
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea type="text" id="profile"></textarea>
      </div>
    </div>
  );
}

export default MyPage;
