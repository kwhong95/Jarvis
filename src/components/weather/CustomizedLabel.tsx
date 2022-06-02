interface Props {
  x?: number;
  y?: number;
  value?: number;
  unit: string;
  cx?: number;
  cy?: number;
}

const CustomizedLabel: React.FC<Props> = ({
  x,
  y,
  value,
  unit,
  cx = 0,
  cy = 0,
}) => (
  <text
    x={x! + cx}
    y={y! + cy}
    dy={-4}
    fontSize={12}
    textAnchor="middle"
    fill="white"
  >
    {value}
    {unit}
  </text>
);

export default CustomizedLabel;
