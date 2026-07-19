import { Code2, User, Globe } from "lucide-react";

function WelcomeScreen() {
  return (
    <div className="fixed inset-0 bg-slate-950 text-white flex flex-col items-center justify-center z-50 animate-[fadeOut_0.6s_ease_2.4s_forwards]">
      <div className="flex gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-gray-300" />
        </div>
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-300" />
        </div>
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
          <Globe className="w-5 h-5 text-gray-300" />
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-center leading-tight">
        Welcome to my <br className="md:hidden" />
        Portfolio Website
      </h1>

      <span className="mt-6 text-sm text-gray-400 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full">
        www.romeojnr.vercel.app
      </span>
    </div>
  );
}

export default WelcomeScreen;