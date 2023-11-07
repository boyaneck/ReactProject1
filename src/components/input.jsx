import React from 'react'
import { useState } from 'react';
function input({addList,addTitle,addContent,title,content}) {

  return (
    <div>
         <div className="tag">
          <h1 className="head">나의 To-do List!</h1>
          <span className="inputTag">제목</span> <input className="inputTitle" value={title} onChange={addTitle} />
          <span className="inputTag"> 내용</span><input className="inputContent" value={content} onChange={addContent} />
           <button className="addButton" onClick={addList}>  추가</button>
        </div>
    </div>
  )
}

export default input;