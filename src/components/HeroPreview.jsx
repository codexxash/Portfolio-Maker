import { IoMdMail } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const HeroPreview = ({ formData, photo }) => {
  return (
    <div className="hero flex flex-col items-center border-b pt-10"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 20%, #7c3aed 0%, #4c1d95 40%, #0f0a1a 95%)" }}>

      {photo && (
        <img src={photo} alt='Profile' className='w-32 h-32 rounded-full object-cover' />
      )}
      <h1 className='text-3xl font-semibold my-4'>{formData.name}</h1>
      <span className='px-3 py-2 rounded-lg text-white bg-purple-600/50 border border-purple-400/30'>
        {formData.role}
      </span>

      <div className='flex flex-col items-center gap-2 lg:flex-row lg:justify-evenly w-full p-5'>
        <span className='flex items-center gap-1'><IoMdMail className='text-purple-500' /> {formData.mail}</span>
        <span className='flex items-center gap-1'><FaLocationCrosshairs className='text-purple-500' /> {formData.address}</span>
        <span className='flex items-center gap-1'><BsFillTelephoneFill className='text-purple-500' /> {formData.contact}</span>
      </div>
    </div>
  )
}

export default HeroPreview