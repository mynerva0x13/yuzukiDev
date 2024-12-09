export default function Konva() {
  return (
      <>
          <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start  justify-center">
              {/* Text Section */}
              <p className="text-2xl md:text-4xl text-white text-center md:text-left p-4 md:p-8">
                  Send me some <br /> your doodle :3
              </p>

              {/* Canvas and Button Section */}
              <div className="flex flex-col items-center ">
                  {/* Canvas Container */}
                  <div
                      id="container"
                      className="bg-white border-8 border-b-2 border-blue-800 h-64 w-full max-w-xs sm:max-w-sm md:max-w-lg flex items-end justify-center"
                  ></div>

                  {/* Send Button */}
                  <button
                      className="w-full max-w-xs sm:max-w-sm md:max-w-lg bg-white text-lg sm:text-xl md:text-2xl text-center border-blue-800 border-8 border-t-0 hover:text-white font-semibold py-2 px-4 flex items-center justify-center space-x-2 hover:bg-blue-800"
                      aria-label="Send anonymously"
                  >
                      <span>Send anonymously</span>
                      <span role="img" aria-label="send emojis">🍪👀</span>
                  </button>
              </div>

              {/* Control Panel Section */}
              <div
                  id="controls"
                  className="flex flex-wrap items-center justify-between p-4 bg-white bg-opacity-90 rounded-lg shadow-lg space-x-4"
              >
                  {/* Color Picker */}
                  <div className="flex flex-col items-center">
                      <label className="text-sm font-semibold text-gray-700 mb-1">Color:</label>
                      <input
                          type="color"
                          id="color"
                          defaultValue="#df4b26"
                          className="w-12 h-12 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      />
                  </div>

                  {/* Line Width */}
                  <div className="flex flex-col items-center">
                      <label className="text-sm font-semibold text-gray-700 mb-1">Line Width:</label>
                      <input
                          type="number"
                          id="linewidth"
                          defaultValue="5"
                          min="1"
                          max="10"
                          className="w-20 p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      />
                  </div>

                  {/* Tool Selector */}
                  <div className="flex flex-col items-center">
                      <label className="text-sm font-semibold text-gray-700 mb-1">Tool:</label>
                      <select
                          id="tool"
                          className="w-32 p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      >
                          <option value="brush">Brush</option>
                          <option value="eraser">Eraser</option>
                      </select>
                  </div>

                  {/* Reset Button */}
                  <div>
                      <button
                          id="reset"
                          className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none"
                      >
                          Reset Canvas
                      </button>
                  </div>
              </div>
          </div>
      </>
  );
}
