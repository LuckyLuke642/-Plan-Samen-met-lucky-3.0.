
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        Lucky Assistant
      </h1>
      <p className="text-lg text-center mb-8">
        Welkom bij de Lucky Assistant. Plan samen met Lucky!
      </p>
      <Link to="/lucky">
        <Button className="bg-[#ff7043] hover:bg-[#ff5722] text-white">
          Start met Lucky
        </Button>
      </Link>
    </div>
  );
};

export default Index;
