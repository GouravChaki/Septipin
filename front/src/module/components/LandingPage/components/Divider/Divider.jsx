import { StyledDivider } from "./Divider.styles";
import DividerImage from "../Images/divider.svg";
const Divider = () => {
  return (
    <StyledDivider>
      <img src={DividerImage} width="100%" height="100%" />
    </StyledDivider>
  );
};

export default Divider;
