// // // SCRAPER PARA FILMAFFINITY:

// async function openWebPage() {
//     try {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 100,
//         });
//         const page = await browser.newPage();
//         await page.goto("https://www.filmaffinity.com/es/main.html");
    
//         //Aceptamos el popup de las cookies:
//         await page.click('button[class=" css-v43ltw"]');
    
//         //Selector del input del buscador: "top-search-input-2"
//         //Seleccionamos el input del buscador y buscamos una película (por ejemplo Titanic)
//         await page.waitForSelector('input[id="top-search-input-2"]');
//         await page.type('input[id="top-search-input-2"]', 'Titanic');
//         //Presionamos enter
//         await page.keyboard.press('Enter');
//         //   await page.keyboard.press('Enter'); // Enter Key
    
//         //Hasta que no esté este selector, no se puede seguir:
//         console.log('Accediendo al enlace...')
//         await page.waitForSelector('a[href="https://www.filmaffinity.com/es/film814379.html"]');
        
//         console.log('Entrando en la película...')
//         await page.click('a[href="https://www.filmaffinity.com/es/film814379.html"]');
        
  
//         console.log('Mostrando las reviews de la película...')
   
//         const reviews = await page.$$eval('.pro-review', revs => {
//             return revs.slice(0,3).map(rev => rev.innerText)
//         })
//         console.log(reviews)
//         console.log('Reviews mostradas')
        
        
//         //Cerramos el browser para terminar:
//         await browser.close();
//     } catch (err) {
//         return{"Error":err}
//     }
// }

// openWebPage();





