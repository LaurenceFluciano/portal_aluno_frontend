import { Group } from "./layout/Group";


export default function ProgressBar({ progress }) {

    const normalizedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <Group className={"align--middle-start"} layout="col">
            <div 
                className="card__progress-bar"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div style={{width: `${normalizedProgress}%`}}></div>
            </div>
            <div className="card__progress-text">{normalizedProgress}%</div>
        </Group>
    )
}