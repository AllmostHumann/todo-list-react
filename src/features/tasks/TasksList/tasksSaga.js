import { call, put, delay, takeLatest } from "redux-saga/effects";
import { exampleTasksError, exampleTasksSuccess, exampleTasks } from "../tasksSlice";
import { getExampleTasks } from "./getExapleTasks";

function* exampleTasksHandler() {
    try {
        yield delay(1000)
        const exampleTasks = yield call(getExampleTasks);
        yield put(exampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(exampleTasksError());
        yield call(alert, "Coś poszło nie tak!");
    }
};

export function* tasksSaga() {
    yield takeLatest(exampleTasks.type, exampleTasksHandler);
};