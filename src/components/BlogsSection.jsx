import BlogCard from "./BlogCard"
import { blogs } from "../data/blogs"

const BlogsSection = () => {
  return (
    <section className="blogs-section" id="blogs">
      <h2>Latest From Our Blog</h2>

      <div className="blogs-list">
        {blogs.map((b) => (
          <BlogCard
            key={b.id}
            image={b.image}
            title={b.title}
            description={b.description}
            category={b.category}
            date={b.date}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogsSection
