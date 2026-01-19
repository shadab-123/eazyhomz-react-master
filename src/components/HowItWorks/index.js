import React from 'react';
import './how-it-works.scss';
import ButtonComponent from '../Button';
import { useTranslation } from 'react-i18next';

const HowItWorks = ({ onConsultationClick }) => {
  const { t } = useTranslation();

  const steps = t('HOW_IT_WORKS.STEPS', { returnObjects: true });

  return (
    <div className="how-it-works">
      <h1 className="how-it-works-title">{t('HOW_IT_WORKS.HEADING')}</h1>
      
      <div className="steps-container">
        <div className="steps-track">
          {steps.map((step, index) => (
            <React.Fragment key={step.TITLE}>
              <div className="step">
                <div className="step-circle">
                    <img src={`/assets/how-it-works/${['meeting', 'booking', 'deployment', 'maintenance', 'truck'][index]}.png`} alt={step.TITLE} className="step-icon-img" />
                </div>
                <p className="step-text">{step.TITLE}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                    <line x1="0" y1="10" x2="51" y2="10" stroke="#EF4136" strokeWidth="2" />
                    <polygon points="60,10 51,5 51,15" fill="#EF4136" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="consultation-button-container">
        <ButtonComponent 
          text={t('HOW_IT_WORKS.BUTTON_TEXT')} 
          onClick={onConsultationClick}
          className="consultation-button"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
