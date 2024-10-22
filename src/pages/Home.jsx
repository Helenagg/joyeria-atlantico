import Brands from "../components/Brands"
import HomeGallery from "../components/HomeGallery"
import Presentation from "../components/Presentation"
import Watches from "../components/Watches"

const Home = () => {
  return (
    <div className="mt-20 mx-6">
        <HomeGallery />
        <Presentation />
        <Brands />
        <Watches />
    </div>
  )
}

export default Home