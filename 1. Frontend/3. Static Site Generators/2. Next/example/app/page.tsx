import Image from "next/image";
import thumb from "@/public/images/hq720.jpg";

export default function Home() {
    return (
        <main className="p-10">
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ipsam
                similique cum sed odio expedita possimus magnam eaque id, ullam cupiditate
                itaque? Nesciunt maxime quas vel totam quisquam eligendi vitae.
            </h1>
            <div className="flex gap-10 mt-8">
                <Image placeholder="blur" src={thumb} alt="A thumbnail"  /> {/* Default quality is 75 */}
                <Image placeholder="blur" src={thumb} alt="A thumbnail" quality={1} />
            </div>
        </main>
    );
}
