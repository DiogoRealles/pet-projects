
const Index = () => {
  return (
    <section className=" bg-white pt-24 pb-10" data-header="about">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex-1 px-10 py-8 ">
          <h2 className="sectionTitle">Sobre nós</h2>
          <p className="text-gray-800 max-w-lg leading-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className="flex-1 px-10 py-80 md:py-8 bg-white bg-mrbarber-about bg-cover bg-center w-full rounded-md"></div>
      </div>
    </section>
  )
}

export default Index
