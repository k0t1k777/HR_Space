import './InfoTooltipDone.css';
import IconDone from '../../assets/IconOK.svg?react';
import { useEffect, useState } from 'react';
import { InfoToolTipData } from '../../utils/constants';

interface InfoTooltipProps {
  isVisible?: boolean;
  messageTitle?: string;
  currentStep: number;
}

export default function InfoTooltipDone({
  isVisible,
  currentStep,
}: InfoTooltipProps) {
  const [visible, setVisible] = useState(isVisible);
  const messageTitle =
    currentStep === 9 ? InfoToolTipData.send : InfoToolTipData.save;
  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  if (!visible) {
    return null;
  }
  return (
    <section
      className={`info-tooltip ${isVisible ? 'info-tooltip_visible' : ''} `}
    >
      <IconDone className='info-tooltip__img' />
      <div style={{ width: '214px' }}>
        <h3 className='info-tooltip__tittle-true'>{messageTitle}</h3>
      </div>
    </section>
  );
}
