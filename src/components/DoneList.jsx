
import React from "react";

let Done =({A,cancel,removeList})=>{
    return (
    <div key={A.id} className="TodoList">
                    <div className="TodoTitle">{A.title}</div>
                    <div className="TodoContent">{A.content}</div>
                    <button className='deleteButton'onClick={() => removeList(A.id)}>삭제</button>
                    <button className='cancelButton'onClick={() => cancel(A.id)}>취소</button>
                  </div>
    )
  }

  export default Done;