import React from "react";

type Props = {
  className?: string;
};

export const ProductCard = ({ className }: Props) => {
  return <div className={className}>Product-Card</div>;
};
