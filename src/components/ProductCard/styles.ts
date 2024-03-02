import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['base-card']};
  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  text-align: center;
  height: 310px;
  position: relative;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    top: -25px;
  }

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

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;

    .price {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-text']};

      small {
        font-size: 0.75rem;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .buy {
      padding: 0.5rem;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};

      border: 0;
      border-radius: 6px;
    }
  }
`
export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.125rem;
    border: 0;

    background: none;
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input {
    border: 0;
    width: 20px;
    background: none;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
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
