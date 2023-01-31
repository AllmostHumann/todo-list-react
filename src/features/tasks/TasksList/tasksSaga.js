import { call, put, delay, takeLatest, select, takeEvery } from "redux-saga/effects";
import { exampleTasksError, exampleTasksSuccess, exampleTasks, selectTasks } from "../tasksSlice";
import { getExampleTasks } from "./getExapleTasks";
import { saveTasksInLocalStorage } from "../taskLocalStorage";

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

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(exampleTasks.type, exampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};