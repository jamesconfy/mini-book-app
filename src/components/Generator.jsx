import Text from "./Text";
import Form from "./Form";
import Image from "./Image";

function Generator() {
  return (
    <div className="container my-container">
      <div className="row">
        <div className="col-md-2 col-sm-12"></div>
        <div className="col-md-4 col-sm-12">
          <Text />
          <Form />
        </div>
        <div className="col-md-4 col-sm-12">
          <Image />
        </div>
        <div className="col-md-1 col-sm-12"></div>
      </div>
    </div>
  );
}

export default Generator;
