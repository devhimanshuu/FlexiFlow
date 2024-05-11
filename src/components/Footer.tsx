import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="socialIcons flex gap-10">
        <span className="hover:text-rose-500">
          <a href="https://github.com/devhimanshuu">
            <FaGithub />
          </a>
        </span>
        <span className="hover:text-rose-500">
          <a href="https://techsphere.hashnode.dev/">
            <FaHashnode />
          </a>
        </span>
        <span className="hover:text-rose-500">
          <a href="https://twitter.com/devhimanshuu">
            <FaTwitter />
          </a>
        </span>
        <span className="hover:text-rose-500">
          <a href="https://www.linkedin.com/in/himanshu-guptaa/">
            <FaLinkedin />
          </a>
        </span>
      </div>
      <div className="">
        <p className="text-rose-500">Created By Himanshu Gupta</p>
      </div>
    </div>
  );
};

export default Footer;
