import Chat from "./components/comment.tsx";
import Intro from "./components/intro.tsx"
import Konva from "./components/konva.tsx"
import Playlist from "./components/playlist.tsx";
import SocialMediaList from "./components/Social.tsx";
export default function Main() {
    return (
        <>
        <div className=" mx-auto w-[90vw] flex flex-col items-center backdrop-blur-sm bg-white/10 z-50 space-y-10">
            
            <Intro />
             {/* <Konva />  
             <Chat /> */}
             <Playlist/>
             <SocialMediaList />
            
                    </div>
        </>
    )
}