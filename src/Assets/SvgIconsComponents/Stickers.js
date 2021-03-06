import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgStickers = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5.5a6 6 0 0 1 6 6c0 1.012-.073 2.097-.22 3.255-.434 2.148-1.213 3.751-2.78 5.317-1.468 1.468-3.083 2.378-5.314 3.102-1.227.366-3.686.326-3.686.326a6 6 0 0 1-6-6v-6a6 6 0 0 1 6-6h6Zm0 1.2h-6a4.8 4.8 0 0 0-4.8 4.8v6a4.8 4.8 0 0 0 4.8 4.8l1.86.002c.76-.043 1.14-.398 1.14-1.066v-1.644a5 5 0 0 1 4.972-5l.658-.008.412-.013a6.29 6.29 0 0 0 .816-.071c.592-.113.907-.567.944-1.364L17.3 6.5a4.8 4.8 0 0 0-4.8-4.8Zm4.082 8.979a2.69 2.69 0 0 0 .384-.103c-.476 1.367-1.245 2.579-2.314 3.647-1.095 1.095-2.43 1.966-4.017 2.612a2.68 2.68 0 0 0 .065-.599v-1.644a3.8 3.8 0 0 1 3.779-3.8l.488-.005c.765-.013 1.287-.046 1.615-.108Z"
      fill="#007AFF"
    />
  </Svg>
);

export default SvgStickers;
