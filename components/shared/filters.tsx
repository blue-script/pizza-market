import {cn} from "@/lib/utils"
import {Title} from "@/components/shared"

interface Props {
  className?: string
}

export const Filters = (props: Props) => {
  const {className} = props
  return (
    <div className={cn("", className)}>
      <Title text={"Фильтрация"} size={"sm"} className={"mb-5 font-bold"}/>

      <div className={'flex flex-col gap-4'}>
        <FilterCheckbox text={'Можно собирать'} value={1}/>
        <FilterCheckbox text={'Новинки'} value={2}/>
      </div>
    </div>
  )
}
