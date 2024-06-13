import React from "react";

function Alert(props) {
    // To handle alert = null
    // Outside return
    // if(props.alert === null){
    //     return !props.alert;
    // }

    const capitalize = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

  return (
    // To handle alert = null
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  );
}

export default Alert;
