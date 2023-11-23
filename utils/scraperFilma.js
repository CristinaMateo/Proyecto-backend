// // // // SCRAPER PARA FILMAFFINITY:

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

//     // const opinionLinks = await page.$$eval(".rating-title", (links) =>
//     //   links.map((link) => link.href).filter(link => link.includes('espectadores'))
//     // );
//     // console.log(opinionLinks);
//     // console.log(`${opinionLinks.length} links encontrados`);

//     // for (const opinionLink of opinionLinks) {
//     //   const opinion = await extractOpinionData(opinionLink, browser);
//     //   scrapedData.push(opinion);
//     // }

//     // console.log(scrapedData, "Datos obtenidos:", scrapedData.length);

//     // await browser.close();

//     // return scrapedData;
//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// };

// // Ejecuta la función de scraping con la consulta de búsqueda
// scrap("titanic").then((data) => console.log("*******", data));




