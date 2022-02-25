import React from 'react';
import style from './ProgressBar.module.css'

type ProgressBarType = {
    percent: string
}

const ProgressBar: React.FC<ProgressBarType> = ({percent}) => {
    const value = percent

    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.box}>
                    <div className={style.percent}>
                        <svg>
                            <circle cx="70" cy="70" r="70"/>
                            <circle cx="70" cy="70" r="70"/>
                        </svg>
                        <div className={style.num}>
                            <h2>{percent}<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgressBar;
