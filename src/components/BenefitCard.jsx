const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <img
        src={icon}
        alt={title}
        className="benefit-icon-img"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default BenefitCard
