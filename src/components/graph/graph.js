import React, { Component } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

class Graph extends Component {
    componentDidMount() {
        // TODO
        // const unixDate = 1563703457;
        // console.log('test - moment.unix(unixDate) !== Date(unixDate) wtf? \n' );
        // console.log(moment.unix(unixDate).format('YYYY-MM-DD HH:mm:ss'),'!== \n',Date(unixDate),);

        const { data } = this.props;

        const buyPrice = [];
        const sellPrice = [];
        const dateTime = [];
        const buyOrders = [];
        const sellOffers = [];

        const currentTime = moment();
        const currentTimeDayBack = moment().subtract(1,'days');

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const itemTime = moment.unix(item.dateTimeUNIX);

            if(itemTime.isBefore(currentTime)  && itemTime.isAfter(currentTimeDayBack)) {
                buyPrice.push(item.buyPrice);
                dateTime.push(itemTime.format('YYYY-MM-DD HH:mm:ss'));
                sellPrice.push(item.sellPrice);
                buyOrders.push(item.buyOrders);
                sellOffers.push(item.sellOffers);
            }
        }

        const ctx = document.getElementById('myChart');
        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'ITEM CHART DATA'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: 'data',
                        autoSkip: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'PRICES'
                    },
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'QUANTITY'
                    },
                    position: 'right',
                    id: 'y-axis-2',
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0 // disables bezier curves
                }
            }
        };
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dateTime,
                datasets: [{
                    label: 'Sell',
                    data: sellPrice,
                    borderColor: 'red',
                    backgroundColor: 'red',
                    pointRadius: 0,
                    borderWidth: 2,
                    fill: false,
                    yAxisID: 'y-axis-1',
                    type: 'line',
                }, {
                    label: 'Buy',
                    data: buyPrice,
                    borderColor: 'green',
                    backgroundColor: 'green',
                    pointRadius: 0,
                    borderWidth: 2,
                    fill: false,
                    yAxisID: 'y-axis-1',
                    type: 'line',
                }, {
                    label: 'SellOffers',
                    data: sellOffers,
                    borderColor: '#939393',
                    borderWidth: 1,
                    yAxisID: 'y-axis-2',
                    type: 'bar',
                }, {
                    label: 'BuyOrders',
                    data: buyOrders,
                    borderColor: '#44a5ff',
                    borderWidth: 1,
                    yAxisID: 'y-axis-2',
                    type: 'bar',
                }]
            },
            options: options
        });
    }

    render() {
        return (
            <div className="graph">
                <canvas id="myChart" ></canvas>
            </div>
        );
    }

};

export default Graph;
