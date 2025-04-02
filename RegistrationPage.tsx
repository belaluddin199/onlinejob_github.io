
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CpmButton from '@/components/CpmButton';
import FormInput from '@/components/FormInput';
import { useUserContext } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [bkashNumber, setBkashNumber] = useState('');
  
  const { addUser, findUserByUsername } = useUserContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if username already exists
    if (findUserByUsername(username)) {
      toast({
        variant: "destructive",
        title: "Username already exists",
        description: "Please choose a different username",
      });
      return;
    }
    
    // Add new user
    addUser({ fullName, username, bkashNumber });
    
    toast({
      title: "Registration successful",
      description: "Your account has been created!",
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cpmBlue to-cpmBlack">
      <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-sm bg-black/30 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Registration</h1>
        
        <form onSubmit={handleSubmit}>
          <FormInput 
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
          />
          
          <FormInput 
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
          />
          
          <FormInput 
            label="Bkash Number"
            value={bkashNumber}
            onChange={(e) => setBkashNumber(e.target.value)}
            placeholder="Enter your Bkash number"
          />
          
          <div className="mt-8">
            <CpmButton type="submit" className="w-full">
              Registration
            </CpmButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
