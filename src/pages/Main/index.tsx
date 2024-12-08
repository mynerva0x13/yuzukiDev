import Intro from "./components/intro.tsx"
import Konva from "./components/konva.tsx"
export default function Main() {
    return (
        <>
        <div className="container mx-auto w-50 flex flex-col items-center pt-8 backdrop-blur-sm bg-white/10 z-50">
            <Intro />
            <Konva />
        </div>
        </>
    )
}