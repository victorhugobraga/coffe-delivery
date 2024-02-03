import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  border: none;
  border-radius: 0.375rem;
  transition: 300ms;

  font-size: 0.875rem;
  font-weight: 130;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`

export const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  background: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 0.375rem;
  transition: 300ms;

  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`
