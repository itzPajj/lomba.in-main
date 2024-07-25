import Button from "./Button";

const Lomba = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow-lg my-10 ">{children}</div>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="mb-3">
      <a href="#">
        <img src={image} className="rounded-lg border border-white w-full h-[300px]" alt="" />
      </a>
    </div>
  );
};
const Category = (props) => {
  const { category } = props;

  return (
    <div className="px-3">
      <Button title={category} textColor="text-black" color="bg-slate-200" size="lg" />
    </div>
  );
};

const Body = (props) => {
  const {namaLomba, penyelenggara, tanggal} = props
  return (
    <div className="p-3">
      <p className="text-xl font-bold">{namaLomba}</p>
      <p className="text-slate-400">{penyelenggara}</p>
      <p className="font-semibold">{tanggal}</p>
    </div>
  );
};

Lomba.Category = Category;
Lomba.Header = Header;
Lomba.Body = Body;

export default Lomba;
