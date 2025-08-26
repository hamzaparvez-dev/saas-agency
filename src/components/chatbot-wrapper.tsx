'use client';

import { useEffect } from 'react';

export default function ChatbotWrapper() {
  useEffect(() => {
    // Initialize the WriteSonic bot
    const script = document.createElement('script');
    script.innerHTML = `
      (function (w, d, s, o, f, js, fjs) {
        w["botsonic_widget"] = o;
        w[o] =
          w[o] ||
          function () {
            (w[o].q = w[o].q || []).push(arguments);
          };
        (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");
      Botsonic("init", {
        serviceBaseUrl: "https://api-bot.writesonic.com",
        token: "f9d5fa2f-3062-4676-a8e2-3b66cf2d5bcd",
      });
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.getElementById('Botsonic');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <iframe 
      style={{height: '100vh', width: '100vw'}} 
      frameBorder="0" 
      src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-bot.writesonic.com&token=f9d5fa2f-3062-4676-a8e2-3b66cf2d5bcd&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2Fe4a3327d-4ea6-4090-81a7-ee8046868bee%2Fconnect%3Ftab%3Dembeddings"
    />
  );
}
