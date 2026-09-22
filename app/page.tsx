
import ImageSlideShow from "@/components/imageslideshow";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-center bg-neutral-900 text-yellow-300">
      {/* Title */}
      <h1 className="font-bold text-5xl py-2 px-4">The Last PhantomZ</h1>
      {/* Preview */}
      <div className="mx-4 my-8 border-2 border-yellow-300 rounded-3xl">
        <ImageSlideShow />
      </div>
      {/* Download Button */}
      <button className="w-40 bg-green-700 text-white mt-1 mb-2 py-2 px-4 rounded cursor-pointer hover:bg-green-600 hover:scale-125 transition-all duration-300 ease-out"><a href="https://play.google.com/store/apps/details?id=com.kevinlo.phantomz" target="_blank">Google Play Link</a></button>
      {/* Short Description */}
      <div className="flex flex-col gap-4 p-4 m-4 rounded-3xl max-w-3xl">
        <p>The Last PhantomZ is a fast-paced 2D arcade action game where every move matters.</p>
        <p>Face off against dangerous bosses, each with their own unique attack patterns, and strike back with your own unique arsenal of skills. As you progress and level up, unlock new skills, passives, and upgrades that create a build fitting your playstyle.</p>
        <p className="font-bold text-xl">How far can you get?</p>
      </div>
    </div>
  );
}
