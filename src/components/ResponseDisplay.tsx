
import React from "react";
import { Card } from "@/components/ui/card";

interface ResponseDisplayProps {
  response: string;
  isLoading: boolean;
}

const ResponseDisplay = ({ response, isLoading }: ResponseDisplayProps) => {
  if (!response && !isLoading) return null;

  return (
    <Card className="mt-6 p-4 bg-white/50 backdrop-blur-sm">
      <p className={`text-gray-800 ${isLoading ? 'italic' : ''}`}>
        {isLoading ? (
          <span className="flex items-center gap-2">
            Lucky denkt even na...
            <span className="inline-block animate-spin">⏳</span>
          </span>
        ) : (
          response
        )}
      </p>
    </Card>
  );
};

export default ResponseDisplay;
