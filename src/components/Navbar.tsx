const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-black text-blue-600">NU.CODE</div>
      <div className="hidden md:flex gap-10 font-medium text-slate-600">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Events</a>
        <a href="#" className="hover:text-blue-600">About</a>
      </div>
    </nav>
  );
};

export default Navbar;