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
    function handleSpeakText() {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
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
        return words.length > 0 ? (totalChars / words.length).toFixed(2) : 0; // Return 0 if no words
    }
    function avgSentenceLengthChars() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const totalChars = sentences.reduce((sum, sentence) => sum + sentence.length, 0);
        return sentences.length > 0 ? (totalChars / sentences.length).toFixed(2) : 0; // Return 0 if no sentences
    }
    function avgSentenceLengthWords() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const totalWords = sentences.reduce((sum, sentence) => sum + sentence.split(/\s+/).length, 0);
        return sentences.length > 0 ? (totalWords / sentences.length).toFixed(2) : 0; // Return 0 if no sentences
    }
    function shortestSentence() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        const shortest = sentences.reduce((min, sentence) => Math.min(min, sentence.split(/\s+/).length), Infinity);
        return shortest === Infinity ? 0 : shortest; // Return 0 if no sentences are found
    }
    function countSentences() {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        return sentences.length;
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
        <div className='bg-blue-200 min-h-screen flex flex-col md:flex-row'>
            <div className='w-full md:w-3/4 p-4 flex flex-col'>
                <div className='flex-grow'>
                    <h2 className='text-black text-xl mb-4 italic'>Enter Your Text Below</h2>
                    <div className='flex-grow'>
                        <textarea
                            className='bg-blue-50 w-full h-[60vh] p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300'
                            placeholder='Enter a piece of text here...' value={text} onChange={handleOnChange}
                        ></textarea>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 my-4'>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' id='copy-btn' onClick={handleCopyText}> Copy Text </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleClearText}> Clear </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleToUpperCase}> UPPER CASE </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleToLowerCase}> lower case </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleSentenceCase}> Sentence case </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleTitleCase}> Title Case </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleInverseCase}> inverse Case </button>
                            <button className='bg-[#1E293B] py-2 px-4 text-sm rounded-md text-blue-200' onClick={handleSpeakText}> Speak </button>

                        </div>

                        <div className=''>

                            <div className='text-2xl pt-3 mb-2 border-t-2 border-slate-900 italic'>Preview</div>
                            <div onClick={handleCopyText} className='w-full bg-blue-50 text-wrap px-2 py-4 text-md rounded-lg whitespace-pre-wrap'>
                                {text === "" ? "Enter a piece of text Above..." : text}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-blue-200 border-l-2 border-slate-800 w-full md:w-1/4 p-4 flex flex-col'>
                <h1 className='my-1 italic text-black text-xl mb-4'>Word Summary Report</h1>
                <table className='table-auto w-full'>
                    <tbody>

                        <tr>
                            <td className='text-black font-bold'>Character (with spaces):</td>
                            <td>{text.length}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Character (without spaces):</td>
                            <td>{text.replace(/\s+/g, '').length}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Words:</td>
                            <td>{text === "" ? 0 : text.split(/\s+/).filter(word => word.length > 0).length}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Unique Words:</td>
                            <td>{countUniqueWords()}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Reading Time:</td>
                            <td>{calculateReadingTime()} sec</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Speaking Time:</td>
                            <td>{calculateSpeakingTime()} sec</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Longest Sentence (words):</td>
                            <td>{longestSentence()}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Shortest Sentence (words):</td>
                            <td>{shortestSentence()}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Avg. Sentence (words):</td>
                            <td>{avgSentenceLengthWords()}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Avg. Sentence (chars):</td>
                            <td>{avgSentenceLengthChars()}</td>
                        </tr>
                        <tr>
                            <td className='text-black font-bold'>Avg. word length:</td>
                            <td>{avgWordLength()}</td>
                        </tr>

                        <tr>
                            <td className='text-black font-bold'>Lines:</td>
                            <td>{countLines()}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
