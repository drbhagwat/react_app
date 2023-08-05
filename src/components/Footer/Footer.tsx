import "./Footer.css";

interface Props {
  note: string;
}

const Footer = ({ note }: Props) => {
  return (
    <div className="footer">
      <p className="bg-primary">{note}</p>
    </div>
  );
};

export default Footer;
