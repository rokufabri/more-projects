import Image from "next/image";
import Navbar from "./components/Navbar";
import ProfileImage from "../assets/hero_image.jpg";
import './globals.css'
import About from "./views/about/page";
import Projects from "./views/projects/page";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="hero_main">
        <div className="hero">
          <span className="title">Im Fabrizio Quispe</span>
          <p className="descripcion">
            Full Stack Developer <span>.</span>
          </p>
          <button className="contact">Contactme</button>
        </div>
        <Image
          className="hero_images"
          src={ProfileImage}
          alt="Programador Web"
          width={600}
          height={400}
        />
      </section>
      <About/>
      <Projects/>
    </main>
  );
}
