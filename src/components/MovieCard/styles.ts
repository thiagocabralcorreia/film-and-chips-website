import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const Card = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px;
  background-color: ${props => props.theme.colors.gray500};
  transition: 0.75s;
  border-radius: 6px;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  transition: 0.75s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const CardTop = styled.div`
  width: 100%;
  padding-top: 150%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  display: inline-block;
  vertical-align: top;
`;

export const CardPoster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  opacity: 1;
  transition: 0.75s;

  &:hover {
    opacity: 0.6;
  }
`;

export const CardInfo = styled.div`
  padding: 10px 0 5px;
`;

export const CardTitle = styled.h4`
  font-size: ${txt.size.small};
  font-weight: ${txt.weight.semibold};
  margin-bottom: 10px;
`;

export const CardTYear = styled.p`
  font-size: ${txt.size.small};
`;
