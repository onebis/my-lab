export default function Footer() {
  return (
    <footer className='mt-10 w-full bg-gray-400'>
      <div className='mx-auto mt-20 max-w-5xl px-20'>
        <div className='flex justify-between gap-2'>
          <div className='flex flex-col'>
            <div className='w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl  uppercase hover:opacity-60'>
                home
              </a>
            </div>
            <div className='mt-5 w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl uppercase hover:opacity-60'>
                about
              </a>
            </div>
            <div className='mt-5 w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl uppercase hover:opacity-60'>
                shop
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl uppercase hover:opacity-60'>
                series
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl uppercase hover:opacity-60'>
                service
              </a>
            </div>
            <div className='mt-5 w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl uppercase hover:opacity-60'>
                faq
              </a>
            </div>
            <div className='mt-5 w-52 border-b-1 border-b-amber-200 pb-1 pt-1'>
              <a href='#' className=' font-playfair text-xl uppercase hover:opacity-60'>
                contact
              </a>
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-gray-200'>
          <p>Your company description here.</p>
        </div>

        <div className='mt-10 text-center text-sm text-gray-200'>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
