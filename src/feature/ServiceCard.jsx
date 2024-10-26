import Button from "./Button";
const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div
      className={`service-box bg-slate-800  text-center flex flex-col justify-between gap-5 p-4 rounded-2xl border-sky-400 border-y-4 shadow-lg shadow-[#38bdf8]`}
    >
      <div className="text-5xl flex justify-center">
        <Icon color="#38bdf8" />
      </div>
      <h3 className={`font-extrabold text-2xl`}>{title}</h3>
      <p className="px-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
