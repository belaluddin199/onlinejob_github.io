
import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  fullName: string;
  username: string;
  bkashNumber: string;
  id: number;
}

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  findUserByUsername: (username: string) => User | undefined;
  getAllUsers: () => User[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem('cpmUsers');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem('cpmUsers', JSON.stringify(users));
  }, [users]);

  const addUser = (user: Omit<User, 'id'>) => {
    const newUser = {
      ...user,
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    };
    setUsers([...users, newUser]);
  };

  const findUserByUsername = (username: string) => {
    return users.find(user => user.username === username);
  };

  const getAllUsers = () => {
    return users;
  };

  return (
    <UserContext.Provider value={{ users, addUser, findUserByUsername, getAllUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
