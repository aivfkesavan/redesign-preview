
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-lovable-dark border-b border-lovable-gray-light">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/56b54e21-3518-425f-9465-55877834c461.png" 
              alt="Lovable Logo" 
              className="h-6 w-6"
            />
            <span className="font-semibold text-lg">lovable</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Projects
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Templates
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Learn
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Support
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button variant="default" size="sm" className="bg-lovable-orange hover:bg-lovable-orange/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
