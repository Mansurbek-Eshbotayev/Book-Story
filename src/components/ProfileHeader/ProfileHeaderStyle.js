import styled from "styled-components";

export const ProfileHeaderStyle = styled.header``;

export const ProfilenavStyle = styled.nav`
  display: flex;

  .nav__link {
    width: 100%;
    padding: 22px;
    text-decoration: none;
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* color: #90959F; */
    color: ${({ theme }) => (theme === "false" ? "#A3A3A3" : " #90959F")};
    border-radius: 4px 4px 0px 0px;
    /* background-color:  #F3F6F9; */
    background-color: ${({ theme }) =>
      theme === "false" ? "#2D2D2D" : " #F3F6F9"};
    display: flex;
    align-items: center;

    svg {
      width: 35px;
      height: 35px;
      fill: #86c2ff;
      fill: ${({ theme }) => (theme === "false" ? "#A3A3A3" : " #86C2FF")};
      padding: 6px 12px;
      background-color: transparent;
      border-radius: 4px;
      margin-right: 8px;
      border: 1px solid;
      border-color: ${({ theme }) =>
        theme === "false" ? "#A3A3A3" : " transparent"};
    }
  }

  .active {
    width: 100%;
    padding: 22px;
    text-decoration: none;
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* color:#152540; */
    color: ${({ theme }) => (theme === "dark" ? " #000000" : " #152540")};
    border-radius: 4px 4px 0px 0px;
    /* background-color:  #DDE6F5; */
    background-color: ${({ theme }) =>
      theme === "dark" ? " #fff" : " #DDE6F5"};
    display: flex;
    align-items: center;

    svg {
      width: 35px;
      height: 35px;
      fill: #fff;
      padding: 6px 12px;
      background-color: #152540;
      border-radius: 4px;
      margin-right: 8px;
      border: 1px solid #e5eaee;
    }
  }
`;
