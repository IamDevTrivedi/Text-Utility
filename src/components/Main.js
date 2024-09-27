import React, { useState } from 'react';

export default function Main() {
    const [text, setText] = useState("");

    function handleToUpperCase() {
        setText(text.toUpperCase());
    }
    function handleToLowerCase() {
        setText(text.toLowerCase());
    }
    function handleOnChange(event) {
        setText(event.target.value);
    }
    function handleInverseCase() {
        setText(prevText =>
            prevText
                .split('')
                .map(char =>
                    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
                )
                .join('')
        );
    }
    let isSpeaking = false;
    let utterance;

    function handleSpeakText() {
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

    function handleSentenceCase() {
        const formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(formattedText);
    }
    function handleTitleCase() {
        const formattedText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(formattedText);
    }
    function handleClearText() {
        setText("");
    }
    function countUniqueWords() {
        const words = text.toLowerCase().split(/\s+/).filter(word => word.length > 0);
        const uniqueWords = new Set(words);
        return uniqueWords.size;
    }
    function calculateReadingTime() {
        const words = text.split(/\s+/).filter(word => word.length > 0).length;
        const wordsPerMinute = 3.33;
        const readingTimeMinutes = Math.ceil(words / wordsPerMinute);
        return readingTimeMinutes;
    }
    function calculateSpeakingTime() {
        const words = text.split(/\s+/).filter(word => word.length > 0).length;
        const wordsPerMinute = 2.166;
        const speakingTimeMinutes = Math.ceil(words / wordsPerMinute);
        return speakingTimeMinutes;
    }
    function countLines() {
        const lines = text.split(/\n/).filter(line => line.trim().length > 0);
        return lines.length;
    }
    function avgWordLength() {
        const words = text.split(/\s+/).filter(word => word.length > 0);
        const totalChars = words.reduce((sum, word) => sum + word.length, 0);
        return words.length > 0 ? (totalChars / words.length).toFixed(2) : 0;
    }
    function avgSentenceLengthChars() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const totalChars = sentences.reduce((sum, sentence) => sum + sentence.length, 0);
        return sentences.length > 0 ? (totalChars / sentences.length).toFixed(2) : 0;
    }
    function avgSentenceLengthWords() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const totalWords = sentences.reduce((sum, sentence) => sum + sentence.split(/\s+/).length, 0);
        return sentences.length > 0 ? (totalWords / sentences.length).toFixed(2) : 0;
    }
    function shortestSentence() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const shortest = sentences.reduce((min, sentence) => Math.min(min, sentence.split(/\s+/).length), Infinity);
        return shortest === Infinity ? 0 : shortest;
    }
    function countSentences() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        return sentences.length;
    }
    function longestSentence() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const longest = sentences.reduce((max, sentence) => Math.max(max, sentence.split(/\s+/).length), 0);
        return longest;
    }
    function handleCopyText() {
        navigator.clipboard.writeText(text)
            .then(() => {
                const copyButton = document.querySelector('#copy-btn');
                if (copyButton) {
                    copyButton.innerHTML = "Copied";
                    setTimeout(() => {
                        copyButton.innerHTML = "Copy Text";
                    }, 3000);
                }
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }


    return (
        <div className='bg-[#EFF6FF] min-h-screen flex flex-col md:flex-row p-4'>
            <div className='w-full md:w-3/4 p-4'>
                <h2 className='text-gray-800 text-2xl mb-6 font-semibold'>Enter Your Text</h2>
                <textarea
                    className='bg-white shadow-md w-full h-72 p-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition duration-300'
                    placeholder='Type something here...' value={text} onChange={handleOnChange}
                ></textarea>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
                    <button className='bg-blue-600 hover:bg-blue-500 py-2 px-4 text-white rounded-md' id='copy-btn' onClick={handleCopyText}>Copy</button>
                    <button className='bg-gray-600 hover:bg-gray-500 py-2 px-4 text-white rounded-md' onClick={handleClearText}>Clear</button>
                    <button className='bg-green-600 hover:bg-green-500 py-2 px-4 text-white rounded-md' onClick={handleToUpperCase}>UPPERCASE</button>
                    <button className='bg-indigo-600 hover:bg-indigo-500 py-2 px-4 text-white rounded-md' onClick={handleToLowerCase}>lowercase</button>
                    <button className='bg-purple-600 hover:bg-purple-500 py-2 px-4 text-white rounded-md' onClick={handleSentenceCase}>Sentence Case</button>
                    <button className='bg-orange-600 hover:bg-orange-500 py-2 px-4 text-white rounded-md' onClick={handleTitleCase}>Title Case</button>
                    <button className='bg-pink-600 hover:bg-pink-500 py-2 px-4 text-white rounded-md' onClick={handleInverseCase}>Inverse Case</button>
                    <button className='bg-red-600 hover:bg-red-500 py-2 px-4 text-white rounded-md' id='speakBtn' onClick={handleSpeakText}>Speak</button>
                </div>
                <div className='mt-6'>
                    <h3 className='text-gray-800 text-xl font-semibold mb-2'>Preview</h3>
                    <div onClick={handleCopyText} className='bg-white shadow-md p-4 rounded-lg whitespace-pre-wrap text-gray-700'>
                        {text === "" ? "Enter a piece of text above..." : text}
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/4 p-4 mt-6 md:mt-0 bg-white shadow-md rounded-lg'>
                <h3 className='text-gray-800 text-xl font-semibold mb-4'>Text Summary</h3>
                <table className='table-auto w-full text-left text-gray-700'>
                    <tbody>
                        <tr>
                            <td className='font-bold'>Characters (with spaces):</td>
                            <td>{text.length}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Characters (without spaces):</td>
                            <td>{text.replace(/\s+/g, '').length}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Words:</td>
                            <td>{text.split(/\s+/).filter(word => word.length > 0).length}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Unique Words:</td>
                            <td>{countUniqueWords()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Reading Time:</td>
                            <td>{calculateReadingTime()} sec</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Speaking Time:</td>
                            <td>{calculateSpeakingTime()} sec</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Longest Sentence (words):</td>
                            <td>{longestSentence()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Shortest Sentence (words):</td>
                            <td>{shortestSentence()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Total Sentences:</td>
                            <td>{countSentences()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Average Sentence Length (chars):</td>
                            <td>{avgSentenceLengthChars()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Average Sentence Length (words):</td>
                            <td>{avgSentenceLengthWords()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Lines:</td>
                            <td>{countLines()}</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Average Word Length (chars):</td>
                            <td>{avgWordLength()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
