export default function Konva() {
    return (
        <>
            {/* Control Panel */}
            <div
                id="controls"
                className="flex items-center space-x-4 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg w-auto justify-between"
            >
                {/* Color Picker */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Color:</label>
                    <input
                        type="color"
                        id="color"
                        defaultValue="#df4b26"
                        className="w-12 h-12 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Line Width */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Line Width:</label>
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
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Tool:</label>
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

            <br />

            {/* Main Content */}
            <div className="flex flex-row items-center w-full space-x-10 p-10">
                {/* Doodle Text */}
                <p className="text-4xl text-white p-10">Send me some doodle :3</p>

                {/* Canvas Container */}
                <div className="h-[600px] w-[70%] justify-center">
                    <div
                        id="container"
                        className="bg-white border-8 border-blue-800 h-[600px] flex items-end justify-center"
                    ></div>

                    {/* Send Button */}
                    <button
                        className="w-full bg-white text-3xl text-center border-blue-800 border-8 border-t-4 hover:text-white font-semibold py-2 px-4 flex items-center space-x-2 mb-0 hover:bg-blue-800"
                    >
                        <span className="text-center">Send anonymously</span>
                        <span className="text-center" role="img" aria-label="send">🍪👀</span>
                    </button>
                </div>
                
            </div>
            <br />
                <br /><br />
        </>
    );
}
