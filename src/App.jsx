import { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
const App = () => {

  // Basic Info State
  const [formData, setFormData] = useState({
    name: 'John Doe',
    about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet molestias maiores suscipit laborum? Obcaecati qui, labore quibusdam quod sint autem incidunt laborum vitae consequatur laboriosam a, beatae delectus enim?',
    contact: '123456789',
    institution: 'Oxford University',
    field: 'Masters of Business Administration',
    mail: 'johndoe@gmail.com',
    address: 'EI classico 14th street New York',
    role: 'Business Analyst'

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

  // Experience State

  const [experience, setExperience] = useState([])
  const [experienceInput, setExperienceInput] = useState({
    company: '',
    description: ''
  })

  const [photo, setPhoto] = useState(null)

  // Photo Handler

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    setPhoto(URL.createObjectURL(file))

  }

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
    if (projectInput.title.trim() === '') return
    setProjects([...projects, projectInput])
    setProjectInput({ title: '', description: '' })
  }

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  // Experience Handler

  const handleExperienceInput = (e) => {
    const { name, value } = e.target
    setExperienceInput({ ...experienceInput, [name]: value })

  }

  const addExperience = () => {
    if (experienceInput.company.trim() === '') return
    setExperience([...experience, experienceInput])
    setExperienceInput({ company: '', description: '' })
  }

  const removeExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index))
  }


  return (
    <div className='flex flex-col lg:flex-row w-full bg-black max-h-auto text-white overflow-hidden'>

      {/* ───── FORM SIDE ───── */}
      <form className="flex flex-col gap-4  px-4 bg-gray-900 py-10 ">
        {/* <h2 className='text-2xl font-bold'>Portfolio Generator 🔥</h2> */}

        {/* Photo */}

        <input
          className='py-3 px-1 max-w-17 rounded text-xs bg-gray-400 cursor-pointer outline-none'
          type="file"
          accept='image/*'
          onChange={handlePhoto}
          placeholder='choose one'
        />

        <input
          name='name'
          onChange={handleChange}
          value={formData.name}
          className='border-b rounded p-2 bg-transparent outline-none'
          type="text"
          placeholder='Enter Your Name' />

        <input
          name='mail'
          onChange={handleChange}
          className='border-b rounded p-2 bg-transparent outline-none'
          value={formData.mail}
          placeholder='Enter your mail'
          type="text" />

        <input
          name='address'
          onChange={handleChange}
          className='border-b rounded p-2 bg-transparent outline-none'
          placeholder='Address'
          value={formData.address}
          type="text" />

        <input
          name='role'
          onChange={handleChange}
          value={formData.role}
          placeholder='Role/Position'
          className='border-b rounded p-2 bg-transparent outline-none'
          type="text" />


        <input
          name='about'
          onChange={handleChange}
          value={formData.about}
          className='border-b rounded p-2 bg-transparent outline-none'
          type="text"
          placeholder='About Yourself' />

        <input
          name='contact'
          onChange={handleChange}
          value={formData.contact}
          className='border-b rounded p-2 bg-transparent outline-none'
          type="tel"
          placeholder='Phone No' />

        {/* Education */}
        <input
          name='institution'
          onChange={handleChange}
          value={formData.institution}
          className='border-b rounded p-2 bg-transparent outline-none'
          type="text"
          placeholder='University/College Name' />


        <input
          name='field'
          onChange={handleChange}
          value={formData.field}
          className='border-b rounded p-2 bg-transparent outline-none'
          type="text"
          placeholder='Field of study' />



        {/* Skills */}
        <hr className='border-gray-600' />
        <h3 className='font-semibold'>Skills</h3>

        <div className='flex gap-2'>
          <input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            type="text"
            className='border-b rounded p-2 outline-none'
            placeholder='Add a skill (e.g. HTML)' />
          <button
            type='button'
            onClick={addSkill}
            className=' rounded px-4 py-2 bg-blue-400 border-none cursor-pointer'>
            Add
          </button>
        </div>

        {/* Added Skills List */}
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <span key={index} className='border rounded px-2 py-1 flex items-center gap-1'>
              {skill}
              <button type='button' onClick={() => removeSkill(index)}><FaTrash color='red' /></button>
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
          className='border-b rounded p-2 bg-transparent outline-none' />

        <textarea
          name='description'
          placeholder='Project Description'
          value={projectInput.description}
          onChange={handleProjectInput}
          className='border-b rounded p-2 bg-transparent outline-none' />

        <button
          type='button'
          onClick={addProject}
          className='bg-blue-400 rounded px-4 py-2'>
           Add Project
        </button>

        {/* Experience */}

        <input
          name='company'
          placeholder='Company Name'
          value={experienceInput.company}
          onChange={handleExperienceInput}
          className='border-b rounded p-2 bg-transparent outline-none' />

        <textarea
          name='description'
          placeholder='Description'
          value={experienceInput.description}
          onChange={handleExperienceInput}
          className='border-b rounded p-2 bg-transparent outline-none' />

        <button
          type='button'
          onClick={addExperience}
          className='bg-blue-400 rounded py-2'>
           Add Experience
        </button>


      </form>


      {/* ───── PREVIEW SIDE ───── */}
      
      <div className="flex flex-col border-l w-screen border-gray-600 bg-[#0f0a1a]">
        {/* <h2 className='text-2xl font-bold'>Preview 👇</h2> */}


        <div
          className="hero flex flex-col items-center border-b pt-10"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 20%, #7c3aed 0%, #4c1d95 40%, #0f0a1a 95%)"
          }}
        >
          {/* Image Preview */}
          {photo && (
            <img
              src={photo}
              alt='Profile'
              className='w-32 h-32 rounded-full object-cover ' />
          )}
          <h1 className='text-3xl font-semibold my-4'>{formData.name}</h1>
          <span className='px-3 py-2 rounded-lg text-white bg-purple-600/50 border border-purple-400/30'>
            {formData.role}
          </span>

          <div className='flex flex-col items-center gap-2 lg:flex-row lg:justify-evenly w-full p-5'>
            <span className='flex items-center gap-1'> <IoMdMail className='text-purple-500'/> {formData.mail}</span>
            <span className='flex items-center gap-1'> <FaLocationCrosshairs className='text-purple-500'/> {formData.address}</span>
            <span className='flex items-center gap-1'> <BsFillTelephoneFill className='text-purple-500'/> {formData.contact}</span>
          </div>
        </div>

        <div className="hero2 flex flex-row flex-wrap  py-10 bg-[#0f0a1a]">
          <div className="section1 md:border-r  border-gray-700 px-5 pl-5">
            <h1 className='text-2xl font-bold '>About me</h1>
            <p className='text-gray-500 mt-2 max-w-90 tracking-wide leading-tight'>{formData.about}</p>
            <h1 className='text-2xl font-bold pt-10'>Education</h1>
            <h4 className='pt-4 text-lg'>{formData.institution}</h4>
            <p className='text-gray-400'>{formData.field}</p>

            {/* Experience preview */}
            {experience.length > 0 && (
              <div className='mt-4'>
                <h3 className='text-2xl font-bold pt-6'>Experience</h3>
                {experience.map((experience, index) => (
                  <div key={index} className='p-3 mt-2'>
                    <h4 className='text-lg'>{experience.company}</h4>
                    <p className='text-gray-500'>{experience.description}</p>
                    <button
                      type='button'
                      onClick={() => removeExperience(index)}
                      className='text-red-400 text-sm mt-1'>
                      <FaTrash color='red' />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="section2 max-w-sm  px-5">

            {/* Skills Preview */}
            <h1 className='text-2xl font-bold pt-4 md:pt-0'>Skills & Tools</h1>
            {skills.length > 0 && (
              <div className='mt-4'>
                <h3 className='font-semibold text-lg'>Skills</h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className='rounded px-3 py-1'
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Preview */}
            {projects.length > 0 && (
              <div className='mt-4'>
                <h3 className='font-semibold text-xl'>Projects</h3>
                {projects.map((project, index) => (
                  <div key={index} className='p-3 mt-2'>
                    <h4 className='text-lg'>{project.title}</h4>
                    <p className='text-gray-500 text-lg'>{project.description}</p>
                    <button
                      type='button'
                      onClick={() => removeProject(index)}
                      className='text-sm mt-1 text-center cursor-pointer'>
                      <FaTrash color='red' />
                    </button>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default App
