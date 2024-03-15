
const Index = () => {
  function handleModal() {
    alert('MODAL')
  }

  return (
    <div>
      <button
        onClick={handleModal}
      >Open</button>
    </div>
  )
}

export default Index
