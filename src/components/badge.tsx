import type { ComponentProps } from "react";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva('inline-flex items-center justify-center rounded-full', {
  variants: {
    variant: {
      primary: 'bg-green-light',
      secondary: 'bg-pink-light'
    },
    size: {
      sm: 'py-0.5 px-2'
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  }
})

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: 'text-green-dark',
      secondary: 'text-pink-dark'
    },
  },
  defaultVariants: {
    variant: 'primary'
  }
})

interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof badgeVariants> {
}

export default function Badge({
  variant,
  size,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>{children}</Text>
    </div>
  )
}
