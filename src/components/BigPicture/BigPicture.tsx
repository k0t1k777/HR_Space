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
      <img className="bigPicture__image" src={icon} alt="Иконка прогресса"/>
      <p className={`bigPicture__title`}>{title}</p>
      </div>
  );
}
