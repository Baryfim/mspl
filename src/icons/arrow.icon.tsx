const ArrowIcon = ({ rotate }: Readonly<{ rotate?: boolean }>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={67}
      height={67}
      fill="none"
      style={{
        transform: rotate ? 'rotate(180deg)' : 'none',
      }}
    >
      <circle
        cx={33.5}
        cy={33.5}
        r={32}
        stroke="#000"
        strokeWidth={3}
        transform="rotate(-180 33.5 33.5)"
      />
      <path fill="#000" d="M49 34 25 47.856V20.144L49 34Z" />
    </svg>
  )
  export default ArrowIcon
  