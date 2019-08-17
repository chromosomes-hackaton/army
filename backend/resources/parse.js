const cheerio = require('cheerio');
const axios = require('axios');
const articleService = require('./article/article.service');
const specialistService = require('./specialist/specialist.service');
const diseaseService = require('./disease/disease.service');

const SPECIALISTS = [
{name: 'терапевт' },
{name: 'офтальмолог' },
{name: 'дерматовенеролог' },
{name: 'стомотолог' },
{name: 'психолог' },
{name: 'хирург' },
{name: 'оториноларинголог' },
{name: 'невролог' }
];

const getSpecialistId = (articleIndex, specialists) => {
    if (articleIndex >= 0 && articleIndex <= 20 || articleIndex >= 42 && articleIndex <= 61 || articleIndex >=71 && articleIndex <=80 || articleIndex >=87 && articleIndex <=89){
        return specialists.find(el => el.name === 'терапевт')._id;
    }
    if (articleIndex >= 21 && articleIndex <= 28){
        return specialists.find(el => el.name === 'невролог')._id;
    }
    if (articleIndex >= 29 && articleIndex <= 36){
        return specialists.find(el => el.name === 'офтальмолог')._id;
    }
    if (articleIndex >= 37 && articleIndex <= 41){
        return specialists.find(el => el.name === 'оториноларинголог')._id;
    }
    if (articleIndex >= 62 && articleIndex <= 63){
        return specialists.find(el => el.name === 'дерматовенеролог')._id;
    }
    if (articleIndex >= 64 && articleIndex <= 70 || articleIndex >= 81 && articleIndex <= 86){
        return specialists.find(el => el.name === 'хирург')._id;
    }
    return 0;
}

(async() => {
    await specialistService.deleteMany();
    await specialistService.insertMany(SPECIALISTS);
    const specialists = await specialistService.find();
    const responseRaspisanie = await axios.get('https://povestka.by/wiki/raspisanie/').then(res=>res.data);
    const $ = cheerio.load(responseRaspisanie);
    const parsedArticles = $('a').filter((i,el)=>{
        return $(el).attr('href').includes('article');
    }).map((i,el)=>({
        name: $(el).text(),
        link: $(el).attr('href'),
        specialistId: getSpecialistId(i + 1, specialists)
    })).toArray();
    await articleService.deleteMany();
    await articleService.insertMany(parsedArticles);
    const articles = await articleService.find();
    const diseases = [];
    const promises = articles.map(article => axios.get(article.link));
    const responses = await Promise.all(promises);
    responses.forEach((res,index) => {
        const $ = cheerio.load(res.data);
        const table = $('table');
        const rows = table.find('tr').slice(3,table.find('tr').length);
        const name = table.find('tr:nth-child(3) td:nth-child(2)').text();
        for (let i = 0; i < rows.length; i++){
            diseases.push({
                name: name + ' ' + rows.eq(i).find('td:nth-child(2)').text(),
                category: rows.eq(i).find('td:nth-child(3)').text(),
                articleId: articles[index]._id
            });
        }
    });
    await diseaseService.deleteMany();
    await diseaseService.insertMany(diseases);
    await browser.close();
})();