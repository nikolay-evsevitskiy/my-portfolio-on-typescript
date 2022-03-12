import React from 'react';
import style from "./ProgressBar.module.scss";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";

type ProgressBarType = {
    percent: number
}

const ProgressBar: React.FC<ProgressBarType> = ({percent}) => {
    return <div className={style.circleProgressBlock}>
        <CircularProgressbarWithChildren value={percent}
                                         className={style.CircularProgressbarWithChildren}
                                         strokeWidth={10}
                                         background={true}
                                         styles={buildStyles({
                                             strokeLinecap: 'round',
                                             pathTransitionDuration: 0.8,
                                             pathColor: `#fcac45`,
                                             trailColor: '#565555',
                                             backgroundColor: '#191c26',
                                         })}>
            <h3>{percent}%</h3>
        </CircularProgressbarWithChildren>
    </div>
};

export default ProgressBar;
