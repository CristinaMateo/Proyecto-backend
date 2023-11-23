// // SCRAPER PARA FILMAFFINITY:

// const puppeteer = require("puppeteer");

// // Función para extraer la información de cada comentario
// const extractOpinionData = async (url, browser) => {
//   try {
//     const opinionData = {};

//     const page = await browser.newPage();
//     await page.goto(url);

//     // Modifica los selectores CSS según la estructura de la página web
//     opinionData["opinion"] = await page.$eval(
//       ".content-text",
//       (review) => review.innerHTML
//     );

//     console.log(opinionData, "*************************");
//     return opinionData;
//   } catch (err) {
//     return { error: err.message };
//   }
// };
// extractOpinionData();

// // Función principal para realizar el scraping
// const scrap = async (searchQuery) => {
//   try {
//     const scrapedData = [];

//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto(`https://www.filmaffinity.com/es/search.php?stext=titanic`);
//     const botonCok = await page.waitForSelector(".css-v43ltw");
//     botonCok.click();

//     const linkprueba = await page.waitForSelector('div[class="mc-title"] a');
//     console.log(linkprueba);
//     linkprueba.click();

//     const opinionLink = await page.$$eval(
//       ".pro-reviews",
//       (titles) => {
//         console.log("+++++", titles);
//        return  titles[1].href;
//       }
//     );
//     page.goto(opinionLink);

//     await page.waitForSelector("#pro-reviews > li:nth-child(1) > div > div:nth-child(1)");
//     const coment = await page.$$eval("#pro-reviews > li:nth-child(1) > div > div:nth-child(1)", function(opinions) {
//         return opinions.map(opinion => opinion.innerHTML) 
//     })
//     return coment.slice(0,4)

//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// };

// // // Ejecuta la función de scraping con la consulta de búsqueda
// scrap("titanic").then((data) => console.log("*******", data));




