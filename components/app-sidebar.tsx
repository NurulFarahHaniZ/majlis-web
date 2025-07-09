"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  CookingPot,
  Landmark,
  Shirt,
  Brush,
  PersonStanding,
  GraduationCap,
  HeartHandshake,
  Hand,
  Gem,
  Film
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Space",
      url: "#",
      icon: Landmark,
      isActive: true,
      items: [
        {
          title: "Ballroom",
          url: "/products/ballroom",
        },
        {
          title: "Glasshouse",
          url: "/products/glasshouse",
        },
        {
          title: "Garden",
          url: "/products/garden",
        },
        {
          title: "Rooftop",
          url: "/products/rooftop",
        },
        {
          title: "Multipurpose Hall",
          url: "/products/mutipurpose-hall",
        },
      ],
    },
    {
      title: "Foods",
      url: "#",
      icon: CookingPot,
      items: [
        {
          title: "Catering",
          url: "/products/catering",
        },
        {
          title: "Dessert",
          url: "/products/dessert",
        },
        {
          title: "Appetizer",
          url: "/products/appetizer",
        },
      ],
    },
    {
      title: "Attire",
      url: "#",
      icon: Shirt,
      items: [
        {
          title: "Bridal Dress",
          url: "/products/bridal-dress",
        },
        {
          title: "Tuxedo",
          url: "/products/tuzedo",
        },
        {
          title: "Costum",
          url: "/dasboard/costum",
        },
        {
          title: "Ball Gown",
          url: "/products/ball-gown",
        },
        {
          title: "Traditional",
          url: "/products/traditional",
        },
      ],
    },
    {
      title: "Role",
      url: "#",
      icon: PersonStanding,
      items: [
        {
          title: "Photographer",
          url: "/products/photographer",
        },
        {
          title: "Videographer",
          url: "/products/videographer",
        },
        {
          title: "Social Media Coordinator",
          url: "/products/social-media-coordinator",
        },
        {
          title: "MC",
          url: "/products/mc",
        },
        {
          title: "DJ",
          url: "/products/dj",
        },
        {
          title: "Bride Assistance",
          url: "/products/bride-assistance",
        },
        {
          title: "Groom Assistance",
          url: "/products/groom-assitance",
        },
        {
          title: "Floor Manager",
          url: "/products/floor-manager",
        }
      ],
    },
    {
      title: "Styling",
      url: "#",
      icon: Brush,
      items: [
        {
          title: "Makeup Artist",
          url: "/products/makeup-artist",
        },
        {
          title: "Hijab Stylist",
          url: "/products/hijab-styling",
        },
        {
          title: "Groom Stylist",
          url: "/products/groom-styling",
        }
      ],
    },
    {
      title: "Necessity",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Hantaran",
          url: "/products/hantaran",
        },
        {
          title: "Door Gifts",
          url: "/products/door-gift",
        },
        {
          title: "Welcome board",
          url: "/products/welcome-board",
        },
        {
          title: "Flowers",
          url: "/products/flower",
        },
      ],
    },
    {
      title: "Guest Entertainment",
      url: "#",
      icon: Film,
      items: [
        {
          title: "Photobooth",
          url: "/products/photobooth",
        },
        {
          title: "Phonebooth",
          url: "/products/phonebooth",
        },
        {
          title: "Candy Bar",
          url: "/products/candy-bar",
        },
        {
          title: "Welcome book",
          url: "/products/welcome-board",
        },
      ],
    },
  ],
  packages: [
    {
      name: "Wedding Packages",
      url: "/products/packages/wedding",
      icon: Gem,
    },
    {
      name: "Event Packages",
      url: "/products/packages/event",
      icon: PieChart,
    },
    {
      name: "Graduation Packages",
      url: "/products/packages/graduation",
      icon: GraduationCap,
    },
    {
      name: "Farewell Packages",
      url: "/products/packages/farewell",
      icon: Hand,
    },
    {
      name: "Retirement Packages",
      url: "/products/packages/retirement",
      icon: HeartHandshake,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.packages} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
