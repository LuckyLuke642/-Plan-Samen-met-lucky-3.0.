
interface CommandResponse {
  text: string;
  audioUrl?: string;
}

export const sendCommand = async (text: string): Promise<CommandResponse> => {
  try {
    const response = await fetch('https://plansamen-backend-lucky.vercel.app/api/command', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to communicate with Lucky');
    }

    return await response.json();
  } catch (error) {
    console.error('Error communicating with Lucky:', error);
    return { text: 'Sorry, ik kon je niet helpen. Probeer het later nog eens.' };
  }
};
