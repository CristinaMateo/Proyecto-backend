// SCRAPER PARA SENSACINE:
const puppeteer = require("puppeteer");

// Función para extraer la información de cada comentario
const extractOpinionData = async (url, browser) => {
  try {
    const opinionData = {};

    const page = await browser.newPage();
    await page.goto(url);

    // Modifica los selectores CSS según la estructura de la página web
    opinionData["opinion"] = await page.$eval(
      ".review-card-content",
      (review) => review.innerText
    );

    //console.log(opinionData, "*************************");
    return opinionData;
  } catch (err) {
    return { error: err.message };
  }
};

// Función principal para realizar el scraping
const scrap = async (searchQuery) => {
  try {
    const scrapedData = [];

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`https://www.sensacine.com/buscar/?q=${searchQuery}`);

    await page.click(".meta-title-link");
    const opinionLinks = await page.$$eval(".rating-title", (links) =>
      links.map((link) => link.href)
    );
    //console.log(opinionLinks);
    //console.log(`${opinionLinks.length} links encontrados`);


    for (const opinionLink of opinionLinks) {
      const opinion = await extractOpinionData(opinionLink, browser);
      scrapedData.push(opinion);
    }


    //console.log(scrapedData, "Datos obtenidos:", scrapedData.length);

    await browser.close();

    return scrapedData;
  } catch (err) {
    console.log("Error:", err.message);
  }
};

// Ejecuta la función de scraping con la consulta de búsqueda
scrap("titanic").then((data) => console.log(data));
