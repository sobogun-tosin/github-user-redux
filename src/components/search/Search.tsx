import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dailyRequest, searchUser } from "../../redux/githubAction";
import { RootStore } from "../../redux/store";
import "./Search.scss";

const Search = () => {
  const [search, setSearch] = useState("");
  const error = useSelector((state: RootStore) => state.github.error);
  const request = useSelector((state: RootStore) => state.github.request);
  const loading = useSelector((state: RootStore) => state.github.loading);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      dispatch(searchUser(search));
    }
  };

  useEffect(() => {
    dispatch(dailyRequest());
  });

  // useEffect(() => {
  //   dispatch(searchUser("sobogun-tosin"));
  // }, []);

  return (
    <section>
      <div className="error">{error ? error : ""}</div>
      <i className="fas fa-search" style={{ fontSize: "26px" }}></i>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Enter user name"
          value={search}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
        />
        {request > 0 && !loading && <button type="submit">search</button>}
      </form>
      <h1>Request: {request} / 60</h1>
    </section>
  );
};

export default Search;
