import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'
import { ProductIcon } from './icons/Icons'
import { products } from '../data/content'

export default function Products() {
  return (
    <section id="products" className="bg-cream py-[70px] lg:py-[110px]">
      <div className="mx-auto max-w-[1220px] px-8 max-lg:px-5">
        <SectionHead
          tag="// Product Range"
          title="Four ways to feed the soil, built for how you actually farm."
          description="Every formulation starts with regional soil data — not a generic blend. Pick a category to see where it fits in your crop cycle."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Reveal
              key={product.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white px-[26px] py-[30px] transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[var(--shadow-card)]"
            >
              <div className={`absolute top-0 right-0 left-0 h-[5px] ${product.barColor}`} />
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${product.iconBg}`}
              >
                <ProductIcon name={product.icon} />
              </div>
              <h3 className="mb-2.5 font-[family-name:var(--font-display)] text-[18.5px] font-semibold text-charcoal">
                {product.title}
              </h3>
              <p className="text-[14.5px] text-charcoal-soft">{product.description}</p>
              <div className="mt-4.5 flex flex-wrap gap-1.5 font-[family-name:var(--font-mono)] text-[11.5px] text-charcoal-soft">
                {product.tags.map((tag) => (
                  <b
                    key={tag}
                    className="rounded-[5px] bg-paper px-2 py-0.5 font-medium text-charcoal"
                  >
                    {tag}
                  </b>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
