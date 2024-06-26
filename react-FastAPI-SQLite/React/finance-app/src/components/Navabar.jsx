
const Navbar = () => {   
 
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex h-20 items-center justify-between'>
        <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
          <a 
            href="#"
            className='flex flex-shrink-0 items-center mr-4' 
            >
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Finance App
              </span>
          </a> 
          <div className='md:ml-auto'>
            <div className='flex space-x-2'>
                <a 
                   href="#"
                  className='bg-black text-white hover:bg-gray-900 hover:text-white rounded px-3 py-2'
                >
                    Home
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar