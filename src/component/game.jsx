import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGame } from "../store/action/game";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import loading from "../asset/loading.gif";
import BasicRating from "./bintang";

export default function Game() {
  const dispatch = useDispatch();
  const { games, isLoading } = useSelector((state) => state?.listGames?.allGameList);
  console.log(games);
  useEffect(() => {
    dispatch(getGame());
  }, [dispatch]);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-5 justify-content-evenly ms-0 me-0">
        {isLoading ? (
          <>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={loading} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">........</h5>
                  <h5 className="card-title">........</h5>
                </div>
              </div>
            </div>
          </>
        ) : (
          games?.results?.map((results) => (
            <div className="col">
              <div className="card">
                <Link style={{ textDecoration: "none" }} to={`/detail/${results.id}`}>
                  <img src={results.background_image} className="card-img-top" alt="..." />
                </Link>

                <div className="card-body">
                  <h5 className="card-title">{results.name}</h5>
                  <BasicRating rating={results.rating} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
