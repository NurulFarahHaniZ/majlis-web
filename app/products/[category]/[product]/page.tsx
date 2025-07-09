import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Product() {

  return (
    <div className="flex flex-col gap-4 p-4 mt-5">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 grid-cols-1">
        <div>
          <Carousel className="mx-15">
            <CarouselContent>
              <CarouselItem><Image src="../../next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div>content</div>
        </div>
      </div>
    </div>
  )
}