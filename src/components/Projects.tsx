
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
   {
    id: 1,
    title: 'GrubGo',
    description: 'A modern food delivery website built with React which fetches live REST API data to dynamically render restaurant',
    image: '/food.png',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', "REST API", "Redux"],
    liveUrl: 'https://grub-go-pi.vercel.app/',
    githubUrl: 'https://github.com/rjritesh/GrubGo',
  },
  {
    id: 2,
    title: 'Barber & Salon Services website',
    description: 'A modern e-commerce platform built with React, Next.js, and Tailwind CSS.',
    image: '/barber.png',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://fama-barber-two.vercel.app/',
    githubUrl: 'https://github.com/rjritesh/Fama-Barber',
  },
 
  {
    id: 3,
    title: 'Instagram Clone',
    description: 'A full-featured Instagram Clone replicating core features like userauthentication, post sharing, likes, and responsive design',
    image: 'https://about.fb.com/wp-content/uploads/2022/12/IG-Messaging-Stories-Bundle_Header.jpg',
    tech: ['React.js', 'JavaScript', 'Firebase','Chakra UI'],
    // liveUrl: 'https://taskmanager-demo.vercel.app',
    githubUrl: 'https://github.com/rjritesh/InstagramClone',
  },
  {
    id: 4,
    title: '🚨 Vision Pulse',
    description: 'A browser-based AI surveillance assistant that performs real-time person detection and sends instant email alerts — all with complete privacy and zero setup.',
    image: "/vp.png",
    tech: ['React.js', 'TensorFlow.js', 
      'Nodemailer'
    ],
    liveUrl: 'https://vision-pulse.vercel.app/',
    githubUrl: 'https://github.com/rjritesh/VisionPulse',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-space-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
<div className="h-44 sm:h-52 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100 dark:bg-space-700">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-auto object-contain mx-auto"
  />
</div>




              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 text-sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-electric-blue text-white py-2 rounded hover:bg-electric-blue/90 flex items-center justify-center"
                  >
                    <FiExternalLink className="mr-2" /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-electric-blue text-electric-blue py-2 rounded hover:bg-electric-blue hover:text-white flex items-center justify-center"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
