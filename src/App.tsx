import './App.scss';
import Button from "./components/ui/button/Button.tsx";
import Upload from "./components/ui/upload/Upload.tsx";
import {useState} from "react";

function App() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button>d</Button>

      <Upload file={file} setFile={setFile} error={'dsada'} />
      <Upload file={file} setFile={setFile} />
    </div>
  )
}

export default App

