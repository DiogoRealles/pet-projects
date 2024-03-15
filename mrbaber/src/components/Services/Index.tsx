import ItemServices from './ItemServices';

import {
  Post01,
  Post02,
  Post03,
  Service01,
  Service02,
  Service03,
} from '@/../../public/assets/img/Index'

const Index = () => {
  const data = [
    {
      image: Post01,
      text: 'Lorem...',
    },
    {
      image: Post02,
      text: 'Lorem...',
    },
    {
      image: Post03,
      text: 'Lorem...',
    },
    {
      image: Service01,
      text: 'Lorem...',
    },
  ];

  return (
    <section className="bg-white pt-24 pb-10" data-header="services">
      <div className="container mx-auto flex">
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-8 lg:gap-32 px-10 py-8">
          <div className="max-w-[600px] flex-1">
            <div className=" md:sticky top-8">
              <h2 className="sectionTitle">Escolha o seu estilo que a gente capricha!</h2>
              <p className="text-zinc-700">Sunt porro, aperiam doloremque incidunt cupiditate tempora odit dolore reiciendis voluptate quas non laudantium magnam ad quam. Deleniti numquam dolorum voluptatum nihil, velit molestiae pariatur corporis animi voluptatem earum commodi recusandae. Voluptate laudantium autem tenetur? Nisi, expedita odit est nobis distinctio labore.</p>
              <p className="text-zinc-700 mb-8">Molestiae labore cumque eum suscipit numquam, ullam veritatis quae voluptates alias ut. Quae adipisci iusto nam praesentium fuga cum quis eius placeat vel quo. Iste omnis maiores, exercitationem deleniti non inventore libero recusandae perferendis odit, excepturi quis tempore unde cumque, voluptatibus nemo!</p>
            </div>
          </div>
          <div className="max-w-[600px] flex-1 flex flex-col gap-0">
            <ul className=''>
              {data.map((item, index) => (
                <li key={index} className="w-full sticky top-8">
                  <ItemServices key={index} text={item.text} image={item.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
