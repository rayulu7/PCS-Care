import {
  Coffee,
  Home,
  Hotel,
  Briefcase,
  Hospital,
  BookOpen,
  ShoppingCart,
  Film
} from 'lucide-react'

const areas = [
  { name: 'Restaurants', icon: Coffee },
  { name: 'Resorts', icon: Home },
  { name: 'Hotels', icon: Hotel },
  { name: 'IT and Corporate Offices', icon: Briefcase },
  { name: 'Hospitals', icon: Hospital },
  { name: 'Educational Organizations', icon: BookOpen },
  { name: 'Shopping Malls', icon: ShoppingCart },
  { name: 'Cinemas & Theaters', icon: Film },
]

export default function AboutAreasSection() {
  const firstSix = areas.slice(0, 6)
  const lastTwo  = areas.slice(6)

  const Card = ({ name, Icon }) => (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 w-full h-full">
      <p className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        {name}
      </p>
      <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-400" />
    </div>
  )

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[37px] leading-tight sm:leading-snug md:leading-[60px] font-bold text-[#1c1d3e]">
          Our Corporate Cleaning Servicing <br className="hidden sm:block"/>
          Areas Include
        </h2>
      </div>

      {/* first 6 in a responsive grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        {firstSix.map(area => (
          <Card key={area.name} name={area.name} Icon={area.icon} />
        ))}
      </div>

      {/* last 2 centered with responsive layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:flex justify-center gap-4 sm:gap-6 md:gap-8">
        {lastTwo.map(area => (
          <div className="w-full sm:w-1/2 md:w-1/3" key={area.name}>
            <Card name={area.name} Icon={area.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}