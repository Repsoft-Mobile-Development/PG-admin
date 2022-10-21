import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartBarApex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: 'Net Profit',
					data: [15, 55, 90, 80, 25, 15, 70],
					//radius: 12,	
				}, 
				{
				  name: 'Revenue',
				  data: [60, 65, 15, 35, 30, 5, 40]
				}, 
				
			],
			options: {
				chart: {
					type: 'bar',
					height: 350,
					toolbar: {
						show: false,
					},
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '35%',
						endingShape: "rounded",
						borderRadius: 5,
					},
				},
				colors:['var(--secondary)', 'var(--primary)'],
				//colors:['var(--primary)'],
				dataLabels: {
				  enabled: false,
				},
				markers: {
					shape: "circle",
				},
				legend: {
					show: false,
					fontSize: '12px',
					labels: {
						colors: '#000000',
						
						},
					markers: {
						width: 18,
						height: 18,
						strokeWidth: 0,
						strokeColor: '#fff',
						fillColors: undefined,
						radius: 12,	
					}
				},
				stroke: {
					show: true,
					width: 1,
					colors: ['transparent']
				},
				grid: {
					borderColor: '#eee',
				},
				xaxis: {
					categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					labels: {
						style: {
						   colors: '#787878',
						   fontSize: '13px',
						   fontFamily: 'poppins',
						   fontWeight: 100,
						   cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					}
				},
				yaxis: {
					labels: {
						style: {
							colors: '#787878',
							fontSize: '13px',
							fontFamily: 'poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					},
				},
				fill: {
					opacity: 1
				},
				tooltip: {
					y: {
						formatter: function (val) {
							return "$ " + val + " thousands"
						}
					}
				}
			},
		};
	}

	render() {
		return (
			<div id="chart" >
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="bar"
				  height={350} 
				/>
			</div>
		);
	}
}

export default ChartBarApex;