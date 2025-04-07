
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const AllProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // This would be calculated based on your actual data

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Here you would fetch projects for the specific page
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F15]">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white gap-1 h-8">
                <ChevronLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white text-gradient">All Projects</h1>
              <span className="text-xs px-2.5 py-1 bg-[#2F2763] text-[#8B5CF6] rounded-full font-medium">24</span>
            </div>
          </div>
        </div>

        <ProjectGrid />

        <div className="mt-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  className="text-[#8B5CF6] border-[#2F2763] bg-[#161622]/80 hover:bg-[#2F2763] hover:text-white" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    href="#" 
                    isActive={currentPage === i + 1}
                    className={currentPage === i + 1 
                      ? "bg-gradient-to-br from-[#8B5CF6] to-[#7847e3] text-white border-[#2F2763]"
                      : "text-[#8B5CF6] border-[#2F2763] bg-[#161622]/80 hover:bg-[#2F2763] hover:text-white"}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  className="text-[#8B5CF6] border-[#2F2763] bg-[#161622]/80 hover:bg-[#2F2763] hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <footer className="py-6 border-t border-[#2F2763]/50">
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
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Terms</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Privacy</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Contact</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllProjects;
