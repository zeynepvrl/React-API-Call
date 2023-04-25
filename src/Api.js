//Api ye istek attığımız js 
import axios from 'axios';
const searchImages =async (term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization: 'Client-ID yJ_6P4eaAQSRpaoJxKNHML1TFTuqNuI_4daaqR7DHvE',
    },
    params: {
        query:term,
    },
});
//debugger;   //tarayıcıda açık bir şekilde responsu görmek için ekledim
return response.data.results;
};

export default searchImages;
/* Bu kod bloğu, axios kütüphanesi kullanılarak Unsplash API'sine görsel arama sorguları göndermek için bir fonksiyon tanımlar.

İlk olarak axios kütüphanesi import edilir ve searchImages isimli bir async fonksiyon tanımlanır. Bu fonksiyon bir arama terimi (term) alır ve Unsplash API'sine görsel arama sorguları gönderir.

Sorgu, axios.get fonksiyonu kullanılarak gönderilir. Sorgu gönderilirken, headers alanına Unsplash API anahtarının yer aldığı bir obje, params alanına ise görsel arama terimi gönderilir.

Son olarak, API'dan gelen veriler response.data.results ile alınır ve fonksiyon tarafından geri döndürülür. */
//Canım kendim ehehehe