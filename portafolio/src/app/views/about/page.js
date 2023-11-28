import Navbar from "@/app/components/Navbar";
import AboutProfile from "../../../assets/aboutme_image.jpg"
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="about">
      <h2 className="title">About Me</h2>
      <article className="descripcion">

        <div className="me">
          <h3 className="subtitle">My Name is <span className="name">Fabrizio Quispe</span></h3>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Donec mollis nisi eu semper blandit. Curabitur vehicula blandit ante non tempus.
          Etiam interdum mollis nisl, a lacinia metus ultrices non. Donec at felis vel lectus fermentum bibendum.
          Nulla molestie risus at odio posuere, eget elementum mi pulvinar. Aliquam turpis lacus, fringilla id nulla sollicitudin, congue aliquet neque
          </span>
          <div className="personal">
            <div>
              <span>Name</span>
              <br/>
              <span>Fabrizio Quispe</span>
            </div>
            <div>
              <span>Phone</span>
              <br/>
              <span>963035217</span>
            </div>
            <div>
              <span>Country</span>
              <br/>
              <span>Perú</span>
            </div>
            <div>
              <span>Email</span>
              <br/>
              <span>fabrizioquispepersonal@gmail.com</span>
            </div>
            <div>
              <span>Education</span>
              <br/>
              <span>SENATI</span>
            </div>
            <div>
              <span>GitHub</span>
              <br/>
              <span><Link href='https://github.com/rokufabri/rokufabri' target="__blank">Portafolio</Link></span>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="images"
            src={AboutProfile}
            alt="Fabrizio Alekzander Quispe Rueda"
            width={500}
            height={500}
          />
        </div>
      </article>
    </section>
  );
}
