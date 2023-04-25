function ImageItem({img}) {
    console.log(img);
    return <div>
        <img className='imageListimg' src={img.urls.small} alt={img.alt_description}/>
    </div> ;
}

export default ImageItem;