import styled from "styled-components";

export const CardBookStyle = styled.div`
  width: 190px;
  height: 350px;
  margin-bottom: 30px;
`;

export const CardBookImgStyle = styled.img`
  width: 100%;
  height: 283px;
  border-radius: 15px;
  margin-bottom: 12px;
`;

export const CardBookTitleStyle = styled.h4`
  margin: 0;
  margin-bottom: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : "#000000")};
`;

export const CardBookTextStyle = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #626262;
`;
