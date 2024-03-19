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
    <div className="big-picture">
      <img className="big-picture__image" src={icon} alt="Иконка прогресса"/>
      <p className={`big-picture__title`}>{title}</p>
      </div>
  );
}
