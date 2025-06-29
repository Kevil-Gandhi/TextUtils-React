import React from 'react';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">
                    <i className="fas fa-text-width me-2"></i>
                    {props.title}
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <i className="fas fa-home me-1"></i>Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">
                                <i className="fas fa-cogs me-1"></i>Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                <i className="fas fa-info-circle me-1"></i>About
                            </a>
                        </li>
                    </ul>
                    
                    {/* Theme Toggle Switch */}
                    <div className="d-flex align-items-center">
                        <div className="form-check form-switch me-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                role="switch" 
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label 
                                className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} 
                                htmlFor="flexSwitchCheckDefault"
                            >
                                <i className={`fas ${props.mode === 'light' ? 'fa-moon' : 'fa-sun'} me-1`}></i>
                                {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
                            </label>
                        </div>
                        
                        {/* GitHub Link */}
                        <a 
                            href="https://github.com/Kalasoftware/TextUtils-React" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} btn-sm`}
                        >
                            <i className="fab fa-github me-1"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About'
};
