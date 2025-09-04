import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
