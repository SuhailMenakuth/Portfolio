import React from 'react';

const projects = [
  {
    name: 'Interview Ready - Mock Interview Platform',
    description:
    'A microservice-based web platform where candidates can book mock interviews with industry professionals and receive feedback.',
    techStack: ['React', 'Redux', 'Tailwind CSS', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'MediatR', 'CQRS', 'FluentEmail', 'FluentValidation', 'AutoMapper', 'MassTransit','Serilog'],
    learned:
    'Learned CQRS with MediatR, layered API development, advanced routing in React, and styling with Tailwind.',
    github: 'https://github.com/SuhailMenakuth/InterviewReady.API',
  },
  {
    name: 'Labour Link - Job Platform',
    description:
    'A microservice-based job matching platform for daily wage laborers and clients',
    techStack: ['React', 'Redux', 'Tailwind CSS', 'ASP.NET Core', 'SQL Server', 'Entity Framework','RabbitMQ'],
    learned:
    'Understood distributed system design, message queues, containerization, and real-time architecture.',
    github: 'https://github.com/orgs/Lbrlnk/repositories',
  },
  {
    name: 'Kaalcharakk - E-commerce API',
    description:
      'A full-featured e-commerce backend built using ASP.NET Core Web API using 3 tire architecture',
    techStack: ['ASP.NET Core', 'Entity Framework', 'Cloudinary', 'JWT Auth', 'Swagger'],
    learned:
      'Gained experience in modular architecture, image upload handling, user authentication, and Entity Framework.',
    github: 'https://github.com/SuhailMenakuth/Kaalcharakk-Ecommerce-Backend',
  },
];

const Project = () => {
  return (
    <div className="container my-5 w-75 mx-auto">
      

      {projects.map((project, index) => (
        <div className=" mx-auto  mb-5 p-4 bg-light rounded shadow-sm " key={index}>
          <h4 className="fw-bold ">{project.name}</h4>
          <p className="mb-2 lh-lg">{project.description}</p>

          <h6 className="fw-semibold text-uppercase mt-4">Technologies Used</h6>
          <ul className="mb-3 lh-lg">
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

          {/* <h6 className="fw-semibold text-uppercase">What I Learned</h6>
          <p className="lh-lg mb-3">{project.learned}</p> */}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
          >
            View GitHub Repo
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
