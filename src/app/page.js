import ActionSection from "./components/ActionSection";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export const metadata = {
  title: "Home : Work Manager",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Banner />
    <Features />
    <ActionSection />
    <Testimonials />
    <ContactForm />
  </div>
  );
}
