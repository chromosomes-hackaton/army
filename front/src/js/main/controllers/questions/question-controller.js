import axios from 'axios';
import { QuestionsRecord } from 'main/records/questions/question-record';

axios.defaults.baseURL = "http://localhost:3002/";


export async function fetchQuestions() {
    return axios.get(`/question`).then((res) => {
        const data = QuestionsRecord.parse(res.data);
        return data;
    });
}
