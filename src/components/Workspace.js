import React, { useState } from 'react'

export default function Workspace({ darkMode, toggleDarkMode }) {

    const [text, setText] = useState("");

    function handleOnChange(event) {
        setText(event.target.value);
    }

    function handleToUpper() {
        setText(text.toUpperCase());
    }

    function handleToLower() {
        setText(text.toLowerCase());
    }

    function handleCopy() {
        navigator.clipboard.writeText(text);

        document.getElementById('copyBtn').innerHTML = "Copied";
        setTimeout(() => {
            document.getElementById('copyBtn').innerHTML = "Copy Text";
        }, 2000);
    }

    function handleClear() {
        setText("");
    }

    function handleToTitle() {

        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);
    }
    function handleToSentence() {

        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
    }


    function handleInverse() {
        let newText = "";
        for (let c of text) {
            if (c === c.toUpperCase()) {
                newText += c.toLowerCase();
            }
            else {
                newText += c.toUpperCase();
            }
        }
        setText(newText);
    }

    function countCharacterWithSpace() {
        return text.length;
    }

    function countCharacterWithoutSpace() {
        let count = 0;
        for (let i = 0; i < text.length; ++i) {
            if (text[i] !== ' ') {
                count += 1;
            }
        }
        return count;
    }

    function countWords() {
        return text.trim().split(/\s+/).length;
    }

    function countUniqueWords() {
        let words = text.trim().toLowerCase().split(/\s+/);
        let uniqueWords = new Set(words);
        return uniqueWords.size;
    }

    function countLines() {
        return text.split(/\r?\n/).length;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function readingTime() {
        const words = countWords();
        const readingSpeed = 200;
        const timeInSeconds = (words / readingSpeed) * 60;
        return formatTime(timeInSeconds);
    }

    function speakingTime() {
        const words = countWords();
        const speakingSpeed = 130;
        const timeInSeconds = (words / speakingSpeed) * 60;
        return formatTime(timeInSeconds);
    }

    function writingTime() {
        const words = countWords();
        const writingSpeed = 40;
        const timeInSeconds = (words / writingSpeed) * 60;
        return formatTime(timeInSeconds);
    }

    function AvgCharacterPerWord() {
        const words = countWords();
        const characters = countCharacterWithoutSpace();
        return ((characters / words).toFixed(2));
    }


    let isSpeaking = false;
    let utterance;

    function handleSpeak() {
        if ('speechSynthesis' in window) {
            if (!isSpeaking) {

                utterance = new SpeechSynthesisUtterance(text);
                window.speechSynthesis.speak(utterance);
                isSpeaking = true;
                document.getElementById("speakBtn").innerHTML = "Pause";


                utterance.onend = function () {
                    isSpeaking = false;
                    document.getElementById("speakBtn").innerHTML = "Speak";
                };
            } else {

                window.speechSynthesis.cancel();
                isSpeaking = false;
                document.getElementById("speakBtn").innerHTML = "Speak";
            }
        } else {
            alert("Sorry, your browser doesn't support text-to-speech.");
        }
    }

    function countSentences() {
        let sentences = text.split(/[.!?]+/);
        sentences = sentences.filter(sentence => sentence.trim().length > 0);
        return sentences.length;
    }

    function AvgCharacterPerSentence() {
        const sentences = countSentences();
        const characters = countCharacterWithoutSpace();
        return ((characters / sentences).toFixed(2));
    }

    function AvgWordPerSentence() {
        const sentences = countSentences();
        const words = countWords();
        return ((words / sentences).toFixed(2));
    }

    function findLongestSentence() {

        let sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).map(sentence => sentence.trim());
        if (sentences.length === 0) {
            return 0;
        }

        const countWords = (sentence) => sentence.split(/\s+/).filter(word => word.length > 0).length;
        let shortest = sentences[0];
        for (let i = 1; i < sentences.length; i++) {
            if (countWords(sentences[i]) > countWords(shortest)) {
                shortest = sentences[i];
            }
        }

        return countWords(shortest);
    }

    function findShortestSentence() {

        let sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).map(sentence => sentence.trim());
        if (sentences.length === 0) {
            return 0;
        }

        const countWords = (sentence) => sentence.split(/\s+/).filter(word => word.length > 0).length;
        let shortest = sentences[0];
        for (let i = 1; i < sentences.length; i++) {
            if (countWords(sentences[i]) < countWords(shortest)) {
                shortest = sentences[i];
            }
        }

        return countWords(shortest);
    }

    return (
        <div className={`max-w-7xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <div className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'} px-4 md:px-8 py-3 md:py-5 min-h-screen w-full flex flex-col md:flex-row transition-colors duration-200`}>
                <div className='w-full md:w-3/4 px-2 py-1'>

                    <div className={`${darkMode ? 'text-white' : 'text-gray-800'} text-3xl mb-3 font-bold`}>Text Utility Workspace</div>

                    <div className=''>
                        <textarea
                            className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'} w-full p-2 rounded-lg px-4 py-3 outline-none focus:outline-none transition-shadow duration-300`}
                            rows={16}
                            placeholder='Enter a Piece of Text Here'
                            value={text === "" ? "" : text}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className={`my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 border-y-2 ${darkMode ? 'border-gray-300' : 'border-gray-900'} border-opacity-25 py-4`}>
                        <button
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleToUpper}
                        >
                            UPPERCASE
                        </button>
                        <button
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleToLower}
                        >
                            lowercase
                        </button>
                        <button
                            id='copyBtn'
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleCopy}
                        >
                            Copy Text
                        </button>
                        <button
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                        <button
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleToSentence}
                        >
                            Sentence case
                        </button>
                        <button
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleToTitle}
                        >
                            Title Case
                        </button>
                        <button
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleInverse}
                        >
                            inverseCase
                        </button>
                        <button id='speakBtn'
                            className={`relative px-8 ${darkMode ? 'hover:text-white font-semibold' : 'hover:text-black font-semibold'} py-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-400 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full ${darkMode ? 'before:bg-gray-600' : 'before:bg-gray-300'} before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700`}
                            onClick={handleSpeak}
                        >
                            Speak
                        </button>
                    </div>
                </div>

                <div className={`w-full md:w-1/4 px-2 py-2 mt-9`}>

                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} px-4 py-3 my-2 rounded-md min-h-[410px]`}>
                        <div className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>  Word Statistics</div>

                        <div className={`text-sm w-full ${darkMode ? 'text-gray-50' : 'text-black'}`}>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Characters (with spaces):</span>
                                <span>{countCharacterWithSpace()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Characters (without spaces):</span>
                                <span>{countCharacterWithoutSpace()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Words:</span>
                                <span>{countWords()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Unique Words:</span>
                                <span>{countUniqueWords()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Reading Time:</span>
                                <span>{readingTime()} sec</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Speaking Time:</span>
                                <span>{speakingTime()} sec</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Writing Time:</span>
                                <span>{writingTime()} sec</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Total Sentences:</span>
                                <span>{countSentences()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Longest Sentence (words):</span>
                                <span>{0 | findLongestSentence()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Shortest Sentence (words):</span>
                                <span>{findShortestSentence()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Average Sentence Length (chars):</span>
                                <span>{0 | AvgCharacterPerSentence()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Average Sentence Length (words):</span>
                                <span>{0 | AvgWordPerSentence()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Lines:</span>
                                <span>{countLines()}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Average Word Length (chars):</span>
                                <span>{AvgCharacterPerWord()}</span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'} px-4 md:px-8 py-3 md:py-5 w-full`}>
                <div className={`${darkMode ? 'text-white' : 'text-gray-800'} text-lg mb-3 font-semibold`}>Preview</div>
                <div onClick={handleCopy}>
                    <div className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'} w-full p-2 rounded-lg px-4 py-3 outline-none whitespace-pre-wrap focus:outline-none transition-shadow duration-300 resize-none`} style={{ wordWrap: 'normal', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                        {text === "" ? "Enter Text Above to Preview it Here...." : text}
                    </div>

                </div>
            </div>
        </div>
    )
}