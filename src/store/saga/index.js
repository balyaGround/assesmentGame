import { all } from "@redux-saga/core/effects";
import { watchGetGames } from "./game";
import { watchgameDetail } from "./gamedetail";
import "bootstrap/dist/css/bootstrap.min.css";

export default function* rootSaga() {
  //function generator
  yield all([watchGetGames(), watchgameDetail()]);
}
