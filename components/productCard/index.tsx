"use client"

import Image from 'next/image'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import { Toggle } from "@/components/ui/toggle"
import { useRouter } from 'next/navigation'


export default function ProductCard() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4 grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Package Delima</CardTitle>
            <CardDescription>Taman Melawati, Selangor</CardDescription>
            <CardAction><Checkbox /></CardAction>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
              </CarouselContent>
            </Carousel>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            <Toggle><Heart /></Toggle>
            <Button variant="default" onClick={() => router.push('/products/garden/rumah-abang-jamil')}>View</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Package Delima</CardTitle>
            <CardDescription>Taman Melawati, Selangor</CardDescription>
            <CardAction><Checkbox /></CardAction>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
              </CarouselContent>
            </Carousel>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            <Toggle><Heart /></Toggle>
            <Button variant="default">View</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Package Delima</CardTitle>
            <CardDescription>Taman Melawati, Selangor</CardDescription>
            <CardAction><Checkbox /></CardAction>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
              </CarouselContent>
            </Carousel>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            <Toggle><Heart /></Toggle>
            <Button variant="default">View</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Package Delima</CardTitle>
            <CardDescription>Taman Melawati, Selangor</CardDescription>
            <CardAction><Checkbox /></CardAction>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
                <CarouselItem><Image src="next.svg" width={500} height={500} alt="Picture of the author" /></CarouselItem>
              </CarouselContent>
            </Carousel>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            <Toggle><Heart /></Toggle>
            <Button variant="default">View</Button>
          </CardFooter>
        </Card>
      </div>
    </div>

  )
}
