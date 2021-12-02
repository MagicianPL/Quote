import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background: white;
  padding: 10px 15px;
  fon-weight: bold;
  font-size: 20px;
  cursor: pointer;
  display: block;
  margin-bottom: 25px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    color: white;
    background: black;
    transform: translateY(-10px);
  }

  &[disabled]:hover {
    opacity: 0.4;
    background: white;
    color: black;
  }
`;

export default StyledButton;
