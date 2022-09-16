function Image({ imageSrc, imageClass }) {
  return (
    <>
      <img src={imageSrc} alt="" className={`img-fluid ${imageClass}`} />
    </>
  );
}

export default Image;
