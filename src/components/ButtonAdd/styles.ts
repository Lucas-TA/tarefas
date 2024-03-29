import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  height: 64px;
  width: 64px;
  color: #fff;
  position: fixed;
  background-color: #44bd32;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
`
