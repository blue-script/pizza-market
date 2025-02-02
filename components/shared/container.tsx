import {cn} from "@/lib/utils"
import React, {ReactNode} from "react"

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Container = ({className, children}: Props) => {
  return <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
}