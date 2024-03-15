import Post from "@/types/Post";
import Image from "next/image"
import Link from "next/link"

type TMyPostsProps = {
  item: Post;
}

const Index = ({ item }: TMyPostsProps) => {

  return (
    <li className="grid max-w-xs grid-rows-[1fr,15rem] shadow hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <Image
          className="hover:scale-110 transition-all duration-300 h-full w-full object-cover"
          src={item.image}
          width={360}
          height={240}
          alt={item.category}
        />
        <span className="bg-orange-mrbarber-400 py-1 px-3 rounded-full text-sm text-center absolute top-2 right-2">{item.category}</span>
      </div>

      <div className="px-4 pt-8">
        <Link className="text-black font-semibold mb-4 inline-block text-2xl" href={`posts/${item.id}`}>{item.title}</Link>
        <p className="text-gray-800">{item.text}</p>
      </div>
      <Link className="px-4 pb-4 text-orange-mrbarber-400 uppercase inline-block hover:underline underline-offset-4 w-fit py-1" href={`posts/${item.id}`}>Saiba mais</Link>
    </li>
  )
}

export default Index
