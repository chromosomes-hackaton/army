const cheerio = require('cheerio');
const axios = require('axios');
const articleService = require('./article/article.service');
const specialistService = require('./specialist/specialist.service');
const questionService = require('./question/question.service');
const diseaseService = require('./disease/disease.service');
const imbService = require('./imb/imb.service');
const { SPECIALISTS, QUESTIONS } = require('./constants');

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

// (async() => {
//     await specialistService.deleteMany();
//     await specialistService.insertMany(SPECIALISTS);
//     const specialists = await specialistService.find();
//     const questions = QUESTIONS.map(q => {
//         const specialist = specialists.find(spec => q.specialistName === spec.name);
//         return {
//             question: q.question,
//             specialistId: specialist._id.toString()
//         }
//     });
//     await questionService.deleteMany();
//     await questionService.insertMany(questions);
//     const responseRaspisanie = await axios.get('https://povestka.by/wiki/raspisanie/').then(res=>res.data);
//     let $ = cheerio.load(responseRaspisanie);
//     const parsedArticles = $('a').filter((i,el)=>{
//         return $(el).attr('href').includes('article');
//     }).map((i,el)=>({
//         name: $(el).text(),
//         link: $(el).attr('href'),
//         specialistId: getSpecialistId(i + 1, specialists).toString()
//     })).toArray();
//     await articleService.deleteMany();
//     await articleService.insertMany(parsedArticles);
//     const articles = await articleService.find();
//     const diseases = [];
//     const promises = articles.map(article => axios.get(article.link));
//     const responses = await Promise.all(promises);
//     responses.forEach((res,index) => {
//         const $ = cheerio.load(res.data);
//         const table = $('table:first-child');
//         const rows = table.find('tr').slice(3,table.find('tr').length);
//         const name = table.find('tr:nth-child(3) td:nth-child(2)').text();
//         for (let i = 0; i < rows.length; i++){
//             diseases.push({
//                 name: name + ' ' + rows.eq(i).find('td:nth-child(2)').text(),
//                 category: rows.eq(i).find('td:nth-child(3)').text(),
//                 articleId: articles[index]._id.toString()
//             });
//         }
//     });
//     await diseaseService.deleteMany();
//     await diseaseService.insertMany(diseases);
//     await imbService.deleteMany();
//     await imbService.insertMany([
//         {
//             name: 'Недостаточная масса тела',
//             to: 18.5
//         },
//         {
//             name: 'Норма',
//             from: 18.5,
//             to: 24.9
//         },
//         {
//             name: 'Избыточная масса тела',
//             from: 25,
//             to: 29.9
//         },
//         {
//             name: 'Ожирение 1',
//             from: 30,
//             to: 34.9
//         },
//         {
//             name: 'Ожирение 2',
//             from: 35,
//             to: 39.9
//         },
//         {
//             name: 'Ожирение 3',
//             from: 40
//         }
//     ])
// })();