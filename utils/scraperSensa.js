
// SCRAPER PARA SENSACINE:

const puppeteer = require("puppeteer");
// Importar el modelo de BBDD
// Creamos una función para extraer la información de cada producto
const extractOpinionData = async (url, browser) => {
  try {
    // Creamos un objeto vacío donde almacenaremos la información de cada producto
    const opinionData = {};
    // Abrimos una nueva pestaña
    const page = await browser.newPage();
    // Accedemos al link de cada producto que nos llega por parámetros
    await page.goto(url);

    // Utilizamos el método newPage.$eval(selector, function) y almacenamos en productData:

    /********** A RELLENAR todos los page.$eval(selector, function)  *********/
    //opinion
    opinionData["opinion"] = await page.$eval(
      ".review-card-content",
      (reviw) => reviw.innerText
    );
console.log(opinionData, '*************************');
    return opinionData; // Devuelve los datos de un producto

    // Llamada a la BBDD para guardar registro nuevo
    // Lanzar query "INSERT INTO de SQL" o "save() de mongoose"
    // model.createProduct(productData)
  } catch (err) {
    // Devolvemos el error
    return { error: err };
  }
};

extractOpinionData();
const scrap = async (url) => {
  try {
    // Creamos un array vacío scrapedData donde almacenaremos la información obtenida del scraping
    const scrapedData = [];
    // inicializamos una instancia del navegador (browser) con puppeteer.launch() y añadimos en el objeto de configuración la opción headless
    console.log("Opening the browser......");
    const browser = await puppeteer.launch({ headless: false });

    // Abrimos una nueva pestaña en el navegador creando una instancia con el método newPage() a la que llamaremos page
    const page = await browser.newPage();
    // Indicamos la url que debe cargarse en la pestaña con page.goto(url)
    await page.goto(`https://www.sensacine.com/buscar/?q=titanic`); //
    console.log(`Navigating to ${url}...`);

    await page.click('.meta-title-link')
    // await page.$eval('.meta-title-link', res => res[0].click() );
   
    const urls = await page.$eval(".rating-title", (res) => res.href);

    // console.log("url capuradas", urls);
    // // Me quedo con los 3 primeros productos, porque sino es muy largo
    // const urls2 = urls.slice(0, 3);

    // Filtramos los productos
    // Extraemos el dato de cada producto
    // await extractProductData(urls2[productLink],browser)

    console.log(`${urls.length} links encontrados`);

    // Iteramos el array de urls con un bucle for/in y ejecutamos la promesa extractProductData por cada link en el array. Luego pusheamos el resultado a scraped data
    // for (opinionLink in urls2) {
      const opinion = await extractOpinionData(urls,browser);
      scrapedData.push(opinion);
    // }

    console.log(
      scrapedData,
      "Lo que devuelve mi función scraper",
      scrapedData.length
    );

    // cerramos el browser con el método browser.close
    await browser.close();
    // Devolvemos el array con los productos
    return scrapedData;
  } catch (err) {
    console.log("Error:", err);
  }
};

exports.scrap = scrap;

/********** DESCOMENTAR PARA PROBAR *********/
scrap("https://www.sensacine.com/peliculas/pelicula-5818/criticas-espectadores").then(data =>console.log(data))



