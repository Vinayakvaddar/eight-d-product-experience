const UseCaseCard = ({ title, description, image, reverse }) => {
  return (
    <div className={`usecase-row ${reverse ? "reverse" : ""}`}>
      <div className="usecase-image">
        <img src={image} alt={title} />
      </div>

      <div className="usecase-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="usecase-link">Learn more →</span>
      </div>
    </div>
  )
}

export default UseCaseCard
