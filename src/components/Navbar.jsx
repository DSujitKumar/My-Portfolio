import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target="_blank" href="https://github.com/DSujitKumar" ><FaGithub/></a>
                <a target="_blank" href="http://www.linkedin.com/in/dsujit"> <FaLinkedin/></a>
                <FaInstagram/>
                <a href="https://x.com/SujitKuDas_22" target="_blank"><FaSquareXTwitter/></a>
            </div>
    </nav>;
}

export default Navbar

