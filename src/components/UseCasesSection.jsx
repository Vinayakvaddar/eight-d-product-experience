import UseCaseCard from "./UseCaseCard"
import { useCases } from "../data/useCases"

const UseCasesSection = () => {
  return (
    <section className="usecases-section" id="usecase">
      <div className="usecases-header">
        <h2>Use Cases</h2>
      
        <p>How businesses apply 8-D intelligence in real scenarios</p>
      </div>

      <div className="usecases-list">
        {useCases.map((u, index) => (
          <UseCaseCard
            key={u.id}
            title={u.title}
            description={u.description}
            image={u.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}


export default UseCasesSection
