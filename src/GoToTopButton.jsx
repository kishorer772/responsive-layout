import { useEffect, useState } from 'react';

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled enough to show the button
    function handleScroll() {
      if (window.pageYOffset > 300) {
        // Adjust this value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    // Event listener to handle scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling animation
    });
  };

  return (
    <button
      className={`go-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '1rem',
        border: 'none',
        borderRadius: '50%',
        marginBottom: '1rem',
        marginRight: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      Top
    </button>
  );
}
