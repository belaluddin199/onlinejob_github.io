
import React from 'react';
import { Link } from 'react-router-dom';
import CpmButton from '@/components/CpmButton';
import Logo from '@/components/Logo';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cpmGreen to-cpmBlack">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Cpm Work Online</h1>
        
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <h2 className="text-2xl font-semibold text-white mb-10">Welcome To The Freelancing Bot</h2>
        
        <div className="space-y-6">
          <CpmButton to="/work" className="w-full">Work Now</CpmButton>
          <CpmButton to="/registration" className="w-full">Registration</CpmButton>
        </div>
        
        <div className="mt-16">
          <Link 
            to="/admin" 
            className="bg-cpmBlue text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-lg"
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
