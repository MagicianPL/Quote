import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  position: relative;

  &::before {
    content: "YOUR QUOTE";
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.1;
    font-size: 50px;
    letter-spacing: 8px;
    text-align: center;
  }

  blockquote {
    font-size: 25px;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    margin-bottom: 30px;
    line-height: 36px;
  }

  p {
    align-self: flex-end;
    font-size: 22px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;

export default StyledWrapper;
