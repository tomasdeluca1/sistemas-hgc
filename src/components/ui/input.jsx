import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={"input-primary input w-full"}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
