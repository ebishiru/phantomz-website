import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-1 flex-col justify-center items-center text-center bg-neutral-900 text-yellow-300">
            <h1 className="font-bold text-4xl p-2 m-4">How to Play</h1>
            {/* Section 1 */}
            <div className="p-3 max-w-xl">
                <div className="flex justify-center items-center gap-4 my-2">
                    <Image src="/boss5.png" alt="Black Knight" width={48} height={48} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                    <Image src="/boss24.png" alt="Reaper" width={48} height={48} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                </div>
                <p className="font-bold text-lg pb-2">Fight Through Deadly Bosses:</p>
                <p>Every boss has their own set of unique mechanics. Watch out for the telegraphs, identify the cast names, find openings and strike back at the right time. Don't get caught standing still either.</p>
            </div>
            {/* Section 2 */}
            <div className="p-3 max-w-xl">
                <div className="flex justify-center items-center gap-4 my-2">
                    <Image src="/slash-icon.png" alt="Slash skill" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                    <Image src="/fireball-icon.png" alt="Fireball skill" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                    <Image src="/vitality-icon.png" alt="Vitality passive" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                    <Image src="/executioner-icon.png" alt="Executioner passive" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                </div>
                <p className="font-bold text-lg pb-2">Build Your Character:</p>
                <p>Each slain boss rewards you with experience to level up, allowing you to choose from a growing collection of active skills and passive upgrades.</p>
                <p>Combine different abilities to create powerful builds, fit for the challenges ahead.</p>
            </div>
            {/* Section 3 */}
            <div className="p-3 max-w-xl">
                <div className="flex justify-center items-center gap-4 my-2">
                    <Image src="/clockwise-icon.png" alt="Clockwise icon" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                    <Image src="/hook-icon.png" alt="Hook skill" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                    <Image src="/gust-icon.png" alt="Gust skill" width={32} height={32} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                </div>
                <p className="font-bold text-lg pb-2">Master Movement:</p>
                <p>PhantomZ isn't just about attacking.</p>
                <p>Positioning, movement, and the anticipation of attacks are just as important. Learn the boss patterns and move to the right spot before it's too late.</p>
            </div>
            {/* Section 4 */}
            <div className="p-3 max-w-xl">
                <div className="flex justify-center items-center gap-4 my-2">
                    <Image src="/trophy-icon.png" alt="Trophy" width={48} height={48} className="[image-rendering:pixelated] transition-transform duration-300 ease-out hover:-translate-y-2"/>
                </div>
                <p className="font-bold text-lg pb-2">Chase High Scores:</p>
                <p>Every run is a chance to improve your score. Defeat bosses, survive longer, master your build, and climb the leaderboard.</p>
                <p>Can you become the top PhantomZ player?</p>
            </div>
        </div>
    )
}