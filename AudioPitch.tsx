import React, { useState } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { AudioIcon } from './Icons';

// Helper function to decode base64 string to Uint8Array
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper function to decode raw PCM audio data into an AudioBuffer
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


const AudioPitch: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const pitchText = `
        Stop trading time for money and guessing what works. 
        Saint Martin Revenue Group offers a true partnership, powered by two decades of NYC market expertise, now encoded into a proprietary AI engine. 
        We build your dominant online presence, create a non-stop content machine, and deliver a verifiable return on investment, all for a fraction of the cost of a traditional team. 
        Don't just compete, dominate. Schedule your exclusive consultation today and secure your unfair advantage in New York City.
    `;

    const handlePlayPitch = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // FIX: The API key must be obtained exclusively from `process.env.API_KEY`.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-tts",
                contents: [{ parts: [{ text: pitchText }] }],
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: { voiceName: 'Kore' },
                        },
                    },
                },
            });
            
            const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
            if (!base64Audio) {
                throw new Error("No audio data received from API.");
            }

            const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            const decodedBytes = decode(base64Audio);
            const audioBuffer = await decodeAudioData(decodedBytes, outputAudioContext, 24000, 1);
            
            const source = outputAudioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(outputAudioContext.destination);
            source.start();

        } catch (err) {
            console.error("Error generating or playing audio pitch:", err);
            setError("Sorry, the audio pitch could not be loaded.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Hear The Pitch</h2>
                <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded"></div>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                    Let our AI summarize the core value for you. Press play to hear how we accelerate growth for businesses like yours.
                </p>
                <div className="mt-10">
                    <button
                        onClick={handlePlayPitch}
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 inline-flex items-center disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : (
                            <>
                                <AudioIcon className="w-6 h-6 mr-3" />
                                Play Audio Pitch
                            </>
                        )}
                    </button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
            </div>
        </section>
    );
};

export default AudioPitch;