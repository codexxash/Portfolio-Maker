import { FaTrash } from "react-icons/fa";

const Form = ({ formData, handleChange, handlePhoto, skillInput, setSkillInput,
  skills, addSkill, removeSkill, projectInput, handleProjectInput, addProject,
  experienceInput, handleExperienceInput, addExperience }) => {
  return (
    <form className="flex flex-col gap-4 px-4 bg-gray-900 py-10">

      <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700 pb-1">Profile Photo</p>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Upload photo <span className="text-red-400">*</span></label>
        <input className='py-3 px-1 max-w-17 rounded text-xs bg-gray-400 cursor-pointer outline-none'
          type="file" accept='image/*' onChange={handlePhoto} required />
      </div>

      <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700 pb-1 mt-4">Basic Info</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Full name <span className="text-red-400">*</span></label>
          <input name='name' onChange={handleChange} value={formData.name}
            className='border-b rounded p-2 bg-transparent outline-none' type="text"
            placeholder='e.g. Ashutosh Singh' required />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Role / Position <span className="text-red-400">*</span></label>
          <input name='role' onChange={handleChange} value={formData.role}
            className='border-b rounded p-2 bg-transparent outline-none' type="text"
            placeholder='e.g. Frontend Developer' required />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">About yourself <span className="text-red-400">*</span></label>
        <input name='about' onChange={handleChange} value={formData.about}
          className='border-b rounded p-2 bg-transparent outline-none' type="text"
          placeholder='Short bio or tagline' required />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Email <span className="text-red-400">*</span></label>
          <input name='mail' onChange={handleChange} value={formData.mail}
            className='border-b rounded p-2 bg-transparent outline-none' type="text"
            placeholder='you@email.com' required />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Phone <span className="text-red-400">*</span></label>
          <input name='contact' onChange={handleChange} value={formData.contact}
            className='border-b rounded p-2 bg-transparent outline-none' type="tel"
            placeholder='+91 XXXXX XXXXX' required />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Address <span className="text-red-400">*</span></label>
        <input name='address' onChange={handleChange} value={formData.address}
          className='border-b rounded p-2 bg-transparent outline-none' type="text"
          placeholder='City, State, Country' required />
      </div>

      <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700 pb-1 mt-4">Education</p>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">University / College <span className="text-red-400">*</span></label>
        <input name='institution' onChange={handleChange} value={formData.institution}
          className='border-b rounded p-2 bg-transparent outline-none' type="text"
          placeholder='e.g. IIT Delhi' required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Field of study <span className="text-red-400">*</span></label>
        <input name='field' onChange={handleChange} value={formData.field}
          className='border-b rounded p-2 bg-transparent outline-none' type="text"
          placeholder='e.g. Computer Science' required />
      </div>

      <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700 pb-1 mt-4">Skills</p>
      <div className='flex gap-2'>
        <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)}
          type="text" className='border-b rounded p-2 outline-none flex-1'
          placeholder='e.g. React, Tailwind CSS' />
        <button type='button' onClick={addSkill}
          className='rounded px-4 py-2 bg-blue-400 border-none cursor-pointer'>+ Add</button>
      </div>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span key={index} className='border rounded px-2 py-1 flex items-center gap-1 text-sm'>
            {skill}
            <button type='button' onClick={() => removeSkill(index)}><FaTrash color='red' /></button>
          </span>
        ))}
      </div>

      <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700 pb-1 mt-4">Projects</p>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Project title <span className="text-red-400">*</span></label>
        <input name='title' placeholder='e.g. Make My Trip' value={projectInput.title}
          onChange={handleProjectInput} className='border-b rounded p-2 bg-transparent outline-none' required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Description <span className="text-red-400">*</span></label>
        <textarea name='description' placeholder='Briefly describe what this project does...'
          value={projectInput.description} onChange={handleProjectInput}
          className='border-b rounded p-2 bg-transparent outline-none' required />
      </div>
      <button type='button' onClick={addProject}
        className='border border-gray-600 rounded px-4 py-2 bg-blue-400 hover:bg-gray-800'>
        + Add Project
      </button>

      <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700 pb-1 mt-4">Experience</p>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Company name <span className="text-red-400">*</span></label>
        <input name='company' placeholder='e.g. Google' value={experienceInput.company}
          onChange={handleExperienceInput} className='border-b rounded p-2 bg-transparent outline-none' required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400">Description <span className="text-red-400">*</span></label>
        <textarea name='description' placeholder='Your role and responsibilities...'
          value={experienceInput.description} onChange={handleExperienceInput}
          className='border-b rounded p-2 bg-transparent outline-none' required />
      </div>
      <button type='button' onClick={addExperience}
        className='border border-gray-600 rounded px-4 py-2 bg-blue-400 hover:bg-gray-800'>
        + Add Experience
      </button>

      <p className="text-xs text-gray-500 mt-2"><span className="text-red-400">*</span> All fields are required</p>
    </form>
  )
}

export default Form