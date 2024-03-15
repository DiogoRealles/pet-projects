import Image from 'next/image';
import GalleryButton from './GalleryButton';
import { Post01, Post02, Post03, Service01, Service02, Service03, } from '../../../public/assets/img/Index';

const Index = () => {
  const data = [
    {
      label: 'Todos',
    },
    {
      label: 'Barba',
    },
    {
      label: 'Corte',
    },
    {
      label: 'Sobrancelha',
    },
  ];

  return (
    <section className="bg-white py-10" data-header="gallery">
      <div className="container mx-auto">
        <header className="flex flex-col justify-center items-center mb-10">
          <h2 className="sectionTitle">Nossa Galeria</h2>
          <p className="font-robotoRegular font-semibold text-lg text-black text-center">Veja os nossos estilos</p>
        </header>

        <ul className="flex gap-3 md:gap-6 items-center md:justify-center md:flex-row overflow-auto mb-6 p-4">
          {data.map((item, index) => (
            <li key={index}>
              <GalleryButton key={index} {...item} />
            </li>
          ))}
        </ul>

        <ul className='flex justify-center flex-wrap gap-4 px-4 md:px-0'>
          <li className='rounded relative overflow-hidden'>
            <div className="w-[400px] h-[300px] group">
              <Image
                className="hover:scale-110 transition-all duration-300"
                src={Post01}
                fill
                alt=''
              />
            </div>
          </li>
          <li className='rounded relative overflow-hidden'>
            <div className="w-[400px] h-[300px] group">
              <Image
                className="hover:scale-110 transition-all duration-300"
                src={Post02}
                fill
                alt=''
              />
            </div>
          </li>
          <li className='rounded relative overflow-hidden'>
            <div className="w-[400px] h-[300px] group">
              <Image
                className="hover:scale-110 transition-all duration-300"
                src={Post03}
                fill
                alt=''
              />
            </div>
          </li>
          <li className='rounded relative overflow-hidden'>
            <div className="w-[400px] h-[300px] group">
              <Image
                className="hover:scale-110 transition-all duration-300"
                src={Service01}
                fill
                alt=''
              />
            </div>
          </li>
          <li className='rounded relative overflow-hidden'>
            <div className="w-[400px] h-[300px] group">
              <Image
                className="hover:scale-110 transition-all duration-300"
                src={Service02}
                fill
                alt=''
              />
            </div>
          </li>
          <li className='rounded relative overflow-hidden'>
            <div className="w-[400px] h-[300px] group">
              <Image
                className="hover:scale-110 transition-all duration-300"
                src={Service03}
                fill
                alt=''
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Index
