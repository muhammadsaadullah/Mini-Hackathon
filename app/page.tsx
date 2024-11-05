import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Featuring from "./components/Featuring";



export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Featuring />
    </div>
  );
}
