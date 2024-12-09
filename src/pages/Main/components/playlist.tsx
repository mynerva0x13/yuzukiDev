const Playlist = () => {
  const videos = [
    "https://www.youtube.com/embed/N0iCbTaWfpc?si=QHah7k94GRUGt0x3",
    "https://www.youtube.com/embed/dpHW-0F72AA?si=D0UxJDFvnlbyVtyk",
    "https://www.youtube.com/embed/U6gPLFSsK5k?si=dA3Dg2Sr6hNqsd1o",
    "https://www.youtube.com/embed/t8R214cBHkc?si=ybZHbW5WNos0cuol",
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Playlist Section */}
      <section className="flex flex-wrap lg:flex-nowrap items-center border-cyan-950 border-8 rounded-lg p-4 lg:p-6 bg-white/25 shadow-md">
        {/* Left Section: Image and Heading */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0 lg:pr-6">
          <img
            src="/image/(Laid-Back_Camping)_Mitsuru_Tenma_Chibi.gif"
            alt="Mitsuru Tenma Chibi"
            className="mx-auto lg:mx-0 w-48 sm:w-64 lg:w-72 h-auto rounded-lg"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-cyan-950">
            My Favorite Playlist
          </h1>
        </div>

        {/* Right Section: Playlist Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {videos.map((video, index) => (
              <iframe
                key={index}
                src={video}
                title={`Video ${index + 1}`}
                className="w-full aspect-video border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </section>

    {/* Game Project Section */}
<section className="flex flex-wrap lg:flex-nowrap items-center border-cyan-950 border-8 rounded-lg p-4 lg:p-6 bg-white/25 shadow-md">
  {/* Left Section: Image and Heading */}
  <div className="w-full lg:w-1/3 text-center lg:text-left order-1 lg:order-none">
    <img
      src="/image/(The_Fastest_Light)_Mitsuru_Tenma_Chibi.gif"
      alt="Mitsuru Tenma Chibi"
      className="mx-auto lg:mx-0 w-48 sm:w-64 lg:w-72 h-auto rounded-lg"
    />
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-cyan-950">
      My Game Project
    </h2>
  </div>

  {/* Right Section: Game Embed */}
  <div className="w-full lg:w-2/3 mb-6 lg:mb-0 order-2 lg:order-none">
    <div className="flex items-center justify-center">
      <iframe
        frameBorder="0"
        src="https://itch.io/embed/2277518?link_color=4f6781"
        width="100%"
        height="167"
        className="border bg-white/10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        title="Nier Game Project"
      >
        <a href="https://mynerva0x13.itch.io/nier-spi">
          Nier Spiegelbild Ver.0001 (Alpha) by Yuzuki Kouta
        </a>
      </iframe>
    </div>
  </div>

      </section>
    </div>
  );
};

export default Playlist;
