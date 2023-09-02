import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import {Pie3D, Column3D, Bar3D, Doughnut2D, ExampleChart } from './Charts';

const Repos = () => {
  const {repos} = useContext(GithubContext)
  console.log(repos);
  
  const chartData = [
    {
      label: "HTML",
      value: "13"
    },
    {
      label: "css",
      value: "23"
    },
    {
      label: "js",
      value: "64"
    }
  ];

  return <section>
    <Wrapper className='section-center'>
      <ExampleChart data={chartData}/>
    </Wrapper>
  </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
