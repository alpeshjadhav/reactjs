const Section1 = () => {
  return (
    <section className='w-full lg:w-[60%] p-8 flex flex-col justify-center'>

      <h5 className='uppercase text-sm tracking-widest text-gray-500 mb-2 font-semibold'>
        Welcome to my portfolio
      </h5>

      <h1 className='text-5xl md:text-6xl font-bold mb-2'>
        Hello, I'm <span className='text-pink-500'>Alpesh Jadhav</span>
      </h1>

      <h3 className='text-3xl text-gray-700 mb-4'>
        A Software Engineer.
      </h3>

      <p className='text-gray-600 leading-relaxed max-w-2xl'>
        Experienced Java Developer committed to continuous learning and professional
        development. Leveraging over 5 years of hands-on experience in Java programming,
        adept at developing robust and scalable software solutions. Proven ability
        to collaborate effectively with cross-functional teams to deliver projects
        on time and drive innovation.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition">
          View Work
        </button>
        <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition">
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Section1