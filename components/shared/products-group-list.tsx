"use client"

import React, {useRef} from "react"
import {useIntersectionObserver} from "@reactuses/core"
import {Title} from "./title"
import {cn} from "@/lib/utils"
import {ProductCard} from "@/components/shared/product-card"
import {useCategoryStore} from "@/store/category"

type Props = {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = ({title, items, className, listClassName, categoryId}: Props) => {
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
  const intersectionRef = useRef<HTMLDivElement | null>(null)

  useIntersectionObserver(
    intersectionRef,
    ([firstEntry]) => {
      if (firstEntry.isIntersecting) {
        setActiveCategoryId(categoryId)
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    }
  )

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size={"lg"} className={"font-extrabold mb-5"}/>

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))
        }
      </div>
    </div>
  )
}