
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
  
  export default function CorporateSofaAreas() {
    const firstSix = areas.slice(0, 6)
    const lastTwo  = areas.slice(6)
  
    const Card = ({ name, Icon }) => (
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8 w-full">
        <p className="font-poppins text-2xl font-bold text-gray-900 text-center mb-6">
          {name}
        </p>
        <Icon className="w-16 h-16 text-amber-400" />
      </div>
    )
  
    return (
      <div className="bg-white py-16 px-4">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-[37px] leading-tight sm:leading-snug md:leading-[60px] font-bold text-[#1c1d3e]">
            Our Commercial Sofa Cleaning<br/>
            Servicing Areas include
          </h2>
          <p>We, the best sofa cleaning company provide professional sofa cleaning services for all businesses and spaces, which includes</p>
        </div>
  
        {/* first 6 in a 3‑col grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {firstSix.map(area => (
            <Card key={area.name} name={area.name} Icon={area.icon} />
          ))}
        </div>
  
        {/* last 2 centered */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
          {lastTwo.map(area => (
            <div className="sm:w-1/3" key={area.name}>
              <Card name={area.name} Icon={area.icon} />
            </div>
          ))}
        </div>
      </div>
    )
  }