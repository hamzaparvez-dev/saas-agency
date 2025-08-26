'use client';

import { useEffect, useState } from 'react';

export default function ChatbotWrapper() {
  const [chatbotLoaded, setChatbotLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Check if we're on Vercel production
    const isVercel = window.location.hostname.includes('vercel.app') || 
                     window.location.hostname.includes('genuinestack.com') ||
                     process.env.NODE_ENV === 'production';

    if (isVercel) {
      // On Vercel, try a different approach
      const loadChatbotVercel = () => {
        try {
          // Create a container div first
          const container = document.createElement('div');
          container.id = 'chatbot-container';
          container.style.cssText = 'position:fixed;bottom:20px;right:20px;width:350px;height:500px;z-index:9999;';
          
          // Create the iframe with minimal attributes
          const iframe = document.createElement('iframe');
          iframe.style.cssText = 'width:100%;height:100%;border:none;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3);background-color:transparent;';
          iframe.frameBorder = '0';
          iframe.src = 'https://widget.botsonic.com/CDN/index.html?token=f9d5fa2f-3062-4676-a8e2-3b66cf2d5bcd&standalone=true';
          iframe.title = 'WriteSonic Chatbot';
          
          // Remove problematic attributes that Vercel blocks
          // iframe.allow = 'microphone; camera; geolocation';
          // iframe.referrerPolicy = 'no-referrer';
          // iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-modals';
          
          container.appendChild(iframe);
          document.body.appendChild(container);
          
          // Set success state
          setChatbotLoaded(true);
          
          // Add error handling
          iframe.onerror = () => {
            console.warn('Chatbot failed to load on Vercel');
            setShowFallback(true);
            container.remove();
          };
          
          // Add load success
          iframe.onload = () => {
            setChatbotLoaded(true);
            setShowFallback(false);
          };
          
          // Timeout fallback
          setTimeout(() => {
            if (!chatbotLoaded) {
              console.warn('Chatbot timeout on Vercel, showing fallback');
              setShowFallback(true);
              if (container.parentNode) {
                container.remove();
              }
            }
          }, 8000);
          
        } catch (error) {
          console.warn('Failed to load chatbot on Vercel:', error);
          setShowFallback(true);
        }
      };
      
      // Delay loading to ensure DOM is ready
      setTimeout(loadChatbotVercel, 1000);
    }
  }, [chatbotLoaded]);

  // Show fallback message if chatbot fails on Vercel
  if (showFallback) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-sm">💬</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Chatbot temporarily unavailable</p>
            <p className="text-xs text-gray-400">Please contact us directly</p>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while attempting to load
  if (!chatbotLoaded) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-white rounded-full animate-spin"></div>
            <span className="text-sm text-gray-600">Loading chatbot...</span>
          </div>
        </div>
      </div>
    );
  }

  // Chatbot loaded successfully
  return null;
}
