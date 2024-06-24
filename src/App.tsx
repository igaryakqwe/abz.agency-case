import './App.scss';
import Button from "./components/ui/button/Button.tsx";
import Upload from "./components/ui/upload/Upload.tsx";
import {useState} from "react";
import Input from "./components/ui/input/Input.tsx";
import Card from "./components/card/Card.tsx";
import Header from "./components/header/Header.tsx";
import Loader from "./components/ui/loader/Loader.tsx";
import Tooltip from "./components/ui/tooltip/Tooltip.tsx";
import Radio from "./components/ui/radio/Radio.tsx";

function App() {
  const [file, setFile] = useState<File | null>(null);

  const user = {
    "id": 5,
    "name": "Peaches-Honeyblossom-Michelle-Charlotte-Angel-Vanessa",
    "email": "peaches.honeyblossom.michelle.charlotte.angel.vanessa@gmail.com",
    "phone": "+380672278518",
    "position_id": 4,
    "position": "Designer",
    "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a65972a8f5.jpeg"
  }

  return (
    <div style={{ backgroundColor: '#f8f8f8'}}>
      <Header />
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button>d</Button>

      <Upload file={file} setFile={setFile} />
      <Upload file={file} setFile={setFile} />
      <Input label={'12313'} />
      <Input label={'12313'} error={'dasdads'} />
      <Card user={user} />
      <Loader />
      <Tooltip text={'dsahjjdhsajhdkhasdhsagjdgasgdhsada'} />
      <div>
        <Radio id="radio1" name="group1" label="Option 1"/>
        <Radio id="radio2" name="group1" label="Option 2"/>
      </div>
    </div>
  )
}

export default App

