import { FooterIcons } from "../data/data";
const Footer = () => {
  return (
    <footer className="bg-slate-950 py-4">
      <div className="mx-auto w-4/5">
        <div className="flex gap-4 justify-center py-4">
          {FooterIcons.map((Item) => (
            <a key={Item.id} href={Item.url} className="text-accent">
              <Item.icon fontSize={25}/>
            </a>
          ))}
        </div>
        <p className="text-center font-bold text-sm text-slate-500">
          © Copyright Michael Tom. Design And Developed By Michael
        </p>
      </div>
    </footer>
  );
};

export default Footer;
