import styled from "styled-components";

export const AppWrap = styled.div`
  background-color: ${({ theme }) => (theme === "false" ? "#191919" : "#ffff")};
`;
