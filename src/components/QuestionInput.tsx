
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface QuestionInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const QuestionInput = ({ onSubmit, isLoading }: QuestionInputProps) => {
  const [inputText, setInputText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && !isLoading) {
      onSubmit(inputText);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Bijv. Lees mijn laatste notitie voor of Maak een nieuwe afspraak voor morgen..."
        className="min-h-[100px] bg-white/50 backdrop-blur-sm"
        disabled={isLoading}
      />
      <Button
        type="submit"
        className="w-full bg-[#ff7043] hover:bg-[#ff5722] text-white"
        disabled={isLoading || !inputText.trim()}
      >
        Vraag het aan Lucky
      </Button>
    </form>
  );
};

export default QuestionInput;
