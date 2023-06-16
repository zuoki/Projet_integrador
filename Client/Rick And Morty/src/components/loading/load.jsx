import React from 'react';
import style from './loader.module.css';
import rickdormido from './Ciudadela.png';

const LoadingScreen = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${style.load} ${style.mod}`}>
      {showLoader && (
        <div className={style.load}>
          <img className={style.gift} src={rickdormido} alt="" />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
