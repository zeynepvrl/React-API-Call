import {useState} from 'react';

function SearchHeader({search}) {
    const [valueInput, setvalueInput] = useState('');  //başlangıç değeri boş string
    const handleChange=(event)=>{             //event bir olay nesnesi onChange gibi
        setvalueInput(event.target.value)
    } 
    const handleFormSubmit =(event)=>{
        event.preventDefault();
        search(valueInput);                     //burdaki valueInput App.js de term parametresine karşılık geliyor   handleFormSubmit fonksiyonu, form gönderildiğinde 
                                                //çağrılacak olan olay dinleyicisidir. Bu fonksiyon, varsayılan form davranışını engeller (sayfanın yeniden yüklenmesini önler) 
    }                                           //ve search prop'u olarak geçilen fonksiyonu çağırır. Bu fonksiyon, valueInput değerini argüman olarak search fonksiyonuna ileterek arama işlemini gerçekleştirmeyi sağlar.
    return (
     <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>            
            <label>Ne Arıyorsunuz?</label>
            <input value={valueInput} onChange={handleChange} />
        </form>
    </div>
    );
}

export default SearchHeader;

//form un default hali submit olduğunda sayfanın yenilenmesidir bundan search e atadığımız can değeri 
//consoleda saniyelik görünüp gider. yenilenmeyi engellemek için preventdefault kullanılır
// burda event onSubmit in bilgierini tutuyar , form onSubmit olduğunda default olarak yeniden yüklenir ama prevent ile engellendi
//aynı şekilde App.js de term search i yani can bilgisini tutuyor.

// şimdi axios kullanarak API ye istek atılmalı


//event burada bir olay nesnesini temsil eder. Bu olay nesnesi, bir kullanıcının bir form elemanına (burada bir input elementi)
// girdiği veya tıkladığı gibi bir etkileşimde oluşur. Bu nesne, olayın ayrıntılarını içerir, örneğin hangi tuşa
// basıldığı, fare hareketleri vb. Böylece event.target ifadesi, olayın gerçekleştiği elemanı (yani burada input
// elementini) belirtir ve event.target.value ifadesi, kullanıcının bu input elemanına girdiği değeri içerir.
