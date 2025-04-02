
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CpmButton from '@/components/CpmButton';
import Logo from '@/components/Logo';
import { useUserContext } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  const { findUserByUsername } = useUserContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const user = findUserByUsername(username || '');
  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cpmGreen to-cpmBlack">
        <div className="bg-black/50 p-8 rounded-lg text-center">
          <h1 className="text-3xl font-bold text-white mb-4">User Not Found</h1>
          <CpmButton onClick={() => navigate('/')}>Go Back Home</CpmButton>
        </div>
      </div>
    );
  }
  
  const baseUrl = "https://101000.shop/92af22c7480006e3af1d/2bb8de396d/?placementName=";
  const fullUrl = `${baseUrl}${user.username}`;
  
  const handleButtonClick = (action: string) => {
    window.open(fullUrl, '_blank');
    toast({
      title: `${action} action initiated`,
      description: `Opening link for ${user.username}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cpmGreen to-cpmBlack">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Cpm Work Online</h1>
        
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <div className="bg-black/40 rounded-xl p-8 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-3">{user.fullName}</h2>
          <p className="text-lg text-white/80 mb-2">Username: {user.username}</p>
          <p className="text-lg text-white/80 mb-6">Registration #: {user.id}</p>
          
          <div className="space-y-4 mt-8">
            <CpmButton 
              className="w-full"
              onClick={() => handleButtonClick('Impression')}
            >
              Impression
            </CpmButton>
            
            <CpmButton 
              className="w-full"
              onClick={() => handleButtonClick('Sign_up')}
            >
              Sign_up
            </CpmButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
