import React from 'react';

// A custom hook for the typewriter effect
const useTypewriter = (words, { loop = true, typeSpeed = 120, deleteSpeed = 50, delaySpeed = 1500 } = {}) => {
    const [text, setText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(typeSpeed);

    React.useEffect(() => {
        let handle;
        const currentWord = words[loopNum % words.length];

        // This function handles the typing logic
        const handleType = () => {
            if (isDeleting) {
                // Deleting logic
                setText(currentWord.substring(0, text.length - 1));
                setTypingSpeed(deleteSpeed);
            } else {
                // Typing logic
                setText(currentWord.substring(0, text.length + 1));
                setTypingSpeed(typeSpeed);
            }

            // When a word is fully typed
            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), delaySpeed);
            } 
            // When a word is fully deleted
            else if (isDeleting && text === '') {
                // If we are on the last word and looping is disabled, stop the effect.
                if (!loop && loopNum === words.length - 1) {
                    return; 
                }
                
                setIsDeleting(false);
                // Move to the next word in the array
                setLoopNum(loopNum + 1);
            }
        };

        // Set a timeout to call the typing handler
        handle = setTimeout(handleType, typingSpeed);

        // Cleanup function to clear timeout on component unmount
        return () => clearTimeout(handle);
    }, [text, isDeleting, loopNum, words, loop, typeSpeed, deleteSpeed, delaySpeed, typingSpeed]);

    return text;
};


function Hero() {
    // Array of phrases to be typed out
    const phrases = [
        "Hello, I'm Ninoska Peralta.",
        "Full-Stack Developer.",
        "Project Manager.",
        "ServiceNow CSA/CAD."
        
    ];
    
    const animatedText = useTypewriter(phrases);

    return (
        <>
          {/* Styles for the Hero section */}
          <style>{`
            .hero-section {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100vh; /* Full viewport height */
              text-align: center;
              padding: 0 2rem;
              background-color: #f8f9fa; /* Set a default background for the section */
            }
            .hero-text-container {
              padding: 3rem 4rem; /* Add padding around the text */
              border-radius: 10px; /* Optional: for rounded corners */
              color: #FFFFFF; /* Set text color to white for contrast */
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add shadow for readability */
              
              /* This is where the background image is now applied */
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/code_stock.jpg');
              background-size: cover;
              background-position: center;
            }
            .hero-section h1 {
              font-size: 2.5rem;
              margin-bottom: 1rem;
              font-weight: 700;
            }
            @media(min-width: 768px) {
                .hero-section h1 {
                    font-size: 4rem;
                }
            }
            .hero-section p {
              font-size: 1.25rem;
              max-width: 600px;
              color: #FFFFFF; /* Ensure paragraph text is also white */
            }
            .typewriter-cursor {
                border-left: 2px solid #FFFFFF; /* Make cursor white */
                animation: blink 0.7s steps(1) infinite;
            }
            @keyframes blink {
                50% {
                    border-color: transparent;
                }
            }
          `}</style>

          <section id="hero" className="hero-section">
            {/* This new div contains the text and has the background image */}
            
            <div className="hero-text-container">
              <h1>
                <span className="typewriter-text">{animatedText}</span>
                <span className="typewriter-cursor"></span>
              </h1>
              <p>A skilled Full-Stack Developer and Project Manager with a proven ability to deliver user-focused solutions and a passion for creating impactful digital experiences.</p>
            </div>
          </section>
        </>
    );
}

export default Hero;