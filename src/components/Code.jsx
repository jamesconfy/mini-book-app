import Image from "./Image";

function Code({ imageSrc }) {
  return (
    <div className="image-div">
      <Image imageSrc={imageSrc} imageClass="generator-img" />
      <a href={imageSrc} download="qrcode.jpeg">
        <button
          type="submit"
          className="btn btn-outline-secondary form-control mybtn"
        >
          Download Image
        </button>
      </a>
    </div>
  );
}


export default Code;
