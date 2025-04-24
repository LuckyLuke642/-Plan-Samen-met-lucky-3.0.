
import React from "react";
import { Card } from "@/components/ui/card";

interface AudioPlayerProps {
  audioUrl: string | null;
}

const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  if (!audioUrl) return null;

  return (
    <Card className="mt-6 p-4 bg-white/50 backdrop-blur-sm">
      <audio className="w-full" controls src={audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </Card>
  );
};

export default AudioPlayer;
