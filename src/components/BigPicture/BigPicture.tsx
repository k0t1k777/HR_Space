import "./BigPicture.css";

interface BigPictureProps {
  title?: string;
  icon?: string;
}

export default function BigPicture({
  title,
  icon,
}: BigPictureProps) 
{
  return (
    <div className="bigPicture">
      <img src={icon} alt="Иконка прогресса"/>
      <p className="bigPicture__title">{title}</p>
      </div>
  );
}
