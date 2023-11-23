// // SCRAPER PARA SENSACINE:
const puppeteer = require("puppeteer");

// Función para extraer la información de cada comentario
const extractOpinionData = async (url, browser) => {
    try {
        const opinionData = {};

        const page = await browser.newPage();
        await page.goto(url);

        // Modifica los selectores CSS según la estructura de la página web
        opinionData["opinion"] = await page.$eval(
            ".content-text",
            (review) => review.innerHTML
        );

        console.log(opinionData, "*************************");
        return opinionData;
    } catch (err) {
        return { error: err.message };
    }
};
extractOpinionData();
// Función principal para realizar el scraping
const scrap = async (searchQuery) => {
    try {
        const scrapedData = [];

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(`https://www.sensacine.com/buscar/?q=${searchQuery}`);
        const botonCok = await page.waitForSelector("#didomi-notice-agree-button");
        await botonCok.click();

        const linkprueba = await page.waitForSelector(".meta-title-link");
        console.log(linkprueba);
        await linkprueba.click();

        await page.waitForSelector(".rating-title");
        const usuarios = await page.waitForSelector(".rating-item:nth-child(2) a");
        await usuarios.click();

        await page.waitForSelector(".content-txt.review-card-content");
        const coment = await page.$$eval(".content-txt.review-card-content", function(opinions) {
            return opinions.map(opinion => opinion.innerHTML) 
        })
        return coment.slice(0,4)
    } catch (err) {
        console.log("Error:", err.message);
    }
};

// Ejecuta la función de scraping con la consulta de búsqueda
scrap("titanic").then((data) => console.log("*******", data));