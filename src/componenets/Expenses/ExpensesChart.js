import Chart from '../Chart/Chart.js'

const ExpensesChart=(props)=>{
 const chartdataPoints =[
    { label:'Jan',value:0},
    { label:'Feb',value:0},
    { label:'Mar',value:0},
    { label:'Apr',value:0},
    { label:'May',value:0},
    { label:'Jun',value:0},
    { label:'Jul',value:0},
    { label:'Aug',value:0},
    { label:'Sep',value:0},
    { label:'Oct',value:0},
    { label:'Nov',value:0},
    { label:'Dev',value:0},
 ];
 for(const expense of props.expenses){
    const expenseofMonth=expense.date.getMonth();
    chartdataPoints[expenseofMonth].value +=expense.amount;
 }
    return (
        <Chart dataPoints={chartdataPoints}/>
)
}
export default ExpensesChart