import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = ({ setIsSpeaking }) => {
    const navigate = useNavigate()
    // const site = "google.com"
    const commands = [
        {
            command: 'reset',
            callback: ({ resetTranscript }) => resetTranscript()
        },
        {
            command: 'speak please',
            callback: () => setIsSpeaking(true)
        },
        {
            command: 'stop speaking',
            callback: () => setIsSpeaking(false)
        },
        {
            command: 'stop',
            callback: () => SpeechRecognition.stopListening()
        },
        {
            command: `Open`,
            callback: () => window.open('https://www.google.com')

        },

        {
            command: 'go to learn',
            callback: () => {
                navigate('/allRouts/learn')
                return setIsSpeaking(false)
            }
        },
        {
            command: 'go to season 1',
            callback: () => {
                navigate('/allRouts/learn/lessonOneStep')
                return setIsSpeaking(false)
            }
        },
        {
            command: 'go to level 1.1',
            callback: () => {
                navigate('/allRouts/learn/sesson1')
                return setIsSpeaking(false)
            }
        },
        {
            command: 'back to home',
            callback: () => {
                navigate("/")
               return setIsSpeaking(false)
            }
        }

    ]
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({ commands });

    // useEffect(() => {
    //     if (transcript.toLowerCase().includes('hello')) {
    //         if (!listening) {
    //             // Start listening if not already listening
    //             SpeechRecognition.startListening({ continuous: true });
    //         }
    //     }
    // }, [transcript]);


    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true })

    }, [listening])

    // const handleAssestent = () => {
    //     SpeechRecognition.startListening({ continuous: true })

    // }

    console.log(transcript);

    return (
        <div>
            {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            {/* <button onClick={() => SpeechRecognition.startListening({ continuous: true })}> Start </button> */}
            {/* <button disabled onClick={() => SpeechRecognition.stopListening()}>Stop</button> */}
            {/* <button disabled onClick={resetTranscript}>Reset</button> */}
            {/* <p>{transcript}</p> */}
        </div>
    );
};

export default SpeechRecognitionComponent;