import Brands from "../components/Brands"
import Cover from "../components/Cover"
import HomeGallery from "../components/HomeGallery"
import Presentation from "../components/Presentation"

const Home = () => {
  return (
    <div className="mt-20 mx-6">
        <HomeGallery />
        <Presentation />
        <Brands />
    </div>
  )
}

export default Home