import Text from "./Text";
import Form from "./Form";
import Image from "./Image";
import Code from "./Code";
import QrCode from "../img/qr-code.svg";

function Generator({ onGenerate, code }) {
  return (
    <div className="container my-container">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <Image imageSrc={QrCode} imageClass={"img"} />
        </div>
        <div className="col-md-4 col-sm-12">
          <Text />
          <Form onGenerate={onGenerate} />
        </div>
        <div className="col-md-5 col-sm-12">
          {code && <Code imageSrc={code} />}
        </div>
      </div>
    </div>
  );
}

export default Generator;
