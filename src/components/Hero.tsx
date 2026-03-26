const Hero = () => {
  return (
    <div className="bg-slate-50 py-10 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
        Learn Coding at <span className="text-blue-600">Nile University</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
        Join the most active community of student developers.
      </p>
      <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all">
        Explore Roadmaps
      </button>
    </div>
  );
};

export default Hero;