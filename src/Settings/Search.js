import React from 'react';
import styled from 'styled-components';

const SearchGrid = styled.div`
  display: grid; 
  grid-template-columns: 200px 1fr; 
`;

export default function () {
    return (
        <SearchGrid>
            <h2>Search all coins</h2>
        </SearchGrid>
    )
}