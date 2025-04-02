
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CpmButton from '@/components/CpmButton';
import FormInput from '@/components/FormInput';
import { useUserContext } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const SearchProfilePage = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const { findUserByUsername } = useUserContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = findUserByUsername(searchUsername);
    
    if (!user) {
      toast({
        variant: "destructive",
        title: "User not found",
        description: "No user found with that username",
      });
      return;
    }
    
    navigate(`/profile/${user.username}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cpmBlue to-cpmBlack">
      <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-sm bg-black/30 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Search Profile</h1>
        
        <form onSubmit={handleSubmit}>
          <FormInput 
            label="Search Username"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
            placeholder="Enter username to search"
          />
          
          <div className="mt-8">
            <CpmButton type="submit" className="w-full">
              Search
            </CpmButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchProfilePage;
