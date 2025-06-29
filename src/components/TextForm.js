import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here.....');

    // Copy to clipboard functionality
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard!", "success");
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                props.showAlert("Text copied to clipboard!", "success");
            } catch (fallbackErr) {
                props.showAlert("Failed to copy text!", "danger");
            }
            document.body.removeChild(textArea);
        }
    };

    // Download as text file
    const downloadAsFile = () => {
        if (text.trim() === '' || text === 'Enter Text here.....') {
            props.showAlert("No text to download!", "warning");
            return;
        }

        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        element.download = `textutils-${timestamp}.txt`;
        
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        
        // Clean up the URL object
        URL.revokeObjectURL(element.href);
        
        props.showAlert("File downloaded successfully!", "success");
    };

    // Download as different formats
    const downloadAsJSON = () => {
        if (text.trim() === '' || text === 'Enter Text here.....') {
            props.showAlert("No text to download!", "warning");
            return;
        }

        const stats = getTextStats();
        const jsonData = {
            text: text,
            statistics: stats,
            timestamp: new Date().toISOString(),
            generatedBy: "TextUtils React App"
        };

        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        element.download = `textutils-data-${timestamp}.json`;
        
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        
        URL.revokeObjectURL(element.href);
        props.showAlert("JSON file downloaded successfully!", "success");
    };

    // Enhanced text statistics calculation
    const getTextStats = () => {
        const trimmedText = text.trim();
        
        if (!trimmedText || trimmedText === 'Enter Text here.....') {
            return {
                characters: 0,
                charactersNoSpaces: 0,
                words: 0,
                sentences: 0,
                paragraphs: 0,
                lines: 0,
                averageWordsPerSentence: 0,
                averageCharsPerWord: 0,
                readingTime: 0,
                speakingTime: 0,
                mostCommonWord: '',
                wordFrequency: {},
                longestWord: '',
                shortestWord: ''
        };
        }

        // Basic counts
        const characters = text.length;
        const charactersNoSpaces = text.replace(/\s/g, '').length;
        const words = trimmedText.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
        const lines = text.split('\n').length;

        // Advanced calculations
        const averageWordsPerSentence = sentences > 0 ? Math.round((wordCount / sentences) * 10) / 10 : 0;
        const averageCharsPerWord = wordCount > 0 ? Math.round((charactersNoSpaces / wordCount) * 10) / 10 : 0;
        
        // Reading time (average 200 words per minute)
        const readingTime = Math.ceil(wordCount / 200);
        
        // Speaking time (average 150 words per minute)
        const speakingTime = Math.ceil(wordCount / 150);

        // Word frequency analysis
        const wordFrequency = {};
        const cleanWords = words.map(word => word.toLowerCase().replace(/[^\w]/g, ''));
        
        cleanWords.forEach(word => {
            if (word.length > 0) {
                wordFrequency[word] = (wordFrequency[word] || 0) + 1;
            }
        });

        // Most common word
        const mostCommonWord = Object.keys(wordFrequency).reduce((a, b) => 
            wordFrequency[a] > wordFrequency[b] ? a : b, ''
        );

        // Longest and shortest words
        const wordLengths = cleanWords.filter(word => word.length > 0);
        const longestWord = wordLengths.reduce((a, b) => a.length > b.length ? a : b, '');
        const shortestWord = wordLengths.reduce((a, b) => a.length < b.length ? a : b, '');

        return {
            characters,
            charactersNoSpaces,
            words: wordCount,
            sentences,
            paragraphs,
            lines,
            averageWordsPerSentence,
            averageCharsPerWord,
            readingTime,
            speakingTime,
            mostCommonWord,
            wordFrequency,
            longestWord,
            shortestWord
        };
    };

    const handleUpClick = () => {
        console.log("Uppercase button click...!!");
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success");
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!", "success");
    };

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared!", "success");
    };

    const handleOnChange = (event) => {
        console.log("OnChange...!!");
        setText(event.target.value);
    };

    const handleTextClick = () => {
        if (text === 'Enter Text here.....') {
            setText('');
        }
    };

    const stats = getTextStats();

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        <h2>{props.heading}</h2>
                    </label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                        onClick={handleTextClick}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',
                            border: props.mode === 'dark' ? '1px solid #6c757d' : '1px solid #ced4da'
                        }}
                        placeholder="Enter your text here..."
                    />
                </div>

                {/* Action Buttons */}
                <div className="mb-3">
                    <div className="btn-group me-2 mb-2" role="group">
                        <button className="btn btn-primary" onClick={handleUpClick} disabled={text.length === 0}>
                            <i className="fas fa-arrow-up"></i> Uppercase
                        </button>
                        <button className="btn btn-primary" onClick={handleLowClick} disabled={text.length === 0}>
                            <i className="fas fa-arrow-down"></i> Lowercase
                        </button>
                        <button className="btn btn-warning" onClick={handleClearClick} disabled={text.length === 0}>
                            <i className="fas fa-trash"></i> Clear
                        </button>
                    </div>

                    <div className="btn-group me-2 mb-2" role="group">
                        <button 
                            className="btn btn-success" 
                            onClick={copyToClipboard} 
                            disabled={text.length === 0 || text === 'Enter Text here.....'}
                        >
                            <i className="fas fa-copy"></i> Copy Text
                        </button>
                        <button 
                            className="btn btn-info" 
                            onClick={downloadAsFile} 
                            disabled={text.length === 0 || text === 'Enter Text here.....'}
                        >
                            <i className="fas fa-download"></i> Download TXT
                        </button>
                        <button 
                            className="btn btn-secondary" 
                            onClick={downloadAsJSON} 
                            disabled={text.length === 0 || text === 'Enter Text here.....'}
                        >
                            <i className="fas fa-file-code"></i> Download JSON
                        </button>
                    </div>
                </div>
            </div>

            {/* Enhanced Statistics Section */}
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="mb-4">
                    <i className="fas fa-chart-bar"></i> Text Analysis & Statistics
                </h2>
                
                <div className="row">
                    {/* Basic Statistics */}
                    <div className="col-md-6 mb-4">
                        <div className={`card h-100 ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    <i className="fas fa-calculator"></i> Basic Statistics
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="stat-item mb-3">
                                            <div className="stat-number text-primary fs-4 fw-bold">{stats.characters}</div>
                                            <div className="stat-label text-muted">Total Characters</div>
                                        </div>
                                        <div className="stat-item mb-3">
                                            <div className="stat-number text-success fs-4 fw-bold">{stats.words}</div>
                                            <div className="stat-label text-muted">Words</div>
                                        </div>
                                        <div className="stat-item mb-3">
                                            <div className="stat-number text-warning fs-4 fw-bold">{stats.sentences}</div>
                                            <div className="stat-label text-muted">Sentences</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="stat-item mb-3">
                                            <div className="stat-number text-info fs-4 fw-bold">{stats.charactersNoSpaces}</div>
                                            <div className="stat-label text-muted">Characters (no spaces)</div>
                                        </div>
                                        <div className="stat-item mb-3">
                                            <div className="stat-number text-danger fs-4 fw-bold">{stats.paragraphs}</div>
                                            <div className="stat-label text-muted">Paragraphs</div>
                                        </div>
                                        <div className="stat-item mb-3">
                                            <div className="stat-number text-secondary fs-4 fw-bold">{stats.lines}</div>
                                            <div className="stat-label text-muted">Lines</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Statistics */}
                    <div className="col-md-6 mb-4">
                        <div className={`card h-100 ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    <i className="fas fa-brain"></i> Advanced Analysis
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="stat-item mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Average Words/Sentence:</span>
                                        <span className="fw-bold text-primary">{stats.averageWordsPerSentence}</span>
                                    </div>
                                </div>
                                <div className="stat-item mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Average Chars/Word:</span>
                                        <span className="fw-bold text-success">{stats.averageCharsPerWord}</span>
                                    </div>
                                </div>
                                <div className="stat-item mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Most Common Word:</span>
                                        <span className="fw-bold text-warning">
                                            {stats.mostCommonWord || 'N/A'}
                                        </span>
                                    </div>
                                </div>
                                <div className="stat-item mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Longest Word:</span>
                                        <span className="fw-bold text-info">
                                            {stats.longestWord || 'N/A'} ({stats.longestWord.length})
                                        </span>
                                    </div>
                                </div>
                                <div className="stat-item mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Shortest Word:</span>
                                        <span className="fw-bold text-danger">
                                            {stats.shortestWord || 'N/A'} ({stats.shortestWord.length})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reading Time Statistics */}
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className={`card ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    <i className="fas fa-clock"></i> Time Estimates
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <div className="time-stat">
                                            <div className="time-number text-primary fs-3 fw-bold">
                                                {stats.readingTime}
                                            </div>
                                            <div className="time-label text-muted">
                                                <i className="fas fa-book-open"></i> Minutes to Read
                                            </div>
                                            <small className="text-muted d-block">@ 200 words/min</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="time-stat">
                                            <div className="time-number text-success fs-3 fw-bold">
                                                {stats.speakingTime}
                                            </div>
                                            <div className="time-label text-muted">
                                                <i className="fas fa-microphone"></i> Minutes to Speak
                                            </div>
                                            <small className="text-muted d-block">@ 150 words/min</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="time-stat">
                                            <div className="time-number text-warning fs-3 fw-bold">
                                                {Math.ceil(stats.words / 10)}
                                            </div>
                                            <div className="time-label text-muted">
                                                <i className="fas fa-keyboard"></i> Minutes to Type
                                            </div>
                                            <small className="text-muted d-block">@ 10 words/min</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Word Frequency (Top 5) */}
                {stats.words > 0 && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className={`card ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="fas fa-list-ol"></i> Top 5 Most Frequent Words
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {Object.entries(stats.wordFrequency)
                                            .sort(([,a], [,b]) => b - a)
                                            .slice(0, 5)
                                            .map(([word, count], index) => (
                                                <div key={word} className="col-md-2 col-sm-4 col-6 mb-3">
                                                    <div className="text-center">
                                                        <div className="badge bg-primary fs-6 mb-2">#{index + 1}</div>
                                                        <div className="fw-bold">{word}</div>
                                                        <div className="text-muted small">{count} times</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
