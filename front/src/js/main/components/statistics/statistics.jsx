import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CustomizedLabel, Legend, Tooltip } from 'recharts';

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

export default class Statistics extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    state = {
        userTitles: [],
        hoveredUserNode: null
    };

    render() {
        return (
            <div classtitle="statistics__container">
                <p classtitle="statistics__title">Статистика</p>

                <p classtitle="statistics__description">Статистика болезней по беларуси</p>

                <BarChart
                    width={500}
                    height={300}
                    data={diseases.sort((a, b) => {
                        if (a.value > b.value) {
                            return 1;
                        }
                        if (a.value < b.value) {
                            return -1;
                        }

                        return 0;
                    })}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}
