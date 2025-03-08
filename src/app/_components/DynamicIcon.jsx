import * as LucideIcons from "lucide-react";

export default function DynamicIcon({
  iconName,
  size = 24,
  color,
  className = "",
}) {
  const IconComponent = LucideIcons[iconName];

  return IconComponent ? (
    <IconComponent
      size={size}
      width={size}
      height={size}
      className={className}
      style={{ color }} // Apply color via inline styles
    />
  ) : null;
}
