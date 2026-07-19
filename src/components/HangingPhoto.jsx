import myPhoto from "../assets/best.jpg"; // adjust file name if needed
function HangingPhoto() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-px h-20 bg-gray-500"></div>
      <div className="rounded-lg border-4 border-white bg-slate-900 p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[90vw] md:max-w-none">
        <img
          src={myPhoto}
          alt="Romeo JNR"
          className="w-full max-w-[18rem] h-auto rounded-sm object-cover"
        />
      </div>
    </div>
  );
}

export default HangingPhoto;