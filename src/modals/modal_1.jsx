const ModalFahren = ({ h, v, z, img, header, action, onClick }) => {
  return (
    <div>
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-black opacity-20"
        style={{ zIndex: z }}
      ></div>
      <div
        className={`absolute md:w-3/5 lg:w-2/5  p-2 drop-shadow-lg bg-white rounded-lg`}
        style={{ top: v, left: h, zIndex: z + 1 }}
      >
        <div className="flex flex-col justify-center gap-2">
          <h5 className="text-xl self-center">
            <b>{header}</b>
          </h5>
          <img
            src={img}
            alt=""
            height="80px"
            width="80%"
            className="self-center"
          />
          <button
            className="btn btn-primary w-48 self-center no-animation"
            onClick={() => onClick()}
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFahren;
