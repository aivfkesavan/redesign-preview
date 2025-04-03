
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Code, Star, Share2, FileText, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      toast.success("Project loaded successfully");
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleShareClick = () => {
    navigator.clipboard.writeText(`https://vibecoding.app/project/${id}`);
    toast.success("Link copied to clipboard!");
  };
  
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
      <header className="w-full bg-[#221F26] border-b border-[#8B5CF6]/20 sticky top-0 z-10">
        <div className="container flex h-16 items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white/80 hover:text-white mr-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-bold text-white">
              Nidum AI <span className="bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6] bg-clip-text text-transparent">Welcome Page</span>
            </h1>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-transparent border-[#8B5CF6]/20 text-white/80 hover:bg-[#8B5CF6]/10">
              <Star className="h-4 w-4 mr-2" />
              Star
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-[#8B5CF6]/20 text-white/80 hover:bg-[#8B5CF6]/10"
              onClick={handleShareClick}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4 glass-effect rounded-lg p-6 border border-[#8B5CF6]/30">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mb-4">
              <Code className="h-10 w-10 text-[#8B5CF6]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Nidum AI</h2>
            <p className="text-white/80 text-lg">
              A revolutionary AI-powered development platform that helps you build amazing applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#221F26] p-6 rounded-lg border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/60 transition-all">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-2 bg-[#8B5CF6]/20 mr-4">
                  <FileText className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Project Description</h3>
                  <p className="text-white/60 text-sm mt-2">
                    This project serves as a welcome page for Nidum AI, showcasing its capabilities and features.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221F26] p-6 rounded-lg border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/60 transition-all">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-2 bg-[#8B5CF6]/20 mr-4">
                  <Calendar className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Timeline</h3>
                  <p className="text-white/60 text-sm mt-2">
                    <span className="text-[#8B5CF6]">Created:</span> April 1, 2025<br />
                    <span className="text-[#8B5CF6]">Last Updated:</span> April 3, 2025
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221F26] p-6 rounded-lg border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/60 transition-all">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-2 bg-[#8B5CF6]/20 mr-4">
                  <MessageSquare className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Prompts Used</h3>
                  <p className="text-white/60 text-sm mt-2">
                    Total prompts: 12<br />
                    Last prompt: "Update the welcome message"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#221F26] p-6 rounded-lg border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/60 transition-all">
              <div className="flex items-start mb-4">
                <div className="rounded-full p-2 bg-[#8B5CF6]/20 mr-4">
                  <Code className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Components</h3>
                  <p className="text-white/60 text-sm mt-2">
                    Total components: 24<br />
                    UI Framework: ShadCN/Tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white px-8 py-6"
              onClick={() => navigate("/")}
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/4 space-y-4">
          <div className="bg-[#221F26] p-6 rounded-lg border border-[#8B5CF6]/20">
            <h3 className="font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-[#8B5CF6]/10">
                <Code className="h-4 w-4 mr-2" /> 
                View Code
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-[#8B5CF6]/10">
                <FileText className="h-4 w-4 mr-2" /> 
                Download Assets
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-[#8B5CF6]/10">
                <Share2 className="h-4 w-4 mr-2" /> 
                Share Project
              </Button>
            </div>
          </div>
          
          <div className="bg-[#221F26] p-6 rounded-lg border border-[#8B5CF6]/20">
            <h3 className="font-bold text-white mb-4">Project #{id} Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/60">Type:</span>
                <span className="text-white">Welcome Page</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Status:</span>
                <span className="text-white">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Version:</span>
                <span className="text-white">1.2.0</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
