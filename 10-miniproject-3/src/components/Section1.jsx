const Section1 = ({ title, setTitle, details, setDetails, submitHandler }) => {
  return (
    <div className='lg:w-[40%]'>
      <form onSubmit={submitHandler} className='flex gap-4 p-10 flex-col items-start'>
        <h1 className='text-4xl mb-2 font-bold text-white'>Add Notes</h1>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded text-black'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Write Details here'
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded text-black'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button className='bg-white active:scale-95 font-medium w-full text-black px-5 py-2 rounded'>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Section1;