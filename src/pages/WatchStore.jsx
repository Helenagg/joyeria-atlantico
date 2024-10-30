import Cover from "../components/Cover"
import Watches from "../components/Watches";

const watches = [
    {
      id: 1,
      url: '/assets/img/jaguar/jaguar_banner.png',
    },
    {
      id: 2,
      url: '/assets/img/orient/orient_banner.png',
    },
    {
      id: 3,
      url: '/assets/img/seiko/seiko_banner.png',
    },
    {
      id: 4,
      url: '/assets/img/victorinox/victorinox_banner.png',
    },
  ];

const WatchStore = () => {
  return (
    <div className="mt-20 mx-6">
    <Cover coverImages={watches}/>
    <Watches />
</div>
  )
}

export default WatchStore