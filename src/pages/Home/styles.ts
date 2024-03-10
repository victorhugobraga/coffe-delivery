import styled from 'styled-components'

export const IntroContainer = styled.section`
  background: url('./bg-intro.png');

  & > div {
    box-sizing: content-box;
    max-width: 1120px;
    margin: 0 auto;
    padding: 5.75rem 1rem;

    display: flex;
    justify-content: space-between;
    column-gap: 3.5rem;

    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    h1 {
      font:
        800 3rem/130% 'Baloo 2',
        sans-serif;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }

    @media (max-width: 1024px) {
      img {
        display: none;
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 425px) {
      h1 {
        font-size: 1.2rem;
      }

      font-size: 1rem;
    }
  }
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`

const BENEFIT_ICON = {
  orange: 'yellow-dark',
  brown: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
}

interface BenefitIconProps {
  color: keyof typeof BENEFIT_ICON
}

export const BenefitIcon = styled.span<BenefitIconProps>`
  box-sizing: content-box;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[BENEFIT_ICON[props.color]]};
`
export const ProductsContainer = styled.section`
  box-sizing: content-box;
  max-width: 1120px;
  margin: 0 auto 10rem;
  padding: 0 1rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3.25rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 2.5rem;
  }
`
