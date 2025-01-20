import { cn } from "@/app/_lib/utils/uiUtils";

export const OutlineButton = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-lg border border-primary bg-transparent hover:bg-primary hover:text-black transition-all text-primary px-4 min-h-[35px] font-sMedium text-sm leading-none outline-none flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
