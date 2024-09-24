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