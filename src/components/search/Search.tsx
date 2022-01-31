import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dailyRequest, searchUser } from "../../redux/githubAction";
import { RootStore } from "../../redux/store";
import styles from "./Search.module.scss";

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

  return (
    <section>
      <div className="error">{error ? error : ""}</div>
      <div className={styles.Search}>
        <div className={styles.Search_container}>
          <i className="fas fa-search" style={{ fontSize: "24px" }}></i>
          <form>
            <input
              type="text"
              name="search"
              id=""
              placeholder="...enter user name"
              value={search}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setSearch(e.currentTarget.value)
              }
            />
          </form>
          {request > 0 && !loading && (
            <button type="button" onClick={handleSubmit}>
              search
            </button>
          )}
        </div>
        <div className={styles.Search_request}>Request: {request} / 60</div>
      </div>
    </section>
  );
};

export default Search;
