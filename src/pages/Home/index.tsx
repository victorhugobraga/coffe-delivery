import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeIntro from '../../assets/coffe-intro.png'
import {
  BenefitIcon,
  BenefitsContainer,
  IntroContainer,
  ProductCard,
  ProductsContainer,
  Tags,
} from './styles'

export function Home() {
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
          <ProductCard>
            {/* <img src={CoffeIntro} alt="" /> */}
            <Tags>
              <span>TRADICIONAL</span>
            </Tags>

            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </ProductCard>
        </div>
      </ProductsContainer>
    </main>
  )
}
