import React from "react";

export default function Button({
  children,
  onClick,
  size = "md",
  type = "primary",
  className = "",
  pill = false,
  large = false,
  color = "theme",
  ...props
}) {
  let base = "font-semibold font-sans transition duration-300 flex items-center justify-center";
  let rounded = pill ? "rounded-full" : "rounded-lg";
  let sizeClass = large ? "text-lg px-8 py-3" : size === "lg" ? "lg:px-6 lg:py-3 px-4 py-2" : size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2";
  let colorClass = "";
  if (type === "primary") colorClass = `bg-${color} text-white shadow-md hover:bg-${color}/85`;
  if (type === "secondary") colorClass = `bg-accent text-${color} shadow-sm hover:bg-accent/85`;
  if (type === "tertiary") colorClass = `text-gray-600 hover:text-gray-800`;
  return (
    <button
      onClick={onClick}
      className={`${base} ${rounded} ${sizeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// import React from "react";

// interface btn {
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   size?: "sm" | "md" | "lg";
//   type: "primary" | "secondary" | "tertiary";
// }

// export default function Button({
//   children,
//   onClick,
//   size = "md",
//   type,
//   className = "",
//   ...props
// }: btn) {
//   const baseStyles =
//     "font-semibold rounded-lg transition duration-300 flex items-center justify-center";

//   const sizeStyles = {
//     sm: "px-3 py-1 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   }[size];

//   if (type === "primary") {
//     return (
//       <button
//         onClick={onClick}
//         {...props}
//         className={`bg-primary text-white shadow-md hover:bg-primary/85 ${baseStyles} ${sizeStyles} ${className}`}
//       >
//         {children}
//       </button>
//     );
//   }

//   if (type === "secondary") {
//     return (
//       <button
//         onClick={onClick}
//         className={`bg-accent text-primary shadow-sm hover:bg-accent/85 ${baseStyles} ${sizeStyles} ${className}`}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }

//   if (type === "tertiary") {
//     return (
//       <button
//         onClick={onClick}
//         className={`text-gray-600 hover:text-gray-800 ${baseStyles} ${sizeStyles} ${className}`}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }
// }
