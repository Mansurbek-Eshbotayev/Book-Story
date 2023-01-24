import styled from "styled-components";

export const CardAuthorStyle = styled.div`
  width: 295px;
  height: 365px;
  background-color: ${({ theme }) =>
    theme === "false" ? "#1E1E1E" : "#F5F5F5"};
  border-radius: 22px;
  margin-bottom: 30px;
`;

export const CardAuthorImg = styled.img`
  width: 100%;
  height: 224px;
  border-radius: 22px 22px 0px 0px;
`;

export const CardAuthorInfo = styled.div`
  padding: 12px 16px;
  height: 141px;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    background-image: url(${({ theme }) => theme});
    background-repeat: no-repeat;
    background-size: contain;
    top: -43px;
    left: 202px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    background-image: url(${({ theme }) => theme});
    background-repeat: no-repeat;
    background-size: contain;
    top: 96px;
    left: -56px;
    border-radius: 21px;
  }
`;

export const CardAuthorTitle = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : "#000000")};
  margin: 0;
  margin-bottom: 6px;
`;

export const CardAuthorText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : "#626262")};
`;
