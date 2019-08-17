import { Record } from 'immutable';

export class QuestionsRecord extends Record({
    questions: null,
    isPending: false,
}) {
    static parse(obj) {
        return new QuestionsRecord({
            questions: obj,
            isPending: (!obj) && true,
        });
    }
}
