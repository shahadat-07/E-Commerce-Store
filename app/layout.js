import { Footer, Header, TopBar } from "@/components";
import "./globals.css";
import TopCartHeader from "@/components/Header/TopCartHeader";

export const metadata = {
  title: "E-Commerce Store",
  description: "Your One-Stop Destination for Style and Convenience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <TopBar />
        <TopCartHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
