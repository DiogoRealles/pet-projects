'use client'

type TProps = {
  label: string,
}

const GalleryButton = ({label}: TProps) => {

  return (
    <button
      className="btn-primary uppercase hover:bg-white hover:text-gray-800 shadow hover:shadow-md"
      type="button"
    >{label}</button>
  )
}

export default GalleryButton
