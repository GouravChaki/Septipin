import styled from 'styled-components';
import { Paper, Button } from '@mui/material';

export const ChartCard = styled(Paper)`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 12px;
  background-color: #f7f7f7; /* Light background color */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out; /* Added ease transition */

  &:hover {
    transform: scale(1.05); /* Scale up when hovered */
  }

  .overlay {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
  }

  &:hover .overlay {
    opacity: 0.9;
    visibility: visible;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 182, 193, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const ChartButton = styled(Button)`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: #5e8beb; /* Primary button color */
  color: #fff; /* Text color */
  &:hover {
    background-color: #4754a6; /* Darker color on hover */
  }
`;

export default ChartCard;
