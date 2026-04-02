import { useState } from 'react'

const App = () => {

  // Basic Info State
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    contact: ''
  })

  // Skills State
  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState('')

  // Projects State
  const [projects, setProjects] = useState([])
  const [projectInput, setProjectInput] = useState({
    title: '',
    description: ''
  })

  // ───────────────────────────────
  // Basic Info Handler
  // ───────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // ───────────────────────────────
  // Skills Handlers
  // ───────────────────────────────
  const addSkill = () => {
    if (skillInput.trim() === '') return // blank skill mat add karo
    setSkills([...skills, skillInput])
    setSkillInput('')
  }

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  // ───────────────────────────────
  // Projects Handlers
  // ───────────────────────────────
  const handleProjectInput = (e) => {
    const { name, value } = e.target
    setProjectInput({ ...projectInput, [name]: value })
  }

  const addProject = () => {
    if (projectInput.title.trim() === '') return // blank project mat add karo
    setProjects([...projects, projectInput])
    setProjectInput({ title: '', description: '' }) // input clear karo
  }

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  return (
    <div className='flex justify-around pt-10 bg-black min-h-screen text-white gap-10 px-10'>

      {/* ───── FORM SIDE ───── */}
      <form className="flex flex-col gap-4 w-1/2">
        <h2 className='text-2xl font-bold'>Portfolio Generator 🔥</h2>

        {/* Basic Info */}
        <input
          name='name'
          onChange={handleChange}
          value={formData.name}
          className='border rounded p-2 bg-transparent'
          type="text"
          placeholder='Enter Your Name' />

        <input
          name='about'
          onChange={handleChange}
          value={formData.about}
          className='border rounded p-2 bg-transparent'
          type="text"
          placeholder='About Yourself' />

        <input
          name='contact'
          onChange={handleChange}
          value={formData.contact}
          className='border rounded p-2 bg-transparent'
          type="number"
          placeholder='Phone No' />

        {/* Skills */}
        <hr className='border-gray-600' />
        <h3 className='font-semibold'>Skills</h3>

        <div className='flex gap-2'>
          <input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            type="text"
            className='border rounded p-2 bg-transparent flex-1'
            placeholder='Add a skill (e.g. HTML)' />
          <button
            type='button'
            onClick={addSkill}
            className='border rounded px-4 py-2'>
            + Add
          </button>
        </div>

        {/* Added Skills List */}
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <span key={index} className='border rounded px-2 py-1 flex items-center gap-1'>
              {skill}
              <button type='button' onClick={() => removeSkill(index)}>❌</button>
            </span>
          ))}
        </div>

        {/* Projects */}
        <hr className='border-gray-600' />
        <h3 className='font-semibold'>Projects</h3>

        <input
          name='title'
          placeholder='Project Title'
          value={projectInput.title}
          onChange={handleProjectInput}
          className='border rounded p-2 bg-transparent' />

        <textarea
          name='description'
          placeholder='Project Description'
          value={projectInput.description}
          onChange={handleProjectInput}
          className='border rounded p-2 bg-transparent' />

        <button
          type='button'
          onClick={addProject}
          className='border rounded px-4 py-2'>
          + Add Project
        </button>

      </form>

      {/* ───── PREVIEW SIDE ───── */}
      <div className='w-1/2 border-l border-gray-600 pl-10'>
        <h2 className='text-2xl font-bold'>Preview 👇</h2>

        {/* Basic Info Preview */}
        <h1 className='text-3xl font-bold mt-4'>{formData.name}</h1>
        <p className='text-gray-300 mt-2'>{formData.about}</p>
        <p className='text-gray-400 mt-1'>{formData.contact}</p>

        {/* Skills Preview */}
        {skills.length > 0 && (
          <div className='mt-4'>
            <h3 className='font-semibold text-lg'>Skills</h3>
            <div className='flex flex-wrap gap-2 mt-2'>
              {skills.map((skill, index) => (
                <span key={index} className='border rounded px-2 py-1'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects Preview */}
        {projects.length > 0 && (
          <div className='mt-4'>
            <h3 className='font-semibold text-lg'>Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className='border rounded p-3 mt-2'>
                <h4 className='font-bold'>{project.title}</h4>
                <p className='text-gray-300'>{project.description}</p>
                <button
                  type='button'
                  onClick={() => removeProject(index)}
                  className='text-red-400 text-sm mt-1'>
                  Remove ❌
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  )
}

export default App
