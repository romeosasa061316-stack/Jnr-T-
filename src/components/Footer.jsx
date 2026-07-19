function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p>
          © {new Date().getFullYear()} Romeo JNR. All rights reserved.
        </p>

        <p className="mt-2 text-sm">
          Full Stack Software Engineer
        </p>

      </div>
    </footer>
  );
}

export default Footer;