
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CpmButton from '@/components/CpmButton';
import FormInput from '@/components/FormInput';
import { useToast } from '@/components/ui/use-toast';

const ADMIN_PASSWORD = "373324";

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      navigate('/admin/users');
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Password",
        description: "Please enter the correct admin password",
      });
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cpmBlue to-cpmBlack">
      <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-sm bg-black/30 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Admin Panel</h1>
        
        <form onSubmit={handleSubmit}>
          <FormInput 
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
          />
          
          <div className="mt-8">
            <CpmButton 
              type="submit" 
              className="w-full bg-cpmBlue hover:bg-blue-600"
            >
              Confirm
            </CpmButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
