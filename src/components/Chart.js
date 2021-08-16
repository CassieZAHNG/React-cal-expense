import './Chart.css';
import CharBar from './CharBar';

const Chart = props => {
  const valueArr = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...valueArr);
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
