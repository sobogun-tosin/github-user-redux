import React from "react";
import styles from "./Info.module.scss";
import cx from "classnames";
import { GetUser } from "../../types";
import { USER_INFO } from "./data";

interface Item {
  id: number;
  icon: any;
  label: string;
  value: number;
  color: string;
}

const Info: React.FC<GetUser> = ({
  followers,
  following,
  public_gists,
  public_repos,
}) => {
  const items: Item[] = USER_INFO({
    followers,
    following,
    public_gists,
    public_repos,
  });

  return (
    <div className={styles.Info}>
      {items.map((item: Item) => {
        const { id, icon, value, color, label } = item;
        return (
          <div className={styles.Info_card} key={id}>
            <div
              className={cx(styles.Info_card_avatar, {
                [styles[`Info_card_${color}`]]: color,
              })}
            >
              {icon}
            </div>
            <div className={styles.Info_card_data}>
              <span>{value}</span>
              <p>{label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
