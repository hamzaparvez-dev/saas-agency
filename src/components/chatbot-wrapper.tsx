'use client';

export default function ChatbotWrapper() {
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
