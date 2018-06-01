import React, { Component } from "react";
import { fiction } from "../../genre";
import styles from "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...fiction
    };
  }

  handleSelectAll = event => {
    this.setState({ [event.target.name.ckeckedAll]: true });
    console.log(event.target.name);
  };

  render() {
    const genres = Object.keys(this.state);
    console.log(genres);

    console.log(fiction);

    return (
      <ul>
        {Object.keys(this.state).map(item => {
          console.log(this.state[item].checkedAll);
          return (
            <div>
              <h1>{item}</h1>
              <label htmlFor="checkAll">Check all</label>
              <input
                type="checkbox"
                name={item}
                onChange={this.handleSelectAll}
              />
              <ul className={styles.listItem}>
                {this.state[item].options.map(item => (
                  <li>
                    <label htmlFor={item}>{item}</label>
                    <input type="checkbox" name={item} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default List;

// function someFunc(key, value) {
//   return { key: value };
// }

// const someFunc = (key, value) => ({ key: value });

// const someFunc = (key, value) => {
//   return { key: value };
// };

// const Component = (key, value) => {
//     return (
//         [
//         <label key='1' >{key}</label>
//         <input  key='2' type="checkbox"/>
//     ]

//     )
// };
