import React from "react";
import styled from "styled-components";

interface CommunityIconProps {
  $isActive: boolean;
}

const StyledSvg = styled.svg<CommunityIconProps>`
  width: 1.5625rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 25/24;

  path {
    stroke: ${(props) => (props.$isActive ? "#349989" : "#A4A4A4")};
  }
`;

export const CommunityIcon: React.FC<CommunityIconProps> = ({ $isActive }) => {
  return (
    <StyledSvg
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $isActive={$isActive}
    >
      <path
        d="M15.6633 1H5.84986C3.68758 1 1.85795 2.4672 1.52529 4.42348C1.35896 6.0537 2.02428 7.35789 3.18859 8.173V12.7376C3.18859 13.3897 4.02023 13.8788 4.68555 13.3897L9.01012 9.15114H15.497C17.3266 9.15114 19.1562 8.00998 19.6552 6.21673C20.4868 3.44534 18.3246 1 15.6633 1ZM12.3367 12.4116H22.1501C24.3124 12.4116 26.142 13.8788 26.4747 15.8351C26.641 17.4653 25.9757 18.7695 24.8114 19.5846V24.1492C24.8114 24.8013 23.9798 25.2904 23.3144 24.8013L18.9899 20.5627H12.503C10.6734 20.5627 8.84379 19.4216 8.3448 17.6283C7.51315 14.8569 9.67543 12.4116 12.3367 12.4116Z"
        strokeWidth="1.5"
      />
    </StyledSvg>
  );
};
