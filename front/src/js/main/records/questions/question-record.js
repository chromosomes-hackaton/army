import { Record } from 'immutable';

export default class QuestionsRecord extends Record({
    questions: null,
    isPending: false,
}) {
    static parse(obj) {
        console.log(obj);
        
        return new QuestionsRecord({
            questions: obj,
            isPending: (!obj) && true,
        });
    }
}
