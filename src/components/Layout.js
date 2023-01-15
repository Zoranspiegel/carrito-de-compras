import React from 'react';

const styles = {
  layout: {
    display: "flex",
    backgroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    flexDirection: "column"
  },
  container: {
    width: "1200px"
  }
}
class Layout extends React.Component{
  render(){
    return(
    <div style={styles.layout}>
      <div style={styles.container}>
        {this.props.children}
      </div>
    </div>
    )
  }
}

export default Layout;