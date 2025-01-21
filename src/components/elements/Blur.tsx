export default function Blur() {
  return (
    <div className="w-full absolute top-0">
      <div className="w-full h-[30px] bg-black backdrop-blur-[5px]" />
      <div className="w-full h-[40px] bg-[#000000EE] backdrop-blur-[3px]" />
      <div className='w-full h-[90px] bg-gradient-to-t from-transparent to-black backdrop-blur-[0.5px]'/> 
    </div>
  )
}
