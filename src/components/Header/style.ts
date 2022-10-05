import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 0rem;
  margin: 0rem 1rem;
  text-align: center;
`

export const ButtonMenu = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: gray;
  }
`
