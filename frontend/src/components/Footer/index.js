

import githubLogo from '../../images/githublogo.png';

import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-container">

      {/* <div className="githubLogo"> */}
      <a href="https://github.com/Pixzzels">
        <img className="githubimg" src={githubLogo} alt="Github" />
      </a>
      {/* </div> */}

      <div className="footer-text">
        Etsy inspired clone
      </div>

    </footer>
  )
}

export default Footer;