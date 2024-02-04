import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const baseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border: none;
  border-radius: 0.375rem;

  font-size: 0.875rem;
  font-weight: 130;
  cursor: pointer;

  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`

export const LocateButton = styled(baseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
    width: 15.13px;
    height: 19.25px;
  }
`

export const CheckoutButton = styled(baseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  svg {
    width: 18.56px;
    height: 17.88px;
  }
`
