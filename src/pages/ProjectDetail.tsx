
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Code, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C]">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 border-4 border-t-[#8B5CF6] border-r-[#8B5CF6] border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-white/80">Loading project...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <header className="w-full bg-[#221F26] border-b border-[#33C3F0]/20">
        <div className="container flex h-16 items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white/80 hover:text-white mr-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
              Nidum AI Welcome Page
            </h1>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-transparent border-[#33C3F0]/20 text-white/80">
              <Star className="h-4 w-4 mr-2" />
              Star
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-[#33C3F0]/20 text-white/80">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-12 px-4 flex flex-col items-center">
        <div className="max-w-3xl w-full text-center">
          <div className="mb-8">
            <Code className="h-16 w-16 text-[#8B5CF6] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Nidum AI</h2>
            <p className="text-white/80 text-lg">
              A revolutionary AI-powered development platform that helps you build amazing applications.
            </p>
          </div>
          
          <div className="bg-[#221F26] p-8 rounded-lg border border-[#33C3F0]/20 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Project #{id} Overview</h3>
            <p className="text-white/80 mb-6">
              This is a dummy welcome page for project #{id}. In a real application, you would see detailed information about your project and tools to modify it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1A1F2C] p-4 rounded-md border border-[#33C3F0]/20">
                <h4 className="font-medium text-[#8B5CF6] mb-2">Components</h4>
                <p className="text-sm text-white/80">24 components</p>
              </div>
              <div className="bg-[#1A1F2C] p-4 rounded-md border border-[#33C3F0]/20">
                <h4 className="font-medium text-[#F97316] mb-2">Dependencies</h4>
                <p className="text-sm text-white/80">12 packages</p>
              </div>
              <div className="bg-[#1A1F2C] p-4 rounded-md border border-[#33C3F0]/20">
                <h4 className="font-medium text-[#33C3F0] mb-2">Last Updated</h4>
                <p className="text-sm text-white/80">2 days ago</p>
              </div>
            </div>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-[#8B5CF6] to-[#F97316] hover:opacity-90 text-white px-8 py-2"
            onClick={() => navigate("/")}
          >
            Back to Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
