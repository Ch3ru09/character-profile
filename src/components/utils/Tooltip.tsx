export default function Tooltip({ children }: TooltipProps) {
  return <span className="tooltiptext">{children}</span>;
}

interface TooltipProps {
  children?: string;
}
