import Image from "next/image";
import "./globals.css";
import Navbar from "./Components/Navabr/Navbar.jsx";
// import FirstSection from "./Components/FirstSection/FirstSection.jsx";
import SecorndSection from "./Components/SecorndSection/SecorndSection.jsx";
import ThirdSection from "./Components/ThirdSection/ThirdSection.jsx";
import FourthSection from "./Components/FourthSection/FourthSection.jsx";
import Firstsection from "./Components/FirstSection/Firstsection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.jpg" // Your image in public folder
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay */}
      </div>
      
      <main className="relative">
        <Navbar/>
        <Firstsection/>
        {/* <FirstSection/> */}
         <SecorndSection/>
         <ThirdSection/>
         <FourthSection/>
      </main>
    </div>
  );
}