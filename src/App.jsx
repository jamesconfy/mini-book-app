import Header from "./components/Header";
import Generator from "./components/Generator";
import Footer from "./components/Footer";
import { useState } from "react";
import QRCode from "qrcode";

function App() {
  const [code, setCode] = useState("");

  const onGenerate = (text, size) => {
    //setCode(!code);
    QRCode.toDataURL(
      text,
      {
        width: 800,
        margin: 2,
        color: { dark: "#353583ff", light: "#0000" },
      },
      (err, text) => {
        if (err) return console.log(err);

        console.log(text);
        setCode(text);
      }
    );
  };

  return (
    <>
      <Header />
      <Generator onGenerate={onGenerate} code={code} />
      <Footer />
    </>
  );
}

export default App;
