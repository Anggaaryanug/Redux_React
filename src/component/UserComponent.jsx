import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';

const UserComponent = () => {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUser());
  }, []); 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData || userData.length === 0) {
    
    return <div>No user data found.</div>;
  }

  
  console.log(userData)
 
  return (
    <div>
      <h2>User Details</h2>
      {userData.map((item) => (
        <div key={item.id}>
          <span>Name: {item.name}</span>
          <span> - </span>
          <span>Email: {item.email}</span>
        </div>
      ))}
    </div>
    
  );

};

export default UserComponent;
