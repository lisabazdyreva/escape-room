import styled, { css } from 'styled-components';
import { ITabBtn } from '../../../types';

const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;

  @media (max-width: 1110px) {
    align-self: center;
  }
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-width: 190px;
  margin-bottom: 20px;

  &:not(:last-of-type) {
    padding-right: 40px;
    margin-right: 39px;
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }

  @media (max-width: 1110px) {
    &:not(:last-of-type) {
      padding-right: 30px;
      margin-right: 29px;
    }
  }
`;

const TabBtn = styled.button.attrs({ type: 'button' })<ITabBtn>`
  display: flex;
  align-items: center;
  padding: 0;

  font-family: inherit;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 140%;
  letter-spacing: -0.02em;
  font-weight: 700;

  color: ${({ theme }) => theme.color.whisper2};
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray};
    cursor: not-allowed;
  }

  &:focus span,
  &:hover span {
    border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
  }

  &:disabled span {
    border: none;
  }

  ${({ isActive }) =>
  isActive &&
  css`
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
      }
    `}
`;

const TabTitle = styled.span`
  margin-left: 13px;
  padding-top: 4px;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
`;

export {
  Tabs,
  TabItem,
  TabBtn,
  TabTitle
}
