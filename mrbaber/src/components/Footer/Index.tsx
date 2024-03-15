import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

const Index = () => {
  return (
    <footer className="py-6 bg-orange-mrbarber-400">
      <div className="container mx-auto flex flex-col justify-center items-center gap-2">
        <p className="text-center"><strong>Barbearia Rock Bar ©</strong> <span data-js="yearFooter">2023</span> — Todos os direitos reservados.</p>

        <ul className="footer-social flex justify-center items-center gap-1">
          <li className="cursor-pointer hover:bg-black p-2 rounded-full text-sm transition-all duration-300"><a href="#" target="_blank"><BsInstagram /></a></li>
          <li className="cursor-pointer hover:bg-black p-2 rounded-full text-sm transition-all duration-300"><a href="#" target="_blank"><BsYoutube /></a></li>
          <li className="cursor-pointer hover:bg-black p-2 rounded-full text-sm transition-all duration-300"><a href="#" target="_blank"><BsFacebook /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Index
