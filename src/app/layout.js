import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.elevate-mena.com"),
  title: {
    default: "Elevate - Training and Consultancy Dubai",
    template: "%s",
  },
  description:
    "Leading training and consultancy company in Dubai offering corporate training in leadership, sales, and productivity.",
  verification: {
    google: "PASTE_YOUR_VERIFICATION_CODE_HERE", // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
