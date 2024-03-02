import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { ProductCardContainer, Quantity, Tags } from './styles'

interface Product {
  name: string
  image: string
  description: string
  price: number
  tags: string[]
}

export function ProductCard({ coffe }: { coffe: Product }) {
  return (
    <ProductCardContainer>
      <img src={coffe.image} alt={coffe.name} />
      <Tags>
        {coffe.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <h3>{coffe.name}</h3>
      <p>{coffe.description}</p>

      <footer>
        <span className="price">
          <small>R$</small> {coffe.price.toFixed(2).replace('.', ',')}
        </span>

        <div>
          <Quantity>
            <button>
              <Minus weight="bold" />
            </button>
            <input type="number" defaultValue={1} />
            <button>
              <Plus weight="bold" />
            </button>
          </Quantity>

          <button className="buy">
            <ShoppingCartSimple weight="fill" />
          </button>
        </div>
      </footer>
    </ProductCardContainer>
  )
}
