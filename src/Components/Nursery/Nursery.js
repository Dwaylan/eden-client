import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Nursery.css";

// class Nursery extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       plants: [],
//       search: "",
//       searchValue: props.value,
//       click: false,
//     };
//     this.onClick = this.onClick.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     const plantApi = "https://eden-rest-api.vercel.app/plants";

//     fetch(plantApi)
//       .then((res) => res.json())
//       .then((data) => this.setState({ plants: data }));
//   }

//   // handleChange(e) {
//   //   this.setState({ search: e.target.value });
//   //   console.log("now queuing");
//   // }
//   // handleSearchChange(e) {
//   //   e.preventDefault();
//   //   this.setState({ searchValue: e.target.value });
//   //   console.log(this.state.searchValue);
//   // }

//   onClick() {
//     this.setState((prevState) => ({ click: !prevState.click }));
//   }

//   render() {
//     // console.log("Card was clicked:", this.state.click);
//     return (
//       <div className="Nursery_parent_container">
//         <div className="search_bar">
//           <HomeButton className="Home" />
//         </div>
//         <div className="plants_container" onClick={this.onClick}>
//           {this.state.plants &&
//             this.state.plants.map((plant) => {
//               if (this.state.click === true) {
//                 return (
//                   <div className="plants">
//                     <h2>{plant.Common_name}</h2>
//                     <h4>{plant.Scientific_name}</h4>

//                     <h4> Toxicity: {plant.Toxicity}</h4>
//                     <h4>Life Cycle: {plant.Life_cycle}</h4>
//                     <p>{plant.Blog}</p>
//                   </div>
//                 );
//               } else {
//                 return (
//                   <div className="plants">
//                     <h2>{plant.Common_name}</h2>
//                     <h4>{plant.Scientific_name}</h4>
//                     <h4>State: {plant.State}</h4>
//                     <img
//                       className="plant_images"
//                       src={plant.image}
//                       alt={plant.Common_name}
//                       crossOrigin="anonymous"
//                     ></img>
//                   </div>
//                 );
//               }
//             })}
//         </div>
//       </div>
//     );
//   }
// }

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     console.log("Home button was clicked");
//     history.push("/");
//     window.alert("You are now leaving eden");
//   }
//   return (
//     <button type="button" className="Home" onClick={handleClick}>
//       {" "}
//       Home{" "}
//     </button>
//   );
// }

class Nursery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }

  fetchSearchResults = (updatedPageNo, query) => {
    console.log(this.state.query);
    const searchUrl = `https://eden-rest-api.vercel.app/plants${this.state.query}`;
    console.log(searchUrl);
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        // console.log(res.data);

        this.setState({
          results: res.data,
          loading: false,
        });
      })

      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch data",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map((plants) => {
            return (
              <div className="plants-container">
                <h4 className="">{plants.Common_name}</h4>
              </div>
            );
          })}
        </div>
      );
    }
  };
  render() {
    const { query } = this.state;
    console.log(this.state);
    return (
      <div className="search-container">
        <h2 className="heading"> Eden Directory</h2>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="State, type, or name"
            onChange={this.handleOnInputChange}
          />
        </label>
      </div>
    );
  }
}

export default Nursery;
