import React from 'react';


import AWSImg from '../img/logo.png'
//import FreeImg from '../img/free_img.png'
import IBMImg from '../img/logo.png'
import GoogleImg from '../img/logo.png'
import MicrosoftImg from '../img/logo.png'




const posts = [
  {
    id: 1,

    company: 'Amazon Web Services',
    location: 'Earn a learning Badge',
    jobTitle: 'Cloud Essential Learning Plan',
    employmentType: 'Duration: 13hrs 35m',
    description: 'Learn AWS Cloud technology,foundational AWS Cloud concepts, AWS services, security,architecture, pricing, and support.',
    salary: 'FREE',
    image: AWSImg

  },

  {
    id: 2,
    company: 'International Business Machines-IBM',
    location: 'Earn Level 2 badge',
    jobTitle: 'Big Data 01',
    employmentType: 'Duration: 3hrs',
    description: 'Learn what is Big Data and Intro to tools like Apache Hadoop',
    salary: 'FREE',
    image: IBMImg
  },

  {
    id: 3,
    company: 'Microsoft',
    location: 'via classcentral.com',
    jobTitle: 'Artificial Intelligence on Microsoft Azure',
    employmentType: 'Duration: 1 week',
    description: 'Learn key AI concepts of machine learning, anomaly detection, computer vision, natural language processing, and conversational AI.',
    salary: 'FREE',
    image: MicrosoftImg
  },

  {
    id: 4,
    company: 'International Business Machines-IBM',
    location: 'via classcentral.com',
    jobTitle: 'Network Security & Database Vulnerabilities',
    employmentType: 'Duration: 15hrs',
    description: 'Learn  Local Area Networks, TCP/IP, the OSI Framework and routing basics,how networking affects security systems within an organization, network components that guard an organization from cybersecurity attacks.',
    salary: 'FREE',
    image: IBMImg
  },

  {
    id: 5,
    company: 'Google Cloud',
    location: 'via classcentral.com',
    jobTitle: 'Prepare for Google Cloud professional Data Engineer',
    employmentType: 'Duration: 6 weeks',
    description: 'Learn to qualify the exam on Data Engineer; Data Engineers are responsible for designing, building, and maintaining the infrastructure that supports data storage, processing, and retrieval.',
    salary: 'FREE',
    image: GoogleImg
  },

  {
    id: 6,
    company: 'Microsoft',
    location: 'via classcentral',
    jobTitle: 'Introduction to Computer and Operating Systems & Security',
    employmentType: 'Duration: 14hrs',
    description: 'Learn to identify the various components of a computer system,various components of a computer system interact with an operating system, basics of the cybersecurity landscape,& business computing environments',
    salary: 'FREE',
    image: MicrosoftImg
  },
  {
    id: 7,
    company: 'Microsoft',
    location: 'via classcentral',
    jobTitle: 'Introduction to Computer and Operating Systems & Security',
    employmentType: 'Duration: 14hrs',
    description: 'Learn to identify the various components of a computer system,various components of a computer system interact with an operating system, basics of the cybersecurity landscape,& business computing environments',
    salary: 'FREE',
    image: MicrosoftImg
  },
  {
    id: 8,
    company: 'Microsoft',
    location: 'via classcentral',
    jobTitle: 'Introduction to Computer and Operating Systems & Security',
    employmentType: 'Duration: 14hrs',
    description: 'Learn to identify the various components of a computer system,various components of a computer system interact with an operating system, basics of the cybersecurity landscape,& business computing environments',
    salary: 'FREE',
    image: MicrosoftImg
  },

];

const HomeCards = () => {
  const isMediumScreen = window.innerWidth >= 768; 



 

  const visiblePosts = isMediumScreen ? posts.slice(0, 8) : posts.slice(0, 3);


 

  
  return (
    <div className="w-full bg-[#fff] border ">
      <div className="p-9 h-full">
        <p className="text-[1.8rem] font-semibold" style={{marginBottom: '1.5rem'}}>
          <span className="text-lightPrimary">Workshops</span></p>
        
        <div className="h-full w-full grid md:grid-cols-4 gap-6 my-6 md:px-16">
          {visiblePosts.map(post => (

            <div key={post.id} className="md:w-300 p-8 min-w-260 bg-lightCard backdrop-blur-md rounded-3xl flex flex-col justify-center drop-shadow-lg gap-4 hover:scale-105 transition-all duration-300 border">
              {/*<img src="frontend/src/img/free_img.png" alt="corner-image" className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 object-cover"/>*/}

              <div className="flex">
                <img src={post.image} alt="logo" className="w-9 h-9 md:w-12 md:h-12 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110" />
                <div className="mx-3">
                  <p className="md:text-[1rem] text-[0.8rem] font-medium hover:text-lightPrimary hover:underline">{post.company}</p>
                  <p className="md:text-[0.7rem] text-[0.6rem] text-lighttextGray">{post.location}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">{post.jobTitle}</p>
                <p className="text-[0.7rem] text-lighttextGray">{post.employmentType}</p>
              </div>
              <p className="text-[0.7rem] text-justify font-medium">{post.description}</p>
              <div className="flex justify-between pb-4 gap-3">
                <p className="text-[0.7rem] text-lighttextGray">
                  <span className="text-xl font-bold text-lightModeTextColor">{post.salary}</span>
                </p>

                <div className="md:text-[0.9rem] text-[0.7rem] rounded-lg bg-lightBgBlue py-2 px-5 text-lightPrimary font-medium hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
                  Enroll Now
                </div>

                
              </div>
            </div>
          ))}
        </div>
        <p className="md:text-[lg] text-sm text-right text-lightPrimary cursor-pointer hover:text-lightModeTextColor">View all</p>
      </div>
    </div>
  );
};

export default HomeCards;
