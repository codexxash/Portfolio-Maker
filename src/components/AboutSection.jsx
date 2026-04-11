import { FaTrash } from "react-icons/fa";

const AboutSection = ({ formData, experience, removeExperience }) => {
  return (
    <div className="section1 md:border-r border-gray-700 px-5 pl-5">
      <h1 className='text-2xl font-bold'>About me</h1>
      <p className='text-gray-500 mt-2 max-w-90 tracking-wide leading-tight'>{formData.about}</p>

      <h1 className='text-2xl font-bold pt-10'>Education</h1>
      <h4 className='pt-4 text-lg'>{formData.institution}</h4>
      <p className='text-gray-400'>{formData.field}</p>

      {experience.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-2xl font-bold pt-6'>Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className='p-3 mt-2'>
              <h4 className='text-lg'>{exp.company}</h4>
              <p className='text-gray-500'>{exp.description}</p>
              <button type='button' onClick={() => removeExperience(index)} className='text-red-400 text-sm mt-1'>
                <FaTrash color='red' />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AboutSection