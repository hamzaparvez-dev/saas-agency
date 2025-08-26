import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import ClientWrapper from "@/components/client-wrapper";

// Local font configuration
const font = {
  className: 'font-poppins',
  variable: '--font-poppins'
};

export const metadata: Metadata = {
  // Add this line
  metadataBase: new URL('https://your-domain.com'), 
  
  title: "SaaS Agency - Custom Software Development & AI Solutions",
  description: "Professional SaaS development agency specializing in custom software, API development, MVP creation, enterprise websites, and AI automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${font.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </body>
    </html>
  );
}
