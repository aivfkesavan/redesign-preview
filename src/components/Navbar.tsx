
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, Plus, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#0F0F15] border-b border-[#2F2763]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md purple-gradient flex items-center justify-center">
              <span className="font-bold text-lg text-white">V</span>
            </div>
            <span className="font-bold text-xl text-gradient">
              Vibe Coding
            </span>
          </a>
          
          <div className="hidden md:flex ml-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="h-9 bg-[#161622] border border-[#2F2763] rounded-md pl-9 pr-4 text-sm text-white/80 focus:outline-none focus:border-[#8B5CF6] w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative text-white/70 hover:text-white hover:bg-[#2F2763]"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-[#8B5CF6] rounded-full"></span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex border-[#2F2763] text-white/80 hover:text-white hover:border-[#8B5CF6] hover:bg-[#2F2763]"
          >
            Sign In
          </Button>
          
          <Button 
            className="purple-gradient text-white"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            New Project
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
