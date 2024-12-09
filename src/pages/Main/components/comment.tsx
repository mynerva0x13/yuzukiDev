export default function Chat() {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl mx-auto space-y-6 sm:space-x-10 sm:space-y-0">
                <img
                    src="/image/nier-nier-replicant.gif"
                    alt="Nier Replicant"
                    className="w-full sm:w-auto"
                />
                <div className="p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2">
                    <input
                        type="text"
                        placeholder="Ask me anything :3"
                        className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button className="mt-4 flex items-center justify-center w-full p-3 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-200">
                        <span>Send anonymously</span>
                        <span className="ml-2">✍️🤫</span>
                    </button>
                </div>
            </div>
        </>
    );
}
