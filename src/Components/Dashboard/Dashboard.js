import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Dashboard() {
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1 style={{ color: 'red' }}>Hello</h1>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  background-color: lightgray;
  padding: 2rem;
`;



export default Dashboard