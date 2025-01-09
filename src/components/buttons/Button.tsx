import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { twMerge } from 'tailwind-merge'
import { cva, VariantProps} from "class-variance-authority"
import clsx, {ClassValue} from "clsx"; 
interface iButton extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
  children: ReactNode
}

const Button: FC<iButton> = ({
  variant,
  size,
  children,
  className,
  ...props }) => {
  return (
      <button {...props} className={twMerge(clsx(buttonVariant({variant, size})))} >{ children}</button>
  )
}

export default Button

const buttonVariant = cva("border py-2 px-2 rounded-lg text-white", {
  variants: {
    variant: {
      primary: "text-black",
      warn: "bg-orange-500",
      success: "bg-green-500",
      error: "bg-red-500",
    },
    size: {
      sm: "text-[12px]",
      md: "text-[15px]",
      lg: "text-[20px]",
    }

  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  }
})