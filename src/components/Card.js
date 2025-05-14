import strangerPoster from"./stranger.jpg"; // adjust path as needed

const Card = () => {
  return (
    <div className="bg-[#141414] min-h-screen p-4 flex items-center justify-center">
      {/* Show only on small screens and hide on medium and larger screens */}
      <div className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg w-full max-w-md block sm:hidden">
        {/* Poster Image */}
        <img src={strangerPoster} alt="Stranger Things" className="w-full h-auto object-cover" />

        {/* Overlay Content */}
        <div className="p-4 text-white space-y-4">
          <div className="text-4xl font-bold tracking-wide">STRANGER THINGS</div>
          <div className="text-sm text-red-500 font-semibold">TOP 10 · #1 in TV Shows Today</div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-300">
              ▶ Play
            </button>
            <button className="flex items-center gap-2 bg-[#2c2c2c] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#444]">
              ＋ My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
