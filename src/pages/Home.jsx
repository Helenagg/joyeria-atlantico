import Brands from "../components/Brands"
import HomeGallery from "../components/HomeGallery"
import Presentation from "../components/Presentation"
import WatchesHome from "../components/WatchesHome"

const Home = () => {
  return (
    <div className="mt-2 mx-4">
        <HomeGallery />
        <Presentation />
        <Brands />
        <WatchesHome />
    </div>
  )
}

export default Home