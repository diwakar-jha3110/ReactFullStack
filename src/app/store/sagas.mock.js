import {
    take,
    put,
    select
} from 'redux-saga/effects'
import * as mutations from './mutations';
import uuid from 'react-uuid';
export function* taskCreationSaga(){
    while(true) {
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const taskID = uuid();
        const ownerID = `U1`;
        yield put(mutations.createTask(taskID,groupID,ownerID));
        console.log(`got group id ${groupID}`);
    }

}