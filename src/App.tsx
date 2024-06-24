import './App.scss';
import Button from "./components/ui/button/Button.tsx";
import Upload from "./components/ui/upload/Upload.tsx";
import {useState} from "react";
import Input from "./components/ui/input/Input.tsx";

function App() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button>d</Button>

      <Upload file={file} setFile={setFile} />
      <Upload file={file} setFile={setFile} />
      <Input label={'12313'} />
      <Input label={'12313'} error={'dasdads'} />
    </div>
  )
}

export default App

