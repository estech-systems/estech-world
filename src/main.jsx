import React from 'react';
import ReactDOM from 'react-dom/client';

const CyberLanding = () => {
    return React.createElement('div', { className: 'cyber-grid' },
        React.createElement('div', { className: 'hero-section' },
            // Glitch Effect Main Title
            React.createElement('div', { className: 'glitch-container' },
                React.createElement('h1', { 
                    className: 'glitch-text',
                    'data-text': 'eSTech Systems'
                }, 'eSTech Systems')
            ),
            
            // Subtitle
            React.createElement('p', { className: 'subtitle' }, 
                'Architecting the core infrastructure for a new digital era'
            ),
            
            // Animated Loader
            React.createElement('div', { className: 'cyber-loader' },
                React.createElement('div', { className: 'loader-progress' })
            ),
            
            // Ecosystem Showcase
            React.createElement('div', { className: 'ecosystem-grid' },
                // eSPay Card
                React.createElement('div', { className: 'ecosystem-card' },
                    React.createElement('h3', { className: 'card-title' }, 'eSPay'),
                    React.createElement('p', null, 
                        'Next-generation payment infrastructure revolutionizing digital transactions across Africa.'
                    )
                ),
                
                // eSSecure Card
                React.createElement('div', { className: 'ecosystem-card' },
                    React.createElement('h3', { className: 'card-title' }, 'eSSecure'),
                    React.createElement('p', null, 
                        'Enterprise-grade security systems protecting the future of digital identity and data.'
                    )
                ),
                
                // eSLearn Card
                React.createElement('div', { className: 'ecosystem-card' },
                    React.createElement('h3', { className: 'card-title' }, 'eSLearn'),
                    React.createElement('p', null, 
                        'Empowering the next generation of African tech talent through cutting-edge education.'
                    )
                )
            ),
            
            // Call to Action Section
            React.createElement('div', { className: 'cta-section' },
                React.createElement('h2', { style: { marginBottom: '2rem', color: '#ffd700' } }, 
                    'Join the Digital Revolution'
                ),
                React.createElement('form', { className: 'email-form' },
                    React.createElement('input', {
                        type: 'email',
                        placeholder: 'Enter your email for exclusive access',
                        className: 'email-input',
                        required: true
                    }),
                    React.createElement('button', {
                        type: 'submit',
                        className: 'cyber-button'
                    }, 'Get Early Access')
                )
            ),
            
            // Footer with Parent Brand
            React.createElement('div', { className: 'footer' },
                React.createElement('p', null, 
                    'Contact: ',
                    React.createElement('a', {
                        href: 'mailto:godwin.author@estech.cloud',
                        style: { color: '#00f5ff' }
                    }, 'godwin.author@estech.cloud')
                ),
                React.createElement('p', { className: 'parent-brand' }, 
                    'A G9TE WORLD Enterprise'
                ),
                React.createElement('p', { style: { marginTop: '1rem', opacity: '0.7' } }, 
                    '© 2025 eSTech Systems. All rights reserved.'
                )
            )
        )
    );
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(CyberLanding));
