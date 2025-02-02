import {cn} from "@/lib/utils"

interface Props {
  className?: string
}

const goods = ["Пиццы", "Комбо", "Закуски", "Коктейли", "Кофе", "Напитки", "Десерты", "Десерты"]
const activeIndex = 0

export const Categories = (props: Props) => {
  const {className} = props
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {
        goods.map((product, index) => (
          <a
            key={index}
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button>{product}</button>
          </a>
        ))
      }
    </div>
  )
}
