// import {  } ;
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// 基本的には、memo化する
// memo() で囲うことにより、propsが変更されない限り、このコンポーネントは再レンダリングしない
export const ChildArea = memo((props) => {
  console.log("ChildAreaがレンダリングされた!!");
  const { open, onClickClose } = props;
  // 0 - 1999 までの数が順番に並んだ配列
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  // console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
