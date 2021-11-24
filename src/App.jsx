import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  // 通常はアロー関数は、毎回新しい関数が生成される
  // そのため、memo化しても、関数を渡したコンポーネントの再レンダリングが走ってしまう
  // ⇨同じ関数だと判定させるため、useCallbackで囲う
  // [open]と書くと、openが変わった時にこの関数を再生成する。
  // []なら、この関数の再生性はされない
  const onClickClose = useCallback(() => setOpen(false), [open]);

  // 変数のメモ化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
