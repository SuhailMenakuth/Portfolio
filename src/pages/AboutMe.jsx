import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';


const AboutMe = () => {
  return (
   <div className="mx-auto w-75 p-3 fade-in">
      <div className="d-flex flex-column align-items-center">

        {/* Profile Image */}
        <img
          src="/assets/images/suahil.JPG"
          alt="Suhail"
          className="rounded-circle img-fluid mb-4"
          width="180"
          height="180"
        />

        {/* Name */}
        <h1 className="fs-2 fw-bold mb-4 responsive-heading text-center">
          Mohammed Suhail Menakuth
        </h1>

    

        {/* Bio */}
        <p className="text-center lh-lg mb-5" style={{ width: '65%' }}>
          I’m an aspiring full-stack developer passionate about building modern
          web applications using React and .NET technologies. I love learning new
          tools, solving problems, and turning ideas into reality through code.
          I’m from Malabar, India.
        </p>

        {/* “Did these along the way” */}
        <h4 className="text-uppercase fw-semibold mb-3 text-center">
          Did These Along the Way
        </h4>
        <ul className="list-unstyled lh-lg mb-5">
          <li className="mb-2">
            2024 July – Graduated B.Tech in CS
          </li>
          <li className="mb-2">
            2024 August – Attended bootcamp conducted by BridgeOn Solutions
          </li>
          <li className="mb-2">
            Created multiple projects
          </li>
        </ul>

        {/* “.NET Content Creators I Follow” */}
        <h4 className="text-uppercase fw-semibold mb-3 text-center">
          .NET Content Creators I Follow
        </h4>
        <ul className="list-unstyled lh-lg mb-5">
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/milan-jovanovic/"
              className="text-dark "
            >
              Milan Jovanović
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/pavledavitkovic/"
              className="text-dark "
            >
              Pavle Davitković
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/djokic-stefan/"
              className="text-dark "
            >
              Stefan Đokić
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/kavaan-damirchi/"
              className="text-dark "
            >
              Keivan Damirchi
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/nikola-knez/"
              className="text-dark "
            >
              Nikola Knežević
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/anton-martyniuk/"
              className="text-dark "
            >
              Anton Martyniuk
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="d-flex gap-5 mb-4">
          {/* Mail Icon */}
          <a
            href="mailto:suhailmenakuth@gmail.com"
            className="text-dark fs-3"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/suhail-menakuth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-3"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/SuhailMenakuth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-3"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </div>  
  )
}

export default AboutMe
