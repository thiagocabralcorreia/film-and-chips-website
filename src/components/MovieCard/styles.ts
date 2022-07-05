import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const Card = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${props => props.theme.colors.gray500};

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;


export const CardTop = styled.div`
  height: 300px;
`;

export const CardPoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardInfo = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const CardTYear = styled.p`
  margin-bottom: 10px;
`;
