import React from "react";
import theme from "../../styles/theme";

const WatermarkLogo = () => (
  <div
    style={{
      position: "fixed",
      left: "0px",
      top: "15vh",
      zIndex: "-99",
    }}
  >
    <svg
      width="459"
      height="916"
      viewBox="0 0 459 916"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "auto", height: "85vh" }}
    >
      <g opacity="0.15">
        <path
          d="M0 915.771C0.493309 915.763 0.987045 915.754 1.4812 915.745L188.088 912.999L0 731.271V805.363L29.8993 833.376C46.9493 849.85 61.1575 863.578 61.1575 865.408C61.1575 867.198 33.9792 868.113 0 868.152V915.771Z"
          fill={theme.colors.secondaryCta}
        />
        <path
          d="M0 660.596L39.3709 695.178C62.1048 715.313 99.0473 740.023 120.834 750.091C168.196 770.226 265.762 772.971 311.23 754.667C395.535 720.804 459 628.367 459 538.676C459 448.984 435.319 417.867 206.086 197.3L0 0V72.4281L0.533997 71.9148L195.666 261.365C377.537 439.832 390.799 454.476 400.271 496.576C421.11 592.673 363.328 687.856 268.604 712.567C191.877 732.702 129.359 710.737 51.6852 634.773L0.533997 584.436L0 584.937V660.596Z"
          fill={theme.colors.secondaryCta}
        />
        <path
          d="M0 145.531V218.862L0.533966 218.35L149.251 362.954C277.129 488.339 297.969 512.134 297.969 536.845C297.969 569.793 264.815 610.063 236.398 612.808C191.877 616.469 176.721 607.317 90.5222 524.947L0 439.289V511.624L65.8938 576.2C141.673 650.332 169.143 666.806 217.453 666.806C301.758 666.806 365.223 593.589 350.067 513.049C344.384 484.678 315.019 451.73 171.985 311.702L0 145.531Z"
          fill={theme.colors.secondaryCta}
        />
        <path
          d="M0 291.966V365.184L103.784 465.458C160.618 520.371 212.717 566.132 218.4 566.132C224.084 566.132 234.503 559.726 242.081 551.489C252.501 539.591 236.398 520.371 126.517 414.206L0 291.966Z"
          fill={theme.colors.secondaryCta}
        />
      </g>
    </svg>
  </div>
);

export default WatermarkLogo;
