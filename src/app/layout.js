import localFont from "next/font/local";
import "./globals.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/userProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
