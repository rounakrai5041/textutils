import React from 'react'

function Alert(props) {

    const Change = (word)=>{
let naya = word.replace("primary","success") 

return naya
    }
    

  return (




  props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{Change(props.alert.type)}</strong> : {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert