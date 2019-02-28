import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';
import { CvData } from '../../../models/CvData';
import './DayChart.css';

export class DayChart extends Component {
    displayName = DayChart.name;

    render() {
        var cvData = new CvData();
        var data = cvData.getData();
        var tasks = data.dayOfLife.map(t => t.task);
        var percentages = data.dayOfLife.map(p => p.percentage);
        var data = {
            labels: tasks,
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3cba9f", "#502DA0"],
                    data: percentages
                }
            ]
        };
        return (
            <div>
                <Doughnut data={data} />
            </div>
        );
    }

}

