const HomeGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg border" src="/assets/img/banner/victorinox.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/assets/img/banner/5.webp" alt="" />
        </div>
        {/* <div>
            <img className="h-auto max-w-full rounded-lg border p-2" src="/assets/img/jaguar/j1010_1.jpg" alt="" />
        </div> */}
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg border" src="/assets/img/banner/1.webp" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg border" src="/assets/img/banner/seiko.webp" alt="" />
        </div>
        {/* <div>
            <img className="h-auto max-w-full rounded-lg " src="/assets/img/seiko/2022Authorized-Global-Brand-Retailer.jpg" alt="" />
        </div> */}
    </div>
    {/* <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/assets/img/orient/orient-logo.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg border" src="/assets/img/orient/reloj-orient-star-re-at0015l00b-edicion-limitada.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg border " src="/assets/img/orient/146-FQC0N002W0_1132016.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg border" src="/assets/img/victorinox/victorinox.png" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg border p-4" src="/assets/img/victorinox/241921.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg ml-10" src="/assets/img/victorinox/logo.jpg" alt="" />
        </div>
    </div> */}
</div>
  )
}

export default HomeGallery