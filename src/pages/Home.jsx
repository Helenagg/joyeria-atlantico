import Brands from "../components/Brands"
import HomeGallery from "../components/HomeGallery"
import Presentation from "../components/Presentation"
import WatchesHome from "../components/WatchesHome"

const Home = () => {
  return (
    <div className="mt-20 mx-6">
        <HomeGallery />
        <Presentation />
        <Brands />
        <WatchesHome />
    </div>
  )
}

export default Home