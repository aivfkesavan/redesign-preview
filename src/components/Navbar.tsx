
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-[#1A1F2C] border-b border-[#33C3F0]/20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/56b54e21-3518-425f-9465-55877834c461.png" 
              alt="Vibe Coding Logo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
              Vibe Coding
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <a href="#" className="text-sm font-medium text-[#33C3F0] hover:text-white transition">
              Projects
            </a>
            <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition">
              Templates
            </a>
            <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition">
              Learn
            </a>
            <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition">
              Support
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex text-white/80 hover:text-white hover:bg-[#221F26]">
            Sign In
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-[#8B5CF6] to-[#F97316] hover:opacity-90 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
