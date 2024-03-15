import Card from '@/components/Card/Index';
import { fetchMyPosts } from "@/api/my-posts/api"

const Index = async () => {
  const myPosts = await fetchMyPosts();

  return (
    <section className=" bg-white pt-24 pb-10" data-header="blog">
      <div className="container mx-auto">
        <header className="flex flex-col justify-center items-center mb-10">
          <h2 className="sectionTitle">Nosso blog</h2>
          <p className="font-robotoRegular font-semibold text-lg text-black text-center">Confira as dicas que temos para você!</p>
        </header>
        <ul className='flex flex-col gap-8 md:flex-row items-center md:justify-center'>
          {myPosts.map((item: any) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Index