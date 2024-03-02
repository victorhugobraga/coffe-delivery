import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeIntro from '../../assets/coffe-intro.png'
import { ProductCard } from '../../components/ProductCard'
import {
  BenefitIcon,
  BenefitsContainer,
  IntroContainer,
  ProductsContainer,
} from './styles'

export function Home() {
  const coffeList = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: 'expresso-tradicional.png',
      tags: ['TRADICIONAL'],
    },
    {
      id: 2,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image: 'expresso-americano.png',
      tags: ['TRADICIONAL'],
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      image: 'expresso-cremoso.png',
      tags: ['TRADICIONAL'],
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: 'expresso-gelado.png',
      tags: ['TRADICIONAL', 'GELADO'],
    },
    {
      id: 5,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: 'cafe-com-leite.png',
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: 6,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: 'latte.png',
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: 7,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image: 'capuccino.png',
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: 8,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: 'macchiato.png',
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: 9,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: 'mocaccino.png',
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: 'chocolate-quente.png',
      tags: ['TRADICIONAL', 'COM LEITE'],
    },
    {
      id: 11,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9,
      image: 'cubano.png',
      tags: ['TRADICIONAL', 'ALCOÓLICO', 'GELADO'],
    },
    {
      id: 12,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: 'havaiano.png',
      tags: ['ESPECIAL'],
    },
    {
      id: 13,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: 'arabe.png',
      tags: ['ESPECIAL'],
    },
    {
      id: 14,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: 'irlandes.png',
      tags: ['ESPECIAL', 'ALCOÓLICO'],
    },
  ]

  return (
    <main>
      <IntroContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Como Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>

            <BenefitsContainer>
              <div>
                <BenefitIcon color="orange">
                  <ShoppingCart weight="fill" />
                </BenefitIcon>
                <p>Compra simples e segura</p>
              </div>

              <div>
                <BenefitIcon color="brown">
                  <Package weight="fill" />
                </BenefitIcon>
                <p>Embalagem mantém o café intacto</p>
              </div>

              <div>
                <BenefitIcon color="yellow">
                  <Timer weight="fill" />
                </BenefitIcon>
                <p>Entrega rápida e rastreada</p>
              </div>

              <div>
                <BenefitIcon color="purple">
                  <Coffee weight="fill" />
                </BenefitIcon>
                <p>O café chega fresquinho até você</p>
              </div>
            </BenefitsContainer>
          </div>
          <div>
            <img src={CoffeIntro} alt="" />
          </div>
        </div>
      </IntroContainer>

      <ProductsContainer>
        <h2>Nossos cafés</h2>

        <div>
          {coffeList.length > 0 ? (
            coffeList.map((coffe) => (
              <ProductCard key={coffe.id} coffe={coffe} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </ProductsContainer>
    </main>
  )
}
