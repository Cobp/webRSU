import { BarChart1, LineChart1, PieChart1 } from "../../../components"
import './chartsModule.css'

const Presentation = () => {
  const data = [15, 50, 35, 120, 55, 102 ];
  return (
    <div className="estadisticas">
      <BarChart1 data={data}/>
      <LineChart1 data={data}/>
      <PieChart1 data={data}/>
    </div>
  )
}

export default Presentation
