function BannerText({message}){
    return(
        <div className="banner-container">
            <div className="banner-text">{`${message}`.repeat(60)}</div>
        </div>
    )
}

export default BannerText