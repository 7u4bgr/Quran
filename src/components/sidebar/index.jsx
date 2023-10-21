// import React from "react";
// import Sidebar from "react-sidebar";
// import { UserIcon } from "../../icons";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true,
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b><UserIcon/></b>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{
//           sidebar: {
//             background: "#1c3f39",
//             zIndex: "40",
//             marginLeft:'auto'
//           },
//         }}
//       >
//         <UserIcon onClick={() => this.onSetSidebarOpen(true)}>
//           Open sidebar
//         </UserIcon>
//       </Sidebar>
//     );
//   }
// }

// export default App;
