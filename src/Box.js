const Box = (props) => {
    return (
      <div className="box">
                  <h4>{props.name}</h4>
                  <div>title: {props.title}</div>
                  <div>age: {props.age}</div>
                  <div>languages: {props.languages}</div>
              </div>
    );
  };

  export default Box;