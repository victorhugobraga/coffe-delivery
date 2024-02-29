import styled from 'styled-components'

export const IntroContainer = styled.section`
  background: url('./bg-intro.png');

  & > div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 5.75rem 0;

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
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[BENEFIT_ICON[props.color]]};
`
export const ProductsContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3.25rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['base-card']};
  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    width: min-content;
    margin: 0.5rem 0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
  }
`
