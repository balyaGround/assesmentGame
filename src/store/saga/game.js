import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../const/types";

function* getGames(actions) {
  const { page = 1 } = actions;
  try {
    const res = yield axios.get(`https://api.rawg.io/api/games?key=6504061810404593b7f3e9db063f4109&page=${page}`);
    // console.log(res);
    yield put({
      type: types.GET_GAME_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAME_FAIL,
      error: err,
    });
  }
}

export function* watchGetGames() {
  yield takeEvery(types.GET_GAME_BEGIN, getGames);
}
