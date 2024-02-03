import { Row } from "antd";
import { Link } from "react-router-dom";
import Styled from "styled-components";

export const AuthFormWrap = Styled.div`
  border-radius: 6px;
  margin-top: 10rem;
  box-shadow: 0 10px 30px rgba(140,144,164,.2);
  background-color: #FAFAFA;
  .ninjadash-authentication-top{
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #E3E6EF;
    
    .ninjadash-authentication-top__title{
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
      margin-bottom: 0;
        color: #C2185B
    }
  }
  .ninjadash-authentication-content{
    padding: 30px 40px;
    @media only screen and (max-width: 1599px){
      padding: 30px;
    }
    .ant-form-item-label {
      > label{
        font-size: 14px;
        color: black;
      }
    }
    .ant-form-item{
      margin-bottom: 25px;
    }
    .ant-input:focus,
    .ant-input-focused{
      box-shadow: 0 5px 20px rgba(251,53,134,.10);
    }
    .ant-input{
      &::placeholder{
        color:#A4A6AB;
      }
    }
    .ant-form-item-explain-error{
      font-size: 13px;
      margin-top: 2px;
    }
    }
    .btn-signin{
      font-size: 14px;
      font-weight: 500;
      border-radius: 6px;
      width: 100%;
      min-height: 48px;
      margin-top: 25px;
      color: white;
      background-color: #C2185B;
      &:hover {
      color: white !important;
      background-color: #E91E63 !important;   
      }
    }
    .btn-reset{
      margin-top: 0;
    }
    .ant-input-affix-wrapper {
      &.ant-input-password{
        input{
          color: black;
        }
      }
    }
    }
  }
`;
export const StyledLink = Styled(Link)`
text-align:center;
 margin-left : 0.5rem;
 color : #F48FB1;
      &:hover {
      color: #E91E63 !important;
      }
 `;

export const SupStyle = Styled.div`
    display:flex;
    text-align:center;
    padding: 1.563rem;
    padding-left: 10rem;
    border-radius: 0 0 6px 6px;
    background-color: #EFF0F3;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 0;
 `;

 export const StyleRow = Styled(Row)`
     background-color : #F48FB1;
     width:100%;
     height:100vh;
 `;

export const CenteredSpinner = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
