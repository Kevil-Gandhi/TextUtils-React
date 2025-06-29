import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('textutils-theme');
    if (savedMode) {
      setMode(savedMode);
      document.body.style.backgroundColor = savedMode === 'dark' ? '#212529' : 'white';
      document.body.style.color = savedMode === 'dark' ? 'white' : 'black';
    }
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      localStorage.setItem('textutils-theme', 'dark');
      
      // Add some visual feedback
      document.body.style.transition = 'all 0.3s ease-in-out';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
      localStorage.setItem('textutils-theme', 'light');
      
      // Add some visual feedback
      document.body.style.transition = 'all 0.3s ease-in-out';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      {/* Hero Section */}
      <div className="container-fluid py-5" style={{ 
        background: mode === 'dark' 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">
            <i className="fas fa-text-width me-3"></i>
            TextUtils - Advanced Text Analyzer
          </h1>
          <p className="lead mb-4">
            Transform, analyze, and manipulate your text with powerful tools. 
            Get detailed statistics, copy to clipboard, and download your processed text.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <span className="badge bg-light text-dark fs-6 px-3 py-2">
                  <i className="fas fa-chart-bar me-1"></i>Advanced Statistics
                </span>
                <span className="badge bg-light text-dark fs-6 px-3 py-2">
                  <i className="fas fa-copy me-1"></i>One-Click Copy
                </span>
                <span className="badge bg-light text-dark fs-6 px-3 py-2">
                  <i className="fas fa-download me-1"></i>Multiple Download Formats
                </span>
                <span className="badge bg-light text-dark fs-6 px-3 py-2">
                  <i className="fas fa-moon me-1"></i>Dark/Light Theme
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <TextForm 
          showAlert={showAlert} 
          heading="Enter the text to analyze below" 
          mode={mode} 
        />
      </div>

      {/* Features Section */}
      <div id="features" className={`py-5 ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-star me-2"></i>
            Key Features
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className={`card h-100 ${mode === 'dark' ? 'bg-secondary text-white' : ''}`}>
                <div className="card-body text-center">
                  <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Advanced Analytics</h5>
                  <p className="card-text">
                    Get comprehensive text statistics including word frequency, 
                    reading time, and advanced metrics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={`card h-100 ${mode === 'dark' ? 'bg-secondary text-white' : ''}`}>
                <div className="card-body text-center">
                  <i className="fas fa-magic fa-3x text-success mb-3"></i>
                  <h5 className="card-title">Text Transformation</h5>
                  <p className="card-text">
                    Convert text to uppercase, lowercase, and clear text with 
                    instant feedback and validation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={`card h-100 ${mode === 'dark' ? 'bg-secondary text-white' : ''}`}>
                <div className="card-body text-center">
                  <i className="fas fa-download fa-3x text-warning mb-3"></i>
                  <h5 className="card-title">Export Options</h5>
                  <p className="card-text">
                    Copy to clipboard instantly or download as TXT or JSON 
                    with complete statistics included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">
                <i className="fas fa-info-circle me-2"></i>
                About TextUtils
              </h2>
              <p className="lead">
                TextUtils is a powerful, feature-rich text manipulation and analysis tool 
                built with React and Bootstrap. It provides comprehensive text statistics, 
                transformation capabilities, and export options.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Real-time text analysis and statistics
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Multiple text transformation options
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Copy to clipboard functionality
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Download in multiple formats (TXT, JSON)
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Dark/Light theme support
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  Responsive design for all devices
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className={`card ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-code me-2"></i>
                    Technical Details
                  </h5>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <div className="fw-bold text-primary">Frontend</div>
                        <div>React 18.x</div>
                      </div>
                      <div className="mb-3">
                        <div className="fw-bold text-success">Styling</div>
                        <div>Bootstrap 5.x</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <div className="fw-bold text-warning">Icons</div>
                        <div>Font Awesome</div>
                      </div>
                      <div className="mb-3">
                        <div className="fw-bold text-info">Features</div>
                        <div>PWA Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-4 ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="container text-center">
          <p className="mb-2">
            <strong>TextUtils</strong> - Advanced Text Analysis Tool
          </p>
          <p className="text-muted mb-0">
            Built with <i className="fas fa-heart text-danger"></i> using React & Bootstrap
          </p>
          <div className="mt-3">
            <a 
              href="https://github.com/Kalasoftware/TextUtils-React" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`btn btn-outline-${mode === 'dark' ? 'light' : 'dark'} btn-sm me-2`}
            >
              <i className="fab fa-github me-1"></i>
              View on GitHub
            </a>
            <span className="text-muted">
              © 2024 TextUtils. Open Source Project.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
