import Navbar from "./components/Navbar"
import HorizontalScroll from "./components/HorizontalScroll"
import ProductSection from "./components/ProductSection"
import UseCasesSection from "./components/UseCasesSection"
import { products } from "./data/products"
import BenefitsSection from "./components/BenefitsSection"
import BlogsSection from "./components/BlogsSection"
import ContactSection from "./components/ContactSection"

function App() {
  return (
    <>
      <Navbar />

      <HorizontalScroll>
        
        {products.map((p, i) => (
          <ProductSection
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            index={i + 1}
            total={products.length + 1}
          />
        ))}
      </HorizontalScroll>

      <UseCasesSection />
      <BenefitsSection />
      <BlogsSection />
      <ContactSection />   
    </>
  )
}

export default App
