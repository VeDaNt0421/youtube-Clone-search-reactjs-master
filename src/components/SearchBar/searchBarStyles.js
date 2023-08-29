// searchBarStyles.js
import styled from 'styled-components';

export const SearchButton = styled.button`
  background-color: #ff4500; /* Change to your preferred color */
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 10px; /* Added margin for spacing */
  cursor: pointer;
`;


export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`;

export const Search = styled.input`
  flex: 1;
  border: none;
  padding: 5px;
  border-radius: 3px;
`;