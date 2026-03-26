interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description, }: CardProps) => {
  return (
    <div className="px-4 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <button className="w-full py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Card;