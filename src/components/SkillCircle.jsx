function SkillCircle({ name, level }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300">
      <svg width="100" height="100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#1e293b"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#3b82f6"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>

      <p className="text-white font-bold text-lg -mt-14">{level}%</p>
      <p className="text-gray-400 mt-8 text-sm">{name}</p>
    </div>
  );
}

export default SkillCircle;