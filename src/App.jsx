import { useState } from 'react'
import Form from './components/Form'
import HeroPreview from './components/HeroPreview'
import AboutSection from './components/AboutSection'
import SkillsProjects from './components/SkillsProjects'

const App = () => {
  const [formData, setFormData] = useState({
    name: 'Ashutosh Singh', about: 'Lorem ipsum dolor sit amet...',
    contact: '123456789', institution: 'Shoolini University',
    field: 'Bachelors of Computer Applications',
    mail: 'Ashutosh@gmail.com', address: 'Lucknow Uttar Pradesh',
    role: 'Frontend Developer'
  })

  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState('')
  const [projects, setProjects] = useState([])
  const [projectInput, setProjectInput] = useState({ title: '', description: '' })
  const [experience, setExperience] = useState([])
  const [experienceInput, setExperienceInput] = useState({ company: '', description: '' })
  const [photo, setPhoto] = useState(null)

  const handlePhoto = (e) => setPhoto(URL.createObjectURL(e.target.files[0]))
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const addSkill = () => { if (skillInput.trim() === '') return; setSkills([...skills, skillInput]); setSkillInput('') }
  const removeSkill = (i) => setSkills(skills.filter((_, idx) => idx !== i))

  const handleProjectInput = (e) => setProjectInput({ ...projectInput, [e.target.name]: e.target.value })
  const addProject = () => { if (projectInput.title.trim() === '') return; setProjects([...projects, projectInput]); setProjectInput({ title: '', description: '' }) }
  const removeProject = (i) => setProjects(projects.filter((_, idx) => idx !== i))

  const handleExperienceInput = (e) => setExperienceInput({ ...experienceInput, [e.target.name]: e.target.value })
  const addExperience = () => { if (experienceInput.company.trim() === '') return; setExperience([...experience, experienceInput]); setExperienceInput({ company: '', description: '' }) }
  const removeExperience = (i) => setExperience(experience.filter((_, idx) => idx !== i))

  return (
    <div className='flex flex-col lg:flex-row w-full bg-black max-h-auto text-white overflow-hidden'>
      <Form
        formData={formData} handleChange={handleChange} handlePhoto={handlePhoto}
        skillInput={skillInput} setSkillInput={setSkillInput}
        skills={skills} addSkill={addSkill} removeSkill={removeSkill}
        projectInput={projectInput} handleProjectInput={handleProjectInput} addProject={addProject}
        experienceInput={experienceInput} handleExperienceInput={handleExperienceInput} addExperience={addExperience}
      />

      <div className="flex flex-col border-l w-screen border-gray-600 bg-[#0f0a1a]">
        <HeroPreview formData={formData} photo={photo} />
        <div className="hero2 flex lg:flex-row flex-col py-10 bg-[#0f0a1a]">
          <AboutSection formData={formData} experience={experience} removeExperience={removeExperience} />
          <SkillsProjects skills={skills} projects={projects} removeProject={removeProject} />
        </div>
      </div>
    </div>
  )
}

export default App