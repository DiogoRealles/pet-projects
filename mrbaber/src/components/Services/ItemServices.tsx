import Image from "next/image"

type TProps = {
  text: string,
  image: any,
}

const ItemServices = ({ text, image }: TProps) => {
  return (
    <>
      <div className="relative w-full md:w-[450px] h-[350px] flex items-center justify-center">
        <Image
          className="object-cover rounded-md"
          src={image}
          fill
          alt=""
        />
      </div>
      <p className="flex-1 text-text-gray">
        {text}
      </p>
    </>
  )
}

export default ItemServices
