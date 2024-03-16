import './TextArea.css';

interface TextAreaProps {
  placeholder: string;
}

export default function TextArea({ placeholder }: TextAreaProps) {
  return <textarea className='textArea' placeholder={placeholder} />;
}
