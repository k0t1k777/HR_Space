import { ReactNode } from "react";
import "./BigPicture.css";

interface BigPictureProps {
  title?: string;
  icon?: ReactNode;
}

export default function SubmitBtn({
  title,
  icon,
}: BigPictureProps) {
  return (
    <div className="bigPicture">
      <img>{icon}</img>
     <p>{title}</p>
      </div>
  );
}
