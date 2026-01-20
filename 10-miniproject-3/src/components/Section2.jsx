const Section2 = ({ task, deleteNote }) => {
  return (
    <div className='lg:w-[60%] p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
        {task.map((elem, idx) => (
          <div
            key={idx}
            className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover bg-center rounded-xl bg-amber-100 text-black pt-10 pb-4 px-4 shadow-md"
          >
            <div className="w-full overflow-hidden">
              <h3 className='leading-tight text-lg font-bold wrap-break-word'>
                {elem.title}
              </h3>
              <p className='mt-2 leading-tight text-xs font-semibold text-gray-700 wrap-break-word'>
                {elem.details}
              </p>
            </div>

            <button
              onClick={() => deleteNote(idx)}
              className='w-full cursor-pointer active:scale-95 bg-red-600 hover:bg-red-700 py-1 text-xs rounded font-bold text-white transition-colors mt-2'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;