import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink, Play } from "lucide-react";

const YouTubeVideos = () => {
  const videos = [
    {
      id: "U3pW1LV99Zs",
      title: "Introduction to Electrical Distribution Design Using Revit",
      description: "Learn the fundamentals of electrical distribution design using Autodesk Revit",
      thumbnail: "https://img.youtube.com/vi/U3pW1LV99Zs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=U3pW1LV99Zs",
    },
    {
      id: "DM0JB8adc5g",
      title: "Generator Protection",
      description: "Understanding generator protection systems and their importance in electrical engineering",
      thumbnail: "https://img.youtube.com/vi/DM0JB8adc5g/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=DM0JB8adc5g",
    },
  ];

  return (
    <section id="youtube" className="py-20 px-4 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-6xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-red-500/10 rounded-full">
              <Youtube className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            YouTube <span className="text-primary">Videos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Educational content from my channel @electricalworld188
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card 
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 group animate-fade-in-up hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a 
              href="https://www.youtube.com/@electricalworld188" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Visit My Channel
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
