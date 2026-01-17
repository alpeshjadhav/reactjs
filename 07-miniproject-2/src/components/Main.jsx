import Section1 from "./Section1"
import Section2 from "./Section2"

const Main = () => {
  return (
    <main className='min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-10 bg-white'>
      <Section1 />
      <Section2 />
    </main>
  )
}

export default Main