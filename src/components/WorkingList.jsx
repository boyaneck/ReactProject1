import React from "react";

let Working =({A,removeList,done})=>{
return (
<div key={A.id} className="TodoList">
                  <div className="TodoTitle">{A.title}</div>
                  <div className="TodoContent">{A.content}</div>
                  <button className='deleteButton'onClick={() => removeList(A.id)}>삭제</button>
                  <button className='completeButton'onClick={() => done(A.id)}>완료</button>
                </div>
)
};

export default Working;