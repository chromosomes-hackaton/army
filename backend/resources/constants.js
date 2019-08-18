module.exports.collectionNames = {
  USER: 'user',
  ARTICLE: 'article',
  SPECIALIST: 'specialist',
  DISEASE: 'disease',
  QUESTION: 'question'
};

module.exports.SPECIALISTS = [
    {name: 'терапевт' },
    {name: 'офтальмолог' },
    {name: 'дерматовенеролог' },
    {name: 'стоматолог' },
    {name: 'психиатор' },
    {name: 'хирург' },
    {name: 'оториноларинголог' },
    {name: 'невролог' }
];
module.exports.QUESTIONS = [
    {
        question: "1.Беспокоят ли вас боли в области желудка, отрыжка, тошнота, рвота, ухудшение или отсутствие аппетита?",
        specialistName: 'терапевт'
    },
    {
        question: "2.Бывают ли у вас «хрипы» или «свисты» в грудной клетке с чувством затруднения дыхания?",
        specialistName: 'терапевт'

    },
    {
        question: "3.Часто ли вы замечаете на теле покраснения, высыпания, раздражения?",
        specialistName: 'дерматовенеролог'
    },
    {
        question: "4.Страдаете ли вы от мышечной боли(руки, ноги, спина и т.д.)?",
        specialistName: 'хирург'
    },
    {
        question: "5.Испытываете ли вы чувства тревоги?",
        specialistName: 'невролог'
    },
    {
        question: "6.Не замечали ли вы проблемы со слухом?",
        specialistName: 'оториноларинголог'
    },
    {
        question: "7.Замечали ли вы ухудшение зрения?",
        specialistName: 'офтальмолог'

    },
    {
        question: "8.Ваше нормальное давление не превосходит 140/90?",
        specialistName: 'терапевт'
    },
    {
        question: "9.Часто вы страдаете от головных болей и мигреней?",
        specialistName: 'психиатор'
    },
    {
        question: "10.У вас есть проблемы с зубами и деснами?",
        specialistName: 'стоматолог'
    }
];
