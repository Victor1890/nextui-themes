import { forwardRef } from "react";

interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export const Typography = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  TypographyProps
>(({ as: Component = "h1", ...props }, ref) => {
  return <Component ref={ref} {...props} />;
});

Typography.displayName = "Typography";
