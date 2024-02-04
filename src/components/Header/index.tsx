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
          <MapPin weight="fill" width={16} /> Uberlândia, MG
        </LocateButton>
        <CheckoutButton>
          <ShoppingCart weight="fill" />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  )
}
