export default function Intro() {
    return (
        <div className="mb-32 flex p-3">
            <div className="container max-w-4xl mx-auto text-center">
                <p className="text-4xl md:text-6xl text-white font-bold mb-8">
                    Welcome to Yuzuki's Cage
                </p>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    <img
                        id="profilePic"
                        src="https://cdn.bsky.app/img/avatar/plain/did:plc:djfqe5vhwjgzfa3lv6hsnapo/bafkreibhg7xamkn5letulafviy6kptp5a7crzr6nnaxxtzmfckwleedm24@jpeg"
                        alt="Profile of Yuzuki"
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto md:mx-0 shadow-lg"
                    />
                    <p className="text-lg md:text-2xl text-white mt-6 md:mt-0 md:ml-6 leading-relaxed">
                        Hello, I'm Yuzuki. I'm very happy you visited my cage.<br />
                        I love anime, J-pop, BL, manga, Nier, Drakengard, Ensemble Stars, Games,<br />
                        Programming, Persona, Game Development, and Music.<br /><br />
                        Please, enjoy your stay...
                    </p>
                </div>
            </div>
        </div>
    );
}
