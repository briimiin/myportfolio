import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    back,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    lovew,
    love
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },

    {
      id: "contact",
      title: "Contact",
    },
  
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
      {
        title: "Junior Developer",
        company_name: "Personal Projects",
       icon: tesla,
        iconBg: "#383E56",
        date: "February 2024 - Present",
        points: [
          "Developed and maintained web applications using React.js, JavaScript, HTML, and CSS.",
          "Created and implemented dark mode and light mode themes in React applications to enhance user experience.",
          "Built a space-themed application, integrating features like a search button and fetching data from external APIs.",
          "Designed and developed an e-commerce site with a focus on user-friendly interface and payment gateway integration.",
          "Collaborated with fellow developers on open-source projects, participating in code reviews, and contributing to project documentation.",
          "Implemented responsive design practices to ensure cross-browser compatibility and optimal performance on various devices.",
          "Developed a task management application with features like task deletion, priority selection, sorting, and editing using JavaScript.",
          "Contributed to coding challenges and hackathons to stay up-to-date with industry trends and improve problem-solving skills."
        ],
      },
     {title: "React.js Developer",
      company_name: "Personal projects",
      icon: starbucks,
      iconBg: "#383E56",
      date: "sep 2023 - jan 2024",
      points: [
          "Developed and deployed multiple web applications using React.js, HTML, CSS, and JavaScript.",
          "Utilized RESTful APIs to fetch and display data, enhancing the functionality of web applications.",
          "Implemented responsive design principles to ensure optimal user experience across desktop and mobile devices.",
          "Collaborated with clients to understand project requirements and deliver solutions that meet their needs.",
          "Tested and debugged code to ensure high performance and reliability of web applications.",
          "Continuously learned and adopted new technologies to improve development skills and stay current with industry trends.",
          "Participated in online coding communities, sharing knowledge and learning from other developers.",
          
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - Jan 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "Huyo jamaa ni mnomaa!!.",
      name: "Asap Royco",
      designation: "CEO",
      company: " Fenty Madre Co",
      image: "https://compote.slate.com/images/2503cf5f-09a1-4ec1-a0fa-5d941010544c.jpeg?crop=6000%2C4000%2Cx0%2Cy0&width=840",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Brimin does.",
      name: "Elon vans",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Brimin optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nasa APOD",
      description:
        "Web-based platform that that fetches data from NASA API and allows users to search nasa pictures of the day.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: back,
      source_code_link: "https://github.com/briimiin/Phase-1-Independent-project",
    },
    {
      name: "FindingMapenzi",
      description:
        "Web application that enables users to find love with food. The lovers get to choose and rate their favourite food",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: lovew,
      source_code_link: "https://github.com/two23three/findingMapenzi",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };