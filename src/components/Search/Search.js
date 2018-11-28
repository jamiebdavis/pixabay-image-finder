import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/MenuItem";
import Select from "material-ui/SelectField";
import axios from "axios";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "10347695-67455af2756daf915ff5cff4e",
    images: []
  };
  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
  };
  amountChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for image"
          fullWidth={true}
        />
        <br />
        <Select
          name="amount"
          floatingLabelText="amount"
          value={this.state.amount}
          onChange={this.amountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </Select>
        <br />
      </div>
    );
  }
}

export default Search;
