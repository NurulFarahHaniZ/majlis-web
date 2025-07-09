import ProductCard from '@/components/productCard';
import ComparisonTable from '@/components/ComparisonTable';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ChevronDown, Funnel, SquareCheck } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export default function Page() {

  return (
    <>
      <div className="flex justify-end gap-4 p-4 pt-0">
        <Menubar>
          <MenubarMenu>
            
              <Sheet>
                <SheetTrigger><Funnel size={18} className='mx-2'/></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                    <SheetDescription>
                      <Slider defaultValue={[33]} max={100} step={10} />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
           
          </MenubarMenu>
          <Separator orientation='vertical' />
          <MenubarMenu>
            <MenubarTrigger>Action<ChevronDown size={14} className="ml-2" /></MenubarTrigger>
            <MenubarContent className="mx-4">
              <MenubarItem>Compare Selected</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Like Selected</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <ProductCard />
    </>
  )
}
