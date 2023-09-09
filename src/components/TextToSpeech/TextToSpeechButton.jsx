import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const TextToSpeechButton = ({ paragraphs, isSpeaking, setIsSpeaking }) => {
  // const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!isSpeaking) {
      const utterances = paragraphs.map(content => {
        const utterance = new SpeechSynthesisUtterance(content);
        return utterance;
      });

      utterances.forEach(utterance => speechSynthesis.speak(utterance));
      setIsSpeaking(true);
    } else {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div>
      <button onClick={handleSpeak}>
        {isSpeaking ?  <FaVolumeUp size={32} title='Mute'></FaVolumeUp> : <FaVolumeMute title='Speak' size={32}></FaVolumeMute> }
      </button>
    </div>
  );
};

export default TextToSpeechButton;
