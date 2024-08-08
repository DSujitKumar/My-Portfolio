import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As an Azure Integration Developer, I specialize in building and managing seamless connections between diverse systems and applications within the Azure cloud ecosystem. My role involves crafting robust integration solutions using Azure Integration Services like Logic Apps,Service Bus, and API Management etc. I excel in translating complex business requirements into efficient integration architectures. My responsibilities encompass designing, developing, testing, and deploying integration flows, ensuring optimal data transfer and process automation. I collaborate closely with business stakeholders and my teams to deliver reliable and scalable integration solutions that drive operational efficiency and business value.`;

export const ABOUT_TEXT = `I am a skilled Azure Integration Developer with a strong foundation in .NET Microservices. My expertise lies in building robust and scalable solutions that seamlessly connect diverse systems. I am proficient in designing and implementing integration architectures using Azure Integration Services, such as Logic Apps, Service Bus, and API Management. `;
export const ABOUT_TEXT1 = `My skill set extends to developing microservices using .NET, where I excel in creating RESTful APIs and designing efficient database structures using SQL Server. I am adept at translating complex business requirements into technical solutions, ensuring optimal data flow and process automation. With a focus on delivering high-quality, reliable systems, I am committed to staying updated with the latest industry trends and technologies.`;

export const EXPERIENCES = [
  {
    year: "Aug-2023 to Present",
    role: "Senior Software Engineer",
    company: "LTIMindtree (Bhubaneswar)",
    description: `Developed Azure Integration based application using Azure Pass services, Creating chatbot under Microsoft Bot Framework for the initial guidance of endusers. Developing .Net Based Microservices for easier implementation and uninterrupted buisness flows.`,
    technologies: ["Azure API Management", "Logic APP", "Service Bus", "Azure Bot Framework","Custom Question Answering"],
  },
  {
    year: "May-2022 to Aug-2023",
    role: "System Engineer",
    company: "Tata Consultancy Service Ltd.(Bhubaneswar)",
    description: `Integrating B2B and B2C logics using Azure Integration Services.Developing Parallel Tasks and Polly retries based function apps using C# .net 6. Developing .Net core Web APIS and Microservices by implementing Http Client Factory, SOLID Principles and CQRS mediator pattern. Writing XUnit Test cases, Mocking Test input parameters using Auto data and MOCK libraries. Analysing logs of different applications on Log Analytics and creating alerts according to the severity.`,
    technologies: ["Azure API Management", "Logic APP", "Service Bus", "Azure KeyVault","Azure Blob Storage","Function App",".Net 6","XUnit","Log Analytics","Rest API"],
  },
  {
    year: "July-2019 to May-2022",
    role: "Software Developer",
    company: "Exaosis Technologies Private Limited (Navi Mumbai, Maharashtra )",
    description: `Worked with clients and BA in collecting and understanding the requirements. Guiding the team to achieve the client’s requirements. Development and implementation of server-side applications.`,
    technologies: ["Python", "C#", ".Net Core 3.1", "Rest API","LINQ","Java Script","SQL Server","HTML","CSS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Pl No: 576, Nandankanan Road, Barang, Bhubaneswar, Odisha, 754005 ",
  phoneNo: "+91 07377115763 ",
  email: "sujitkudas08@gmail.com",
};
