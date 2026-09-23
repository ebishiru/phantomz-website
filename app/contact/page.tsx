import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="flex flex-1 flex-col justify-center items-center text-center bg-neutral-900 text-yellow-300">
            <h1 className="font-bold text-4xl p-2 m-4">Contact</h1>
            {/* Section 1*/}
            <div className="p-3 max-w-xl">
                <div className="flex justify-center items-center my-2">
                    <Image src="/boss4.png" alt="Crawler" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                </div>
                <p className="font-bold text-lg pb-2">Bug Reports</p>
                <p>Found something that doesn't seem right? Let me know what happened, what you were doing when it happened, and what device you were playing on.</p>
            </div>
            {/* Section 2*/}
            <div className="p-3 max-w-xl">
                <p className="font-bold text-lg pb-2">Feedback & Suggestions</p>
                <p>Have an idea that could make PhantomZ better? Whether it's a new boss mechanic, skill, quality-of-life feature, or something you'd like to see added, feel free to share it.</p>
            </div>
            {/* Section 3*/}
            <div className="p-3 max-w-xl">
                <div className="flex justify-center items-center my-2">
                    <Image src="/boss18-fakeout.png" alt="Question mark" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                </div>
                <p className="font-bold text-lg pb-2">General Question</p>
                <p>For anything else related to PhantomZ, you can reach out here as well.</p>
                <p className="text-lg p-2">Email: <a className="underline" href="mailto:kevinkarholo@gmail.com">kevinkarholo@gmail.com</a></p>
            </div>
            {/* Section 3*/}
            <div className="p-3 max-w-xl">
                <button className="bg-yellow-300 text-black rounded p-2 hover:scale-125 animation-all duration-300 ease-out cursor-pointer"><Link href="/privacypolicy">Privacy Policy</Link></button>
            </div>
        </div>
    )
}