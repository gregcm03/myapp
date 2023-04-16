import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const {width, height} = useWindowSize()

    console.log(width, height)

    const moveOrb = keyframes`
      0%{
          transfrom: translate(0,0);
      }
      50%{
        transform: translate(${width}px, ${height/2}px);
      }
      100%{
        transform: translate(0, 0);
      }
    `
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #57659B 0%, #A86CA9 100%);
        filter: blur(200px);
        animation: ${moveOrb} 15s alternate linear infinite;       
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb