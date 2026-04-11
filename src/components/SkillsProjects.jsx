import { FaTrash } from "react-icons/fa";

const SkillsProjects = ({ skills, projects, removeProject }) => {
  return (
    <div className="section2 max-w-sm px-5">
      <h1 className='text-2xl font-bold pt-4 md:pt-0 md:text-center'>Skills & Tools</h1>

      {skills.length > 0 && (
        <div className='mt-4'>
          <h3 className='font-semibold text-lg'>Skills</h3>
          <div className='flex flex-wrap gap-2 mt-2'>
            {skills.map((skill, index) => (
              <span key={index} className='rounded px-3 py-1'
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className='mt-4'>
          <h3 className='font-semibold text-xl'>Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className='p-3 mt-2'>
              <h4 className='text-lg'>{project.title}</h4>
              <p className='text-gray-500'>{project.description}</p>
              <button type='button' onClick={() => removeProject(index)} className='text-sm mt-1 cursor-pointer'>
                <FaTrash color='red' />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SkillsProjects