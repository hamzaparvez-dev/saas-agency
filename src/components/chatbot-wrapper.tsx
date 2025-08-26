'use client';

import { useEffect, useState } from 'react';

export default function ChatbotWrapper() {
  const [isProduction, setIsProduction] = useState(false);
  const [chatbotLoaded, setChatbotLoaded] = useState(false);

  useEffect(() => {
    // Detect if we're in production
    const isProd = process.env.NODE_ENV === 'production' || 
                   (window.location.hostname !== 'localhost' && 
                    window.location.hostname !== '127.0.0.1');
    setIsProduction(isProd);

    if (isProd) {
      // In production, try to load the chatbot with error handling
      const loadChatbot = async () => {
        try {
          // Try to create a simple iframe first
          const iframe = document.createElement('iframe');
          iframe.style.cssText = 'position:fixed;bottom:20px;right:20px;width:350px;height:500px;border:none;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3);z-index:9999;background-color:transparent;';
          iframe.frameBorder = '0';
          iframe.src = 'https://widget.botsonic.com/CDN/index.html?token=f9d5fa2f-3062-4676-a8e2-3b66cf2d5bcd&standalone=true';
          iframe.title = 'WriteSonic Chatbot';
          iframe.allow = 'microphone; camera; geolocation';
          iframe.referrerPolicy = 'no-referrer';
          iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-modals';
          
          // Add error handling
          iframe.onerror = () => {
            console.warn('Chatbot iframe failed to load');
            setChatbotLoaded(false);
          };
          
          iframe.onload = () => {
            setChatbotLoaded(true);
          };
          
          document.body.appendChild(iframe);
          
          // Set a timeout to check if it loaded
          setTimeout(() => {
            if (!chatbotLoaded) {
              console.warn('Chatbot loading timeout, removing iframe');
              iframe.remove();
              setChatbotLoaded(false);
            }
          }, 10000); // 10 second timeout
          
        } catch (error) {
          console.warn('Failed to load chatbot:', error);
          setChatbotLoaded(false);
        }
      };
      
      loadChatbot();
    }
  }, [chatbotLoaded]);

  // In development, show the normal iframe
  if (!isProduction) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <iframe 
          style={{ 
            height: '500px', 
            width: '350px', 
            border: 'none', 
            borderRadius: '12px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            backgroundColor: 'transparent'
          }}
          frameBorder="0" 
          src="https://widget.botsonic.com/CDN/index.html?token=f9d5fa2f-3062-4676-a8e2-3b66cf2d5bcd&standalone=true"
          title="WriteSonic Chatbot"
          allow="microphone; camera; geolocation"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>
    );
  }

  // In production, show loading state or nothing if failed
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

  // Chatbot loaded successfully in production
  return null;
}
