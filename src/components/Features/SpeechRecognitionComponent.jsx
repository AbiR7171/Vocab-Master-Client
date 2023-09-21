import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = ({handleSpeak,setIsSpeaking }) => {
    const navigate = useNavigate()
    
    const commands = [
        {
            command: 'reset',
            callback: ({ resetTranscript }) => resetTranscript()
        },
        {
            command: 'master',
            callback: () => {
             handleSpeak()
             return setIsSpeaking(true);
            }
        },
        // {
        //     command: 'stop speaking',
        //     callback: () => setIsSpeaking(false)
        // },
        {
            command: 'stop',
            callback: () => SpeechRecognition.stopListening()
        },
        {
            command: `Open *`,
            callback: (site) => window.open('https://'+site)

        },
        {
            command: 'go to learn',
            callback: () => {
                navigate('/allRouts/learn')
                return setIsSpeaking(false)
            }
        },
        {
            command: 'go to season *',
            callback: (path) => {
                navigate(`/allRouts/learn/stepSeason${path}`)
                return setIsSpeaking(false)
            }
        },
        {
            command: 'go to level 1.1',
            callback: () => {
                navigate('/allRouts/learn/sesson1')
                return setIsSpeaking(true)
            }
        },
        {
            command: 'back to home',
            callback: () => {
                navigate("/")
               return setIsSpeaking(true)
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
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    // const handleAssestent = () => {
    //     SpeechRecognition.startListening({ continuous: true })

    // }

    console.log(transcript);

    const handleKeyDown = event => {
        if(event.key === "Enter"){
            console.log("Enter key pressed");
            SpeechRecognition.startListening()
        }
    }

    return (
        <div >
            {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            
            {/* <button className='mx-2' onClick={() => SpeechRecognition.startListening()}> Start </button> */}
            <button onKeyDown={handleKeyDown} >Command:{listening ? "on" : "off"} </button>
            {/* <button disabled onClick={() => SpeechRecognition.stopListening()}>Stop</button> */}
            {/* <button disabled onClick={resetTranscript}>Reset</button> */}
            {/* <p>{transcript}</p> */}
        </div>
    );
};

export default SpeechRecognitionComponent;