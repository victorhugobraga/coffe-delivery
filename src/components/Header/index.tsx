import { CheckoutButton, HeaderContainer, LocateButton } from './styles'
import LogoCoffeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={LogoCoffeDelivery} alt="" />
      </a>

      <div>
        <LocateButton>
          <MapPin /> Uberlândia, MG
        </LocateButton>
        <CheckoutButton>
          <ShoppingCart />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  )
}
