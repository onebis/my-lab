export default function Footer() {
  return (
    <footer className='w-full bg-gray-400'>
      <div className='mx-auto mt-10 max-w-5xl px-20'>
        <div className='flex justify-between gap-2'>
          <div className='flex flex-col'>
            <div className='w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                home
              </a>
            </div>
            <div className='mt-5 w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                about
              </a>
            </div>
            <div className='mt-5 w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                shop
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                series
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                service
              </a>
            </div>
            <div className='mt-5 w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                faq
              </a>
            </div>
            <div className='mt-5 w-60 border-b-1 border-b-amber-300 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-2xl uppercase hover:opacity-60'>
                contact
              </a>
            </div>
          </div>
        </div>
        <div className='mt-4 text-gray-600'>
          <p>Your company description here.</p>
        </div>

        <div className='mt-4 text-sm text-gray-600'>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
