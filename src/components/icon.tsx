import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, FC } from "react"

export const iconVariants = cva('', {
  variants: {
    animate: {
      true: 'animate-spin',
      false: ''
    }
  },
  defaultVariants: {
    animate: false
  }
})

interface IconProps extends ComponentProps<'svg'>, VariantProps<typeof iconVariants> {
  svg: FC<ComponentProps<'svg'>>;
}

export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  )
}
