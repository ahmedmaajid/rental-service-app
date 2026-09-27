import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Rently — Local Rental Marketplace",
  description: "Find things available to rent near you from local providers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="inter-tight flex min-h-full flex-col font-sans">
        <Navbar />
        <div className="flex flex-1 flex-col pb-20 md:pb-0">{children}</div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
