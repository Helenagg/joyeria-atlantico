const HomeGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg border p-2" src="/assets/img/jaguar/j860_D.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg ml-20" src="/assets/img/jaguar/jaguar-logo.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg border p-2" src="/assets/img/jaguar/j1010_1.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg border" src="/assets/img/seiko/SRPE99K1.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg border p-2" src="/assets/img/seiko/SRPG05J1.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg ml-24" src="/assets/img/seiko/2022Authorized-Global-Brand-Retailer.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
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
    </div>
</div>
  )
}

export default HomeGallery