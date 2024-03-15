type TButtonProps = {
  type: 'button' | 'submit',
  label: string,
  icon: string,
  variant: string,
}

const Index = ({type, label, icon, variant}: TButtonProps) => {
  return (
    <button
      className="btn-primary"
      type={type}
    >
      <span className="text-2lg text-white">{label}</span>
      {icon && icon}
    </button>
  )
}

export default Index
