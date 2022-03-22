import './Chart.css';

import ChartBar from "./ChartBar";

const Chart = (props: any) => {
    const dataPointValues = props.dataPoints.map((dataPoint: any) => {
        return dataPoint.value;
    })
    const totalMaximum = Math.max(...dataPointValues);

    return <>
        <div className="chart">
            {props.dataPoints.map(
                (dataPoint: any) => {
                    return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
                }
            )}
        </div>
    </>;
}

export default Chart;