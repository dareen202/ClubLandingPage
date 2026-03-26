import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Tracks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Competitve Programming" 
            description="Master problem-solving and algorithms for the ECPC qualifications." 
          />
          <Card 
            title="Mobile Dev" 
            description="Build modern Android apps using Kotlin and Jetpack Compose." 
          />
          <Card 
            title="Web Dev" 
            description="Build cool websites with React and Tailwind CSS styling." 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;