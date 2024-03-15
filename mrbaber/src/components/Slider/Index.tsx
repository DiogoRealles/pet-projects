import Image from "next/image"
import { IconMap, IconQuote, Img01, Img02 } from "../../../public/assets/img/Index"
import { PEOPLE_URL } from "@/constants"

interface ICampProps {
  backgroundImage: any,
  title: string,
  subtitle: string,
  peopleJoined: string,
}


const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: ICampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-3xl 2xl:rounded-3xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-mrbarber-400 p-4">
            <Image
              src={IconMap}
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white">{title}</h4>
            <p className="font-medium text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-service-01"
          title="Corte de cabelop"
          subtitle="no seu estilo"
          peopleJoined="50+ cortes"
        />
        <CampSite
          backgroundImage="bg-service-02"
          title="Ambiente descontraído"
          subtitle="Bate papo enquanto aguarda seua vez"
          peopleJoined="150+ clientes"
        />
      </div>

      <div className="flex justify-end mt-10 px-6 md:px-0 lg:-mt-60 lg:mr-0">
        <div className="bg-orange-mrbarber-400 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="font-thin text-white text-6xl">
            Muito mais que uma <strong className="font-heading text-8xl font-black">barbearia</strong>
          </h2>
          <p className="font-medium mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex illo ullam eveniet sequi, harum minus necessitatibus rerum accusamus aspernatur, aut, debitis autem minima. Odit inventore a quaerat eos natus enim!
          </p>
          <Image
            className="absolute right-0 bottom-0"
            src={IconQuote}
            alt=""
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  )
}

export default Index
