
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ChevronLeft, Star, Share2, MoreHorizontal, Play, Download, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F15]">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb and actions */}
        <div className="border-b border-[#2F2763]">
          <div className="container mx-auto py-4 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white gap-1 h-8">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Projects</span>
                  </Button>
                </Link>
                <div className="text-white/30 mx-1">•</div>
                <h1 className="text-lg font-semibold text-white">Project {id}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-[#8B5CF6] h-8 w-8">
                  <Star className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-[#8B5CF6] h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-[#8B5CF6] h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <div className="h-20 w-20 purple-gradient rounded-xl flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-white">N</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 glow">Nidum AI</h1>
            <p className="text-white/70 text-center mb-6 max-w-xl">
              Welcome to your AI-powered design assistant. Create, iterate, and transform your ideas into stunning visuals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="bg-[#2F2763] text-white hover:bg-[#3D2E7C]">AI</Badge>
              <Badge className="bg-[#2F2763] text-white hover:bg-[#3D2E7C]">Design</Badge>
              <Badge className="bg-[#2F2763] text-white hover:bg-[#3D2E7C]">Creative</Badge>
              <Badge className="bg-[#2F2763] text-white hover:bg-[#3D2E7C]">Productivity</Badge>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Button className="purple-gradient text-white gap-2">
                <Play className="h-4 w-4" />
                <span>Launch Project</span>
              </Button>
              <Button variant="outline" className="border-[#2F2763] text-white hover:bg-[#2F2763] gap-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button variant="outline" className="border-[#2F2763] text-white hover:bg-[#2F2763] gap-2">
                <GitBranch className="h-4 w-4" />
                <span>Fork</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t border-[#2F2763]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md purple-gradient flex items-center justify-center">
                <span className="font-bold text-xs text-white">V</span>
              </div>
              <p className="text-xs text-white/60">
                © {new Date().getFullYear()} Vibe Coding. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition">Terms</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition">Privacy</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition">Contact</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
