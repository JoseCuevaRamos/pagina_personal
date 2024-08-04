import styled from 'styled-components';


export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 700px; /* Ajusta esto según el tamaño de la imagen circular */
  max-height: 700px; /* Ajusta esto según el tamaño de la imagen circular */
  pointer-events: none; /* Para que la animación no interfiera con clics */

  @media (max-width: 962px) {
    max-width: 580px;
    max-height: 580px;
    left: 50%;
    top: 25%;
  }

  @media (max-width: 640px) {
    top:23%;
    max-width: 400px;
    max-height: 400px;
  }
`