import '../app/estilos.css'
import Navbar from './components/Navbar'
import Image from 'next/image';
import LogoMenu from '../assets/home_image.webp'
import About from './about/page';
import Projects from './projects/page';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className='home'>
        <Image src={LogoMenu} alt='Imagen de Home' />
        <div className='home_container'>
          <h2 className='title'>Desarrollador FullStack</h2>
          <p className='descripcion'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae quasi ratione aliquid quaerat ut iusto illum nam cum. Qui enim ea quasi, distinctio tempora fugiat explicabo eveniet in culpa.
            <br /><br />
            Asperiores mollitia similique deserunt a vitae accusantium, beatae consequuntur ipsa laudantium quia expedita, possimus tenetur? Eaque vitae placeat libero minus, neque, enim beatae eveniet doloremque eos distinctio maiores est sapiente?
          </p>
          <button className='button'>Download Resume</button>
        </div>
      </section>
      {/* Sección de Proyectos */}
      <Projects/>
    </main>
  )
}
