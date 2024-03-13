import './Subtitle.css';

interface SubtitleProps {
  subtitle: string;
}

export default function SubTitle({ subtitle }: SubtitleProps) {
  return (
    <h3 className='subtitle'>{subtitle}</h3>

  )
}
