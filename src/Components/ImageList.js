import ImageItem from './ImageItem';
function ImageList({imagesPlaceHolder}) {
    return (
    <div className='imageList'>                                  
        {imagesPlaceHolder.map((perimage,index)=>{
           return <ImageItem key={index} img={perimage}/>    //her resim birbirinden farklı değerde olduğu için indexli map olmalı
        })}                                                 
    </div>
    );
    
}

export default ImageList;
// key olarak image.id de gönderebilirsin
//div i alt satıra indirince return ü algılamıyor
// image leri en kapsayan div burda css i buna uyguluyoruz 