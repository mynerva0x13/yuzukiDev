import Intro from "./components/intro.tsx"
import Konva from "./components/konva.tsx"
export default function Main() {
    return (
        <>
        <div className=" mx-auto w-[90vw] flex flex-col items-center pt-8 backdrop-blur-sm bg-white/10 z-50">
            
            <Intro />
             <Konva /> 
        </div>
        </>
    )
}