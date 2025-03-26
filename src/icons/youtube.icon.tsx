const YoutubeIcon = ({
  color,
  colorCircle
}: {
  color: string,
  colorCircle: string
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={95} height={95} fill="none">
    <path
      fill={colorCircle}
      d="M95 47.5C95 73.724 73.724 95 47.5 95S0 73.724 0 47.5 21.276 0 47.5 0 95 21.276 95 47.5Z"
    />
    <path
      fill={color}
      d="M67.962 27.372H27.036a7.315 7.315 0 0 0-7.315 7.315v25.602a7.315 7.315 0 0 0 7.315 7.315h40.926a7.315 7.315 0 0 0 7.315-7.315V34.687a7.315 7.315 0 0 0-7.315-7.315Zm-13.89 21.897-11.378 5.69c-1.315.669-2.869-.288-2.869-1.77V41.81c0-1.458 1.554-2.414 2.869-1.769l11.379 5.69c1.458.717 1.458 2.797 0 3.538Z"
    />
  </svg>
)
export default YoutubeIcon
