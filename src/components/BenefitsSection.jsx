import BenefitCard from "./BenefitCard"
import { benefits } from "../data/benefits"

const BenefitsSection = () => {
  return (
    <section className="benefits-section" id="benefits">
      <h2>Why Choose 8-D</h2>
      <p className="benefits-subtitle">
        Unlock the full potential of data-driven growth
      </p>

      <div className="benefits-grid">
        {benefits.map((b) => (
          <BenefitCard
            key={b.id}
            icon={b.icon}
            title={b.title}
            description={b.description}
          />
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
