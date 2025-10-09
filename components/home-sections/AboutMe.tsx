"use client";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'

const AboutMe = () => {
  const experiences = [
    {
      title: 'Software Engineer - Career Team',
      company: 'Full-time (North Haven, CT, USA)',
      period: 'Nov 2024 – Present',
      achievements: [
        'Design, develop, and maintain software solutions to support business operations and client-facing platforms',
        'Write clean, efficient, and scalable code following best practices',
        'Collaborate with designers and product managers to align software features with business goals',
        'Conduct code reviews and mentor team members to ensure quality and consistency',
        'Contribute to system architecture decisions and recommend scalability improvements',
      ],
    },
    {
      title: 'Web Developer - FFWPU Philippines',
      company: 'Remote',
      period: 'Jan 2024 – Sept 2024',
      achievements: [
        'Developed and maintained client-facing web applications tailored to organizational needs',
        'Built responsive front-end interfaces to improve accessibility for staff, members, and partners',
        'Integrated content management and backend services to ensure seamless updates and scalability',
        'Provided ongoing technical support and feature enhancements',
      ],
    },
    {
      title: 'Software Developer - Comfort Financial Solutions',
      company: 'Las Vegas, NV, USA',
      period: 'Sep 2023 – Jan 2024',
      achievements: [
        'Developed responsive web interfaces using ReactJS, HTML, CSS, and TypeScript',
        'Collaborated with UX/UI designers to translate mockups into functional applications',
        'Integrated RESTful APIs and third-party services to deliver dynamic, data-driven features',
        'Optimized front-end performance and maintained code quality through Git version control and testing',
      ],
    },
  ]

  const skills = [
    {
      category: 'Frontend',
      items: [
        'ReactJS',
        'NextJS',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'TailwindCSS',
      ],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB'],
    },
    {
      category: 'Tools & Others',
      items: [
        'Git',
        'UI/UX Implementation',
        'Frontend Optimization',
        'Version Control',
      ],
    },
  ]

  return (
    <section className='min-h-screen bg-zinc-950 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Professional Experience */}
          <div className='lg:col-span-2 space-y-8'>
            <div className='flex items-center gap-3 mb-8'>
              <BriefcaseIcon className='w-6 h-6 text-teal-400' />
              <h2 className='text-2xl font-bold text-zinc-100'>
                Professional Experience
              </h2>
            </div>

            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className='bg-zinc-800/50 rounded-xl p-6 border border-zinc-700'
                >
                  <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                    <div>
                      <h3 className='text-lg font-semibold text-zinc-100'>
                        {exp.title}
                      </h3>
                      <p className='text-teal-400 font-medium'>{exp.company}</p>
                    </div>
                    <div className='flex items-center gap-1 text-sm text-zinc-400 mt-2 md:mt-0'>
                      <CalendarIcon className='w-4 h-4' />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className='space-y-3'>
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className='text-zinc-300 flex items-start gap-2 text-sm'
                      >
                        <div className='w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0'></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Contact Info */}
            <div className='bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-xl p-6 border border-zinc-700'>
              <h3 className='text-lg font-semibold text-zinc-100 mb-4'>
                Contact Information
              </h3>
              <div className='space-y-3 text-sm'>
                <div className='flex items-center gap-2'>
                  <MapPinIcon className='w-4 h-4 text-zinc-400' />
                  <span className='text-zinc-300'>
                    Trece Martires City, Cavite
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-zinc-400'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
                  </svg>
                  <span className='text-zinc-300'>philcobsuzuki@gmail.com</span>
                </div>
                <div className='flex items-center gap-2'>
                  <ArrowTopRightOnSquareIcon className='w-4 h-4 text-zinc-400' />
                  <span className='text-zinc-300'>
                    philcodes-portfolio.vercel.app
                  </span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className='bg-zinc-800/50 rounded-xl p-6 border border-zinc-700'>
              <div className='flex items-center gap-3 mb-6'>
                <CodeBracketIcon className='w-5 h-5 text-teal-400' />
                <h3 className='text-lg font-semibold text-zinc-100'>
                  Technical Skills
                </h3>
              </div>

              <div className='space-y-6'>
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className='text-sm font-medium text-zinc-300 mb-3'>
                      {skillGroup.category}
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 bg-teal-900/30 text-teal-400 rounded-full text-xs font-medium border border-teal-800'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className='bg-zinc-800/50 rounded-xl p-6 border border-zinc-700'>
              <div className='flex items-center gap-3 mb-4'>
                <AcademicCapIcon className='w-5 h-5 text-teal-400' />
                <h3 className='text-lg font-semibold text-zinc-100'>
                  Area of Expertise
                </h3>
              </div>
              <div className='space-y-3 text-sm text-zinc-300'>
                <div>• Web Application Development</div>
                <div>• API Integration</div>
                <div>• UI/UX Implementation</div>
                <div>• Frontend Optimization</div>
                <div>• Version Control (Git)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white'>
            <h2 className='text-2xl font-bold mb-4'>
              Ready to Build Something Amazing?
            </h2>
            <p className='text-teal-100 mb-6 max-w-2xl mx-auto'>
              I&apos;m always interested in discussing new opportunities and
              exciting projects. Feel free to reach out if you&apos;d like to
              collaborate.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors'
              >
                Get In Touch
              </a>
              <a
                href='/philcob-resume.pdf'
                download
                className='inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
