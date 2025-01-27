import AboutKanban from "@/components/AboutProject"
import Challenge from "@/components/Challenge"
import Soultion from "@/components/Sulotion"
import Technologies from "@/components/Technology"
export default function ProductList() {
   return (
      <div className="grid grid-cols-1 gap-4 h-full">

         <AboutKanban project={'product-list'} description={"Product list with cart is to build out this product list project that includes a functional cart and get it looking as close to the design as possible.."} imageproject={"/productlist.webp"} />
         <Challenge />
         <Soultion />
         <Technologies item={[{ name: 'JavaScript', image: '/js-logo.webp' }, { name: 'HTML5', image: '/html5-logo.webp' }, { name: 'CSS3', image: '/css-logo.png' },
         { name: 'ReactJS', image: '/react-logo.webp' }, { name: 'Git', image: '/git-logo.webp' }
            , { name: 'Github', image: '/github-logo.webp' }, { name: 'TailwindCSS', image: '/tailwindcss-logo.webp' }]} />
      </div>
   )
}