import styled from "styled-components";
import BacjgrountLight from "../../assets/images/img/BacjgrountLight.png";

export const CoverContent = styled.div`
  background-image: url(${BacjgrountLight});
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 1000px 1000px;
  background-position: calc(50% + 550px) calc(300px);
`;

export const SingleAuthorStyle = styled.div`
  padding: 20px 0px 100px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SingleAuthorImg = styled.div`
  width: 505px;
  /* margin-right: 64px; */
`;

export const SingleAuthorImgStyle = styled.img`
  width: 100%;
  border-radius: 20px;
  /* margin-right: 64px; */
`;

export const SingleAuthorInfo = styled.div`
  width: 670px;
`;

export const SingleAuthorTitile = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #d1b89d;
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : " #D1B89D")};
  margin: 0;
  margin-bottom: 8px;
`;

export const SingleAuthorText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.8);
  color: ${({ theme }) => (theme === "false" ? "#D1D1D1" : " #3D3D3D")};
  margin: 0;
  margin-bottom: 44px;
`;

export const SingleAuthorSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #d1b89d;
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : " #D1B89D")};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
`;

export const SingleAuthorMiniSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => (theme === "false" ? "#A3A3A3" : " #6E6E6E")};
`;

export const SingleWrapSpan = styled.span`
  display: flex;
`;

export const SingleWrapSpanLine = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : " #D1B89D")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

export const SingleWrapCarousel = styled.div`
  .slick-prev,
  .slick-next {
    display: block !important;
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block !important;

    width: 40px !important;
    height: 40px !important;
    padding: 0;
    border-radius: 100%;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: #e0eff6 !important;
    background-color: ${({ theme }) =>
      theme === "false" ? "#C9AC8C" : " #E0EFF6"} !important;
  }

  .slick-next {
    right: -75px !important;
    top: 150px !important;
  }

  .slick-prev {
    left: -75px !important;
    top: 150px !important;
  }

  .slick-list {
    height: 350px;
  }
`;

export const SingleWrapInfor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const SingleWrapInforTitle = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 31px;
  line-height: 46px;
  margin: 0;
  color: ${({ theme }) => (theme === "false" ? "#C9AC8C" : " #D1B89D")};
`;

export const SingleWrapInforSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => (theme === "false" ? "#FFFFFF" : " #0D0D0D")};
`;

export const SingleWrapInforBook = styled.div`
  /* display: flex;
gap: 20px ; */
  padding-bottom: 70px;
`;
