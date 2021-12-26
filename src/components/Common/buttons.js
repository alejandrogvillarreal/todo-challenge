import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { YELLOW, DARK_GRAY } from '../../styles';

export const PreStyledButton = styled(({ hide, ...other }) => (
    <Button hide={hide} {...other} />
))`
  && {
    background-color: white;
    cursor: pointer;
    padding: 5px 10px;
    margin-top: auto;
    margin-right: 20px;
    height: 35px;
    font-size: 12px;
    text-transform: uppercase;
    min-width: ${props => props.width ? props.width : `85px`};
    box-shadow: none;
  }
  &&:hover {
    color: white;
  }
`;

export const PrimaryButton = styled(({ hide, ...other }) => (
    <PreStyledButton hide={hide} {...other} />
))`
  && {
    border: ${props => props.disabled ? `1px solid ${DARK_GRAY}` : `1px solid ${YELLOW}`};
    color: ${props => props.disabled ? DARK_GRAY : YELLOW};
  }
  &&:hover {
    background-color: ${props => props.disabled ? '' : YELLOW};
  }
`;

export const CancelButton = styled(({ hide, ...other }) => (
    <PreStyledButton hide={hide} {...other} />
))`
  && {
    color: ${DARK_GRAY};
    border: 1px solid transparent;
    text-transform: capitalize;
  }
  &&:hover {
    background-color: ${DARK_GRAY};
  }
`;

export const RoundButton50 = styled(Button)`
  && {
    background-color: ${props => props.disabled ? DARK_GRAY : YELLOW };
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0px;
    min-width: 0px;
  }
`;