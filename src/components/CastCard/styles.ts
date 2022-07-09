import styled from 'styled-components';
import { txt } from '../../styles/themes/typography';

export const CardCast = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  padding: 0 0 10px;
  transition: 0.75s;
  border-radius: 6px;
`;

export const CardCastTop = styled.div`
  width: 100%;
  padding-top: 120%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  display: inline-block;
  vertical-align: top;
`;

export const CardCastPortrait = styled.img`
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

export const CardCastInfo = styled.div`
  padding-top: 10px;
`;

export const CardCastName = styled.h4`
  color: ${props => props.theme.colors.title};
  font-size: ${txt.size.small};
  font-weight: ${txt.weight.bold};
  margin-bottom: 10px;
`;

export const CardCastAsCharacter = styled.h4`
  color: ${props => props.theme.colors.title};
  font-size: ${txt.size.extraSmall};
  font-weight: ${txt.weight.regular};
`;
