import styled from 'styled-components';
import { Link as RouterLink } from '../common/common';

const WrapperNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const HeaderNotFound = styled.h2`
  margin: 0;
  padding: 30px 0;
`;

const LinkToMain = styled(RouterLink)`
  display: block;
  max-width: 150px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};
  padding: 20px;
  background-color: ${({ theme }) => theme.color.carrotOrange};

  border-radius: 10px;

  margin-top: 30px;


  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.eclipse};
  }
`;

export {LinkToMain, HeaderNotFound, WrapperNotFound};
