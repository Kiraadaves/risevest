import { LandingPage } from ".";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col gap-6  min-h-screen p-4 lg:px-16 lg:py-10 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="flex-grow">
        <LandingPage />
      </div>

      <Footer />
    </div>
  );
}
