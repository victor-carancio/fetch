
const content = document.getElementById('content-container');

const CONTENTFUL_SPACE = "kc6p2popy8cy";
const CONTENTFUL_TOKEN = "YxWKsVYREcZkZLmyL6GnQmb03LuDIdpJNqNr9xUwBtE";

var client = contentful.createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_TOKEN,
});

const getContentfulData = async () =>{
    const data = await client.getEntries().then((r) => {
        return r.items;
    }).catch((err) => console.log("error", err));

   /*  var response = await data.json(); */
    
    const dataFormatted = data.map(({fields:{imagen}})=>{
        
        return {
            imgTitle: imagen.fields.title,
            imgUrl: imagen.fields.file.url
        }
    });
    
    return dataFormatted;
};

console.log(getContentfulData());



/* 
client.getEntries().then(function (entries){
    console.log(entries.items);{
    entries.items.forEach(function (entry){
        console.log(entry.fields.descripcion); //descripcion de entrada
        console.log(entry.fields.imagen.fields.title); // titulo imagen
        console.log(entry.fields.imagen.fields.file.url); // titulo imagen

        const elem = document.createElement("article");

        elem.innerHTML = `<p>${entry.fields.descripcion}</p>
                        <p>${entry.fields.imagen.fields.title}</p>
                      <img class='content-img' src='${entry.fields.imagen.fields.file.url}'>`;
        content.appendChild(elem);

    })
   }

   
   
}).catch((err) => console.log("error", err)); */
