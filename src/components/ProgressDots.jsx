const ProgressDots = ({ total, activeIndex, onDotClick }) => {
  return (
    <div className="progress-dots">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i === activeIndex ? "active" : ""}`}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  )
}

export default ProgressDots
