import React from "react";
import { useState } from "react";
import "./App.css";
import Done from "./components/DoneList"
import Working from "./components/WorkingList"
import Input from "components/input";

function App() {
  const [list, setList] = useState([{id:0,title:'',content:'',isDone: false}]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // input창의 제목&내용
  let addTitle = (A) => setTitle(A.target.value);
  let addContent = (A) => setContent(A.target.value);

  //추가버튼
  let addList = () => {
    const newList = { id: list.length, title, content, isDone: false };
    setList([...list, newList]);
    setTitle('');
    setContent('');
  };

  //삭제버튼
  let removeList = (ID) => {
    let newList = list.filter((li) => li.id !== ID);
    setList(newList);
  };

  //완료버튼
  let done = (ID) => {
    console.log(ID)
    const doneList=[...list];
    doneList[ID].isDone=true;
    setList([...list,doneList]);
  };
  //취소버튼
  let cancel=(ID) => {
    const cancelList=[...list];
    cancelList[ID].isDone=false;
    setList([...list,cancelList]);
  }
  return (
    <div className="body">
      <div className="layout">
        {/* input.jsx */}
        <Input addList={addList} addContent={addContent} addTitle={addTitle} title={title} content={content}/>
        
         {/* working.jsx */}
        <h1>Working!&#x261D;</h1>
        <div className="TodoListLayout">
          {list.map((A) => {if (A.isDone === false)  return <Working key={A.id} A={A} removeList={removeList} done={done}/> })}
        </div>

          {/* done.jsx  */}
          <h1>Done!🎉</h1>
          <div className="TodoListLayout">
           {list.map((A) => { if (A.isDone === true) return <Done key={A.id} A={A} cancel={cancel} removeList={removeList}  /> })}
        </div>

      </div>
    </div>
  );
}

export default App;
