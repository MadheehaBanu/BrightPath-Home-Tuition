export default function Subjects() {
  const subjects = [
    {
      title: 'Mathematics',
      description: 'Basic to advanced techniques, problem-solving, and board exam preparation.',
      color: 'brand-purple',
      delay: '0.1s'
    },
    {
      title: 'Science',
      description: 'In-depth Physics, Chemistry, Biology, and General Science for all levels.',
      color: 'brand-green',
      delay: '0.2s'
    },
    {
      title: 'English',
      description: 'Grammar, reading comprehension, writing skills, and spoken English support.',
      color: 'brand-yellow',
      delay: '0.3s'
    },
    {
      title: 'Social Studies',
      description: 'History, Geography, Civics, and Economics taught through storytelling.',
      color: 'brand-purple',
      delay: '0.4s'
    },
    {
      title: 'Commerce',
      description: 'Specialized support for Accountancy, Business Studies, and Economics.',
      color: 'brand-green',
      delay: '0.5s'
    },
    {
      title: 'Foundation',
      description: 'Early learning, homework assistance, and reading/writing development.',
      color: 'brand-yellow',
      delay: '0.6s'
    },
  ]

  return (
    <section id="subjects" className="py-20 md:py-32 px-6 bg-brand-lavender/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12 md:mb-20" data-animation-on-scroll="">
          <span className="text-brand-purple font-bold tracking-widest uppercase text-sm md:text-base">SUBJECTS OFFERED</span>
          <h2 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold break-words">Comprehensive coverage for all goals</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4 group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default" 
              data-animation-on-scroll="" 
              style={{ transitionDelay: subject.delay }}
            >
              <h4 className={`font-primary text-2xl font-bold text-${subject.color} group-hover:scale-105 transition-transform origin-left inline-block`}>
                {subject.title}
              </h4>
              <p className="text-text-secondary">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
