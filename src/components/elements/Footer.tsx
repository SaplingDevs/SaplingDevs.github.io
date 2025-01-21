export default function Footer() {
  return (
    <footer className='w-full text-center text-white p-4'>
      By{" "}
      <a
        href="https://github.com/SaplingDevs"
        target="_blank"
        rel="noopener noreferrer"
        className='text-blue-400 hover:text-blue-500 transition duration-300 inline-flex items-center'
      >
        @SaplingDevs
        <img 
          src="/sapling-clear.svg" 
          className="w-4 h-4 ml-2" 
          alt="Sapling Logo"
        />
      </a>
    </footer>
  )
}