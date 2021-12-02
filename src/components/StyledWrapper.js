import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;

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
  }
`;

export default StyledWrapper;
