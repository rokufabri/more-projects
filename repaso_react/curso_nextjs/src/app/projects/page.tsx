import '../estilos.css'
import LogoProjects from '../../assets/projects_image.jpg'
import Image from 'next/image'

 export default function Projects() {
  return (
    <main>
      <section className='projects'>
        <h2 className='title'>Gallery of Projects With Love </h2>
        <div className="container_projects">
          <Image src={LogoProjects} alt='Imagen para proyectos'/>
          <Image src={LogoProjects} alt='Imagen para proyectos'/>
          <Image src={LogoProjects} alt='Imagen para proyectos'/>
          <Image src={LogoProjects} alt='Imagen para proyectos'/>
          <Image src={LogoProjects} alt='Imagen para proyectos'/>
          <Image src={LogoProjects} alt='Imagen para proyectos'/>
        </div>
      </section>
    </main>
  )
}
