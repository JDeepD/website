import Link from "next/link"

export default function Projects(){
    return (
        <div className="flex items-center justify-center flex-col">
            <p>
                I am yet to properly build this page.
                Please visit my old website for now. 
            </p>
            <Link href="https://jdeepd.github.io/projects">
                <p className="text-sky-500">Here you go anon</p>
            </Link>
        </div>
        
    ) 
}