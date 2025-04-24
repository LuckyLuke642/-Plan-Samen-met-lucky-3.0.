
import React, { useState } from 'react';
import { sendCommand } from '@/services/apiService';
import QuestionInput from '@/components/QuestionInput';
import ResponseDisplay from '@/components/ResponseDisplay';
import AudioPlayer from '@/components/AudioPlayer';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const LuckyChat: React.FC = () => {
  const [response, setResponse] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (text: string) => {
    setIsLoading(true);
    setAudioUrl(null);
    
    try {
      const data = await sendCommand(text);
      setResponse(data.text);
      if (data.audioUrl) {
        setAudioUrl(data.audioUrl);
      }
    } catch (error) {
      toast({
        title: 'Fout',
        description: 'Er is iets misgegaan bij het communiceren met Lucky.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <Card className="bg-gradient-to-b from-orange-100 to-white border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-2xl text-[#ff5722]">
            Lucky Assistant
          </CardTitle>
        </CardHeader>
        <div className="p-6">
          <QuestionInput onSubmit={handleSubmit} isLoading={isLoading} />
          <ResponseDisplay response={response} isLoading={isLoading} />
          <AudioPlayer audioUrl={audioUrl} />
        </div>
      </Card>
    </div>
  );
};

export default LuckyChat;
