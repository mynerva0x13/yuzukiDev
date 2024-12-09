const Playlist = () => {
    const videos = [
      "https://www.youtube.com/embed/N0iCbTaWfpc?si=QHah7k94GRUGt0x3",
      "https://www.youtube.com/embed/dpHW-0F72AA?si=D0UxJDFvnlbyVtyk",
      "https://www.youtube.com/embed/U6gPLFSsK5k?si=dA3Dg2Sr6hNqsd1o",
      "https://www.youtube.com/embed/t8R214cBHkc?si=ybZHbW5WNos0cuol",
      // Add more URLs if needed
    ];
  
    return (
      <div className="p-6 border-cyan-950 border-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">My Favorite Playlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <iframe
              key={index}
              src={video}
              title={`Video ${index + 1}`}
              className="w-full aspect-video border border-gray-300 rounded-md sm:h-48 md:h-64 lg:h-80"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    );
  };
  
  export default Playlist;
  