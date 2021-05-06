import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${props => props.theme.main.colors.won.blue};
  bottom: 0;
  .poweredBy {
    width: 100%;
    bottom: 0;
    height: 3rem;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 3rem;
    background-color: rgba(255, 255, 255, 0.02);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    color: ${props => props.theme.main.colors.won.orange};
  }
`;

const A = styled.a`
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.main.colors.won.orange};

  &:hover {
    color: ${props => props.theme.main.colors.won.orange};
    text-decoration: underline;
  }
`;

export default Wrapper;
export { A };
