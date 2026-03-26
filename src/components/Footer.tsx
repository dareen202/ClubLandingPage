const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-40">
        
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold text-white mb-4">NUICPC</h3>
          <p className="text-sm leading-relaxed">
            Empowering students at Nile University to master problem-solving and software engineering.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-xl">Stay Updated</h4>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 rounded transition-all active:scale-95">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;