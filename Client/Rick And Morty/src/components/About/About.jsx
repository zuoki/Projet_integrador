import React, { useRef, useState, useEffect } from 'react';
import styles from './About.module.css';
import logo from './javascript.png';
import logo1 from './css.png';
import logo2 from './react.png';
import logo3 from './redux.png';
import logo4 from './vite.png';

const About = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft -= walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        slider.scrollLeft += slider.offsetWidth; // Desplaza una página (ancho del slider)
      }, 3000);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();

    slider.addEventListener('mouseenter', stopScroll);
    slider.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      slider.removeEventListener('mouseenter', stopScroll);
      slider.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  return (
    <div className={styles.AboutDiv}>
      <div className={styles.tituloA}></div>
      <div className={styles.txtContainer}>
      </div>
      <div className={styles.txtC} ></div>
      <div className={styles.slider} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} ref={sliderRef}>
        <img src={logo} alt="Logo CSS" />
        <img src={logo1} alt="Logo CSS" />
        <img src={logo2} alt="Logo CSS" />
        <img src={logo3} alt="Logo 2" />
        <img src={logo4} alt="Logo CSS" />
      </div>
    </div>
  );
}

export default About;

