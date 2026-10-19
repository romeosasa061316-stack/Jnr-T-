function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Romeo JNR. All rights reserved.
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Junior Full Stack Software Engineer
        </p>
      </div>
    </footer>
  );
}

export default Footer;