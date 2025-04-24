
import React from "react";
import QuestionInput from "@/components/QuestionInput";
import ResponseDisplay from "@/components/ResponseDisplay";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  const [response, setResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);

  const handleQuestionSubmit = async (text: string) => {
    setIsLoading(true);
    setResponse("");
    setAudioUrl(null);

    // Simulate API call
    setTimeout(() => {
      setResponse("✅ Checklist is opgehaald: 1. Sokken mee 2. Notitieblok 3. Rustig ademen");
      setIsLoading(false);
      // Simulated audio URL - replace with actual audio URL in production
      setAudioUrl("https://example.com/audio.mp3");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fff3e0] p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#d84315] mb-6">
          Welkom bij <strong>PlanSamen met Lucky 3.0</strong>
        </h1>
        <p className="text-gray-600 mb-4">Typ je vraag of notitie hieronder, Lucky luistert altijd:</p>
        
        <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isLoading} />
        <ResponseDisplay response={response} isLoading={isLoading} />
        <AudioPlayer audioUrl={audioUrl} />
      </div>
    </div>
  );
};

export default Index;
