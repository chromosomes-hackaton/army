import React from 'react';
import PropTypes from 'prop-types';
import { XYPlot, YAxis, Hint, XAxis, HorizontalBarSeries } from 'react-vis';

import CustomChart from 'main/components/custom-chart/custom-chart';
// import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CustomizedLabel, Legend, Tooltip } from 'recharts';

import './statistics.scss';

const diseases = [
    {
        id: 1,
        name: 'некоторые инфекционныеи паразитарные болезни',
        value: 311
    },
    {
        id: 2,
        name: 'новообразования',
        value: 133
    },
    {
        id: 3,
        name: 'болезни крови, кроветворных органов и отдельные нарушения, вовлекающие иммунный механизм',
        value: 23
    },
    {
        id: 4,
        name: `болезни эндокринной системы, расстройства питания и нарушения обмена веществ `,
        value: 97
    },
    {
        id: 5,
        name: `психические расстройства и расстройства поведения`,
        value: 138
    },
    {
        id: 6,
        name: `болезни нервной системы`,
        value: 54
    },
    {
        id: 7,
        name: `болезни глаза и его придаточного аппарата `,
        value: 312
    },
    {
        id: 8,
        name: `болезни уха и сосцевидного отростка`,
        value: 245
    },
    {
        id: 9,
        name: `болезни системы кровообращения `,
        value: 312
    },
    {
        id: 10,
        name: `болезни органов дыхания `,
        value: 4244
    },
    {
        id: 11,
        name: `болезни органов пищеварения`,
        value: 228
    },
    {
        id: 12,
        name: `болезни кожи и подкожной клетчатки `,
        value: 416
    },
    {
        id: 14,
        name: `болезни костно-мышечной системы и соединительной ткани `,
        value: 404
    },
    {
        id: 15,
        name: `болезни мочеполовой системы`,
        value: 334
    },
    {
        id: 16,
        name: `врожденные аномалии (пороки развития), деформации и хромосомные нарушения `,
        value: 20
    },
    {
        id: 17,
        name: `травмы, отравления и некоторые другие последствия воздействия внешних причин`,
        value: 694
    }
];

const parseToPercentage = diseases => {
    diseases.sort((a, b) => {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }

        return 0;
    });

    let total = 0;
    const labels = [];

    diseases.forEach(item => {
        total += item.value;
    });

    const parsedValues = diseases.map((item, i) => {
        labels.push(item.name);
        const value = (item.value * 100) / total;
        const x = Math.round(value * 100) / 100;
        const px = (400 * x) / 100;

        return {
            ...item,
            x: x,
            y: i,
            px
        };
    });

    return {
        parsedValues,
        labels
    };
};

export default class Chart extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    state = {
        userTitles: [],
        hintNode: null
    };

    render() {
        const { hintNode } = this.state;
        const { parsedValues, labels } = parseToPercentage(diseases);

        return (
            <div className="statistics__container">
                <p className="statistics__description">Статистика болезней по беларуси</p>

                <div className="statistics__chart-container">
                    <CustomChart data={parsedValues} />
                    {/* <XYPlot
                        margin={{ left: 500 }}
                        height={400}
                        width={1000}
                        yType="ordinal"
                        colorType="category"
                        onMouseLeave={() => this.setState({ hintNode: null })}
                        stackBy="x"
                    > */}
                    {/* <HorizontalBarSeries
                        cluster="stack 1"
                        data={parsedValues}
                        barWidth={0.5}
                        onValueMouseOver={d => this.setState({ hintNode: d })}
                        onValueMouseOut={() => this.setState({ hintNode: null })}
                    />

                        <YAxis
                            tickFormat={v => labels[v]}
                            style={{
                                text: { fontSize: '13px', color: '#fff' }
                            }}
                        />
                        <XAxis
                            tickFormat={v => v}
                            style={{
                                line: { stroke: '#ddd' },
                                ticks: { stroke: '#ddd' },
                                text: {
                                    stroke: 'none',
                                    fill: '#999',
                                    fontWeight: 300,
                                    fontSize: '11px'
                                }
                            }}
                        />
                        {hintNode && (
                            <Hint value={hintNode}>
                                <div className="statistics__hint-container">
                                    <p className="statistics__hint">Persantage: {hintNode.x}%</p>
                                </div>
                            </Hint>
                        )}
                    </XYPlot> */}
                </div>

                {/* <BarChart
                    width={500}
                    height={300}
                    data={parseToPercentage(diseases).sort((a, b) => {
                        if (a.value > b.value) {
                            return -1;
                        }
                        if (a.value < b.value) {
                            return 1;
                        }

                        return 0;
                    })}
                >
                    <XAxis dataKey="name" />
                    <Bar dataKey="value" fill="#8884d8" />
                    <YAxis />
                    <Tooltip />
                </BarChart> */}
            </div>
        );
    }
}
