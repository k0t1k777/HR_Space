import "./BigPicture.css";

interface BigPictureProps {
  changeColor?: string;
  title?: string;
  icon?: string;
  numb?: string;
}

export default function BigPicture({
  changeColor,
  title,
  icon,
  numb
}: BigPictureProps) 
{
  return (
    <div className="bigPicture">
      <img className="bigPicture__image" src={icon} alt="Иконка прогресса"/>
      <p className={`bigPicture__title ${changeColor}`}>{`${numb} ${title}`}</p>
      </div>
  );
}
