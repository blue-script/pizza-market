import {cn} from "@/lib/utils"
import {SortPopup, Categories, Container} from "@/components/shared"

interface Props {
  className?: string
}

export const TopBar = (props: Props) => {
  const {className} = props
  return (
    <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
      <Container className="flex items-center justify-between ">
        <Categories/>
        <SortPopup/>
      </Container>
    </div>
  )
}
