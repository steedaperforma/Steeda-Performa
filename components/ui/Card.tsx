import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "outline";
  hoverEffect?: "none" | "glow" | "lift";
}

export function Card({
  className,
  variant = "default",
  hoverEffect = "none",
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white dark:bg-zinc-900 border border-border shadow-sm",
    glass: "bg-white/80 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
    outline: "bg-transparent border border-border",
  };

  const effects = {
    none: "",
    glow: "transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50",
    lift: "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
  };

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden",
        variants[variant],
        effects[hoverEffect],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-3", className)} {...props}>{children}</div>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-display font-bold text-ink", className)} {...props}>{children}</h3>;
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0 flex items-center", className)} {...props}>{children}</div>;
}
