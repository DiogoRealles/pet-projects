import Link from "next/link";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsWhatsapp,
  BsClock,
} from "react-icons/bs";

const Index = () => {
  return (
    <section className=" bg-white pt-24 pb-10" data-header="contact">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 max-w-xl">
            <h2 className="sectionTitle">Fale conosco</h2>

            <form className="w-full">
              <div className="mb-4">
                <label className="text-black cursor-pointer mb-2 inline-block" htmlFor="name">Nome</label>
                <input className="outline-1 outline-gray-200 hover:outline-gray-500 w-full p-2 text-gray-800 outline-none rounded bg-gray-100" id="name" name="name" type="text" placeholder="Seu nome" />
              </div>

              <div className="mb-4">
                <label className="text-black cursor-pointer mb-2 inline-block" htmlFor="email">E-mail</label>
                <input className="outline-1 outline-gray-200 hover:outline-gray-500 w-full p-2 text-gray-800 outline-none rounded bg-gray-100" id="email" name="email" type="email" placeholder="Seu email" />
              </div>

              <div className="mb-4">
                <label className="text-black cursor-pointer mb-2 inline-block" htmlFor="tephone">Telefone</label>
                <input className="outline-1 outline-gray-200 hover:outline-gray-500 w-full p-2 text-gray-800 outline-none rounded bg-gray-100" id="tephone" name="tephone" type="text" placeholder="Seu tephone" />
              </div>

              <div className="mb-4">
                <label className="text-black cursor-pointer mb-2 inline-block" htmlFor="mensagem">Mensagem</label>
                <textarea className="outline-1 outline-gray-200 hover:outline-gray-500 w-full p-2 text-gray-800 outline-none rounded bg-gray-100 pb-8" id="mensagem" name="mensagem" placeholder="Sua mensagem"></textarea>
              </div>

              <div className="mb-4">
                <button type="submit" className="btn-primary">Enviar</button>
              </div>
            </form>
          </div>

          <div className="flex-1">
            <h2 className="sectionTitle">Onde nos encontrar</h2>

            <div className="w-full h-80">
              <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d913.6766946046655!2d-46.73733388161766!3d-23.650669834579702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce516fded9fc91%3A0xe890ca071fbfa4b0!2sR.%20Jo%C3%A3o%20Meimberg%2C%201984%20-%20Jardim%20S%C3%A3o%20Lu%C3%ADs%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005843-300!3m2!1d-23.6501216!2d-46.7372332!5e0!3m2!1sen!2sbr!4v1697994833522!5m2!1sen!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <ul className="py-4 grid grid-cols-2 gap-4">
              <li className="flex gap-2 items-center w-fit">
                <Link className="flex gap-2 items-center w-fit" href="https://api.whatsapp.com/send?phone=5511987441150&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20agendamento" target="_blank">
                  <BsWhatsapp className="text-orange-mrbarber-400"/>
                  <span className="text-black text-sm">(11) 9 8744-1150</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center w-fit" href="https://api.whatsapp.com/send?phone=5511987441150&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20agendamento" target="_blank">
                  <BsFillTelephoneFill className="text-orange-mrbarber-400" />
                  <span className="text-black text-sm">(11) 9 4321-8765</span>
                </Link>
              </li>
              <li className="flex gap-2 items-center w-fit">
                <BsClock className="text-orange-mrbarber-400" />
                <span className="text-black text-sm">Seg. a Sex: 10:00h às 20:00h</span>
              </li>
              <li className="flex gap-2 items-center w-fit">
                <Link className="flex gap-2 items-center w-fit" href="">
                  <BsFillEnvelopeFill className="text-orange-mrbarber-400" />
                  <span className="text-black text-sm">contato@mrbarber.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
