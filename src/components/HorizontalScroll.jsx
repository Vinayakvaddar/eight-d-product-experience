import { useEffect, useRef, useState } from "react"
import ProgressDots from "./ProgressDots"

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null)
  const isPaused = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Duplicate slides for infinite loop
  const slides = [...children, ...children]

  useEffect(() => {
    const container = containerRef.current
    let animationId

    // Start from middle to allow left & right loop
    container.scrollLeft = container.scrollWidth / 4

    const autoScroll = () => {
      if (!isPaused.current) {
        container.scrollLeft += 1.5
      }

      const singleSetWidth = container.scrollWidth / 2

      // If we reach end → jump back
      if (container.scrollLeft >= singleSetWidth) {
        container.scrollLeft -= singleSetWidth
      }

      // If we reach start → jump forward
      if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth
      }

      const index = Math.round(
        (container.scrollLeft % singleSetWidth) / window.innerWidth
      )
      setActiveIndex(index)

      animationId = requestAnimationFrame(autoScroll)
    }

    autoScroll()
    return () => cancelAnimationFrame(animationId)
  }, [])

  const scrollLeft = () => {
    isPaused.current = true
    containerRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth"
    })
    setTimeout(() => (isPaused.current = false), 1200)
  }

  const scrollRight = () => {
    isPaused.current = true
    containerRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    })
    setTimeout(() => (isPaused.current = false), 1200)
  }

  const goToSection = (index) => {
    isPaused.current = true
    containerRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    })
    setTimeout(() => (isPaused.current = false), 1200)
  }

  return (
    <div id="products" style={{ position: "relative" }}>
      {/* Arrows */}
      <button className="nav-btn left" onClick={scrollLeft}>
        &#8249;
      </button>
      <button className="nav-btn right" onClick={scrollRight}>
        &#8250;
      </button>

      {/* Progress */}
      <ProgressDots
        total={children.length}
        activeIndex={activeIndex}
        onDotClick={goToSection}
      />

      <div
        ref={containerRef}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflowX: "scroll",
          overflowY: "hidden"
        }}
      >
        {slides}
      </div>
    </div>
  )
}

export default HorizontalScroll
