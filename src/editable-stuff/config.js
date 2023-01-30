// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Poonamben",
  middleName: "R",
  lastName: "Patel",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Poonam52",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/poonam.patel.18400700/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/poonampatel7428/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/poonam-patel-925ba186/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/poonampatel/",
    // },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Poonam_prof.jpeg"),
  imageSize: 375,
  message:
    "My name is Poonamben Patel. I will be graduating of 2023 from seattle University of Sciences and Technology  with a degree in  Master of Computer Science. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time i would like to learn more about the new technology like AI and data.",
  resume: "https://drive.google.com/file/d/1W9KLju4YIg2pYD2ywQ6AxanA9UVLGvRL/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "poonam52", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["myPhotoshop","Team_01_Tic_Tac_Toe","AmazonAutomationProject","Distributed_CPSC5520"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Poonam_prof.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Poonam_prof.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 90 },
    { name: "API", value: 80 },
    { name: "Python", value: 70 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 70 },
    { name: "C/C++", value: 40 },
    { name: "Jquery", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "poonampatel52@ymail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Web developer',// Here Add Company Name
      companylogo: require('../assets/img/zofax.png'),
      date: 'March 2018 – oct 2021',
    },
    {
      role: 'Web and mobile app Developer',
      companylogo: require('../assets/img/techno.png'),
      date: 'April 2016 – March 2018',
    },
    {
      role: 'Sr. Sofware engineer',
      companylogo: require('../assets/img/nexuslink.png'),
      date: 'March 2018 – Oct 2021',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
