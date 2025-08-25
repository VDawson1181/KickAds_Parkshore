import React from 'react';

interface UserCardProps {
  name: string;
  age: number;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, email }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;