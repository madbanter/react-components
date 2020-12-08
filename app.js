
// // create component
// var Adam = () => <div>Some cliche salutation</div>;

// // render to page
// ReactDOM.render(<Adam />, document.getElementById("app"));

  ////////////
  ////////////
// var Coffee = () => (
//   <li>coffee</li>
// );
// var Cigarettes = () => (
//   <li>cigarettes</li>
// );

// var GroceryList = () => (
//   <ul>
//     <Coffee />
//     <Cigarettes />
//   </ul>
// );

////////////
////////////
// var GroceryListItem = (item) => (
//   <li>{item.listItem}</li>
// );

// var GroceryList = () => (
//   <ul>
//     <GroceryListItem listItem='coffee' />
//     <GroceryListItem listItem='cigarettes' />
//   </ul>
// );

////////////
////////////
// var GroceryListItem = (props) => (
//   <li>{props.listItem}</li>
// );

// var GroceryList = (props) => (
//   <ul>
//     {
//       props.listItems.map((i, index) => <GroceryListItem listItem={i} />)
//     }
//   </ul>
// );

// // render it
// ReactDOM.render(<GroceryList listItems={['coffee', 'cigarettes', 'bread']} />, document.getElementById("app"));

////////////
////////////
// var GroceryListItem = (props) => (
//   <li>{props.listItem}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    let style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.listItem}</li>
    )
  }

}

var GroceryList = (props) => (
  <ul>
    {
      props.listItems.map((i, index) => <GroceryListItem listItem={i} />)
    }
  </ul>
);

// render it
ReactDOM.render(<GroceryList listItems={['coffee', 'cigarettes', 'bread']} />, document.getElementById("app"));