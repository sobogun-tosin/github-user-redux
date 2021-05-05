import React from "react";
import "./Chart.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { GetRepos } from "../../redux/types";
import Area from "./Area";
import Column from "./Column";
import Doughnut from "./Doughnut";
import Pie3d from "./Pie3d";

const Repos = () => {
  const repos = useSelector((state: RootStore) => state.github.repos);

  const languages = repos.reduce((total: any, item: GetRepos) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, star: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        star: total[language].star + stargazers_count,
      };
    }
    return total;
  }, {});
  // PieChart
  const mostUsed = Object.values(languages)
    .sort((a: any, b: any) => b.value - a.value)
    .slice(0, 5);

  // Doughnut
  const mostPopular = Object.values(languages)
    .sort((a: any, b: any) => b.star - a.star)
    .map((item: any) => {
      return { ...item, value: item.star };
    })
    .slice(0, 5);

  // Star, Fork
  let { star, fork } = repos.reduce(
    (total: any, item: GetRepos) => {
      const { stargazers_count, forks, name } = item;
      total.star[stargazers_count] = { label: name, value: stargazers_count };
      total.fork[forks] = { label: name, value: forks };
      return total;
    },
    {
      star: {},
      fork: {},
    }
  );

  star = Object.values(star).slice(-5).reverse();
  fork = Object.values(fork).slice(-5).reverse();

  return (
    <div className="container">
      <div className="chart">
        <Pie3d data={mostUsed} />
        <Area data={star} />
        <Doughnut data={mostPopular} />
        <Column data={fork} />
      </div>
    </div>
  );
};

export default Repos;
