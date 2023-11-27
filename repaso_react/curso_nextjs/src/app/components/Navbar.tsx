import React from 'react'
import Link from 'next/link'
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import {FaHome} from "react-icons/fa"
import Image from 'next/image';
import LogoMenu from '../../assets/code.svg'

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='menu'>
          <div className='menu_logo'>
            <Image src={LogoMenu} alt='Logo de la Web'/>
            <h2 className='logo_title'>FabrizioQR</h2>
          </div>
            <input type="checkbox" id='btnMenu'/>
            <label htmlFor="btnMenu"><AiOutlineMenuFold/></label>
            <ul className='menu_list'>
                <li><Link href='/'><FaHome/>Home</Link></li>
                <li><Link href='/about'><IoPersonSharp/>About</Link></li>
                <li><Link href='/services'><BsPersonWorkspace/>Services</Link></li>
                <li><Link href='/projects'><GoProjectSymlink/>Projects</Link></li>
                <li><Link href='/resume'><FaLinkedin/>Download Resume</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar