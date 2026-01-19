import { useRef } from "react";
import "./design-inspiration-slider.scss";
import { DASHBOARD_DATA } from "../../utils/data";
import { useTranslation } from "react-i18next";

function DesignInspirationSlider() {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  // Create items array from DASHBOARD_DATA translations
  const items = [
    {
      image: DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_1.IMAGE_PATHS[0],
      title: t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_1.IMAGE_SLIDER_HEADING')
    },
    {
      image: DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_2.IMAGE_PATHS[0],
      title: t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_2.IMAGE_SLIDER_HEADING')
    },
    {
      image: DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_3.IMAGE_PATHS[0],
      title: t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_3.IMAGE_SLIDER_HEADING')
    },
    {
      image: DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_4.IMAGE_PATHS[0],
      title: t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_4.IMAGE_SLIDER_HEADING')
    },
    {
      image: DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_5.IMAGE_PATHS[0],
      title: t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_5.IMAGE_SLIDER_HEADING')
    },
    {
      image: DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_6.IMAGE_PATHS[0],
      title: t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_6.IMAGE_SLIDER_HEADING')
    }
  ];

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="lr-section">
      <div className="lr-carousel-wrapper">
        <button className="lr-arrow left" onClick={() => scroll("left")} aria-label="scroll left">
          ‹
        </button>

        <div className="lr-carousel" ref={sliderRef}>
          {items.map((item, index) => (
            <div className="lr-card" key={index}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <button className="lr-arrow right" onClick={() => scroll("right")} aria-label="scroll right">
          ›
        </button>
      </div>
    </section>
  );
}

export default DesignInspirationSlider;
