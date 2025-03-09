import React from "react";

export default function Button({
  children,
  onClick,
  size,
  type,
  className,
  ...props
}) {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        {...props}
        className={`bg-theme text-white font-semibold font-sans lg:px-6 lg:py-3 px-4 py-2 max-sm:text-sm rounded-lg shadow-md hover:bg-theme/85 transition ${className}`}
      >
        {children}
      </button>
    );
  }

  if (type === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`bg-accent text-theme font-semibold font-sans lg:px-4 lg:py-2 py-2 px-4 max-sm:text-sm ${
          size === "lg" && "lg:px-6 lg:py-3 px-4 py-2"
        } rounded-lg shadow-sm hover:bg-accent/85 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (type === "tertiary") {
    return (
      <button
        onClick={onClick}
        className={`text-gray-600 hover:text-gray-800 px-4 py-2`}
        {...props}
      >
        {children}
      </button>
    );
  }
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
