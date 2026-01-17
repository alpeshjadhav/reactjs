const App = () => {
  return (
    <div className="h-screen w-full bg-slate-500" style={{ fontFamily: "'Audiowide', sans-serif" }}>
      <nav className="h-20 flex items-center justify-between bg-gray-900 px-8">
        <h1 className="text-white text-4xl font-black underline tracking-wider cursor-pointer">
          Shersha
        </h1>

        <div className="flex items-center gap-4">
          <button className="bg-green-500 cursor-pointer hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200  active:scale-95 border-2 border-green-400">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;