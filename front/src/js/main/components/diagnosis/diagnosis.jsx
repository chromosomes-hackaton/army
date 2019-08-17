import React from "react";
import PropTypes from "prop-types";
import { Card, Select, Button } from "antd";

import "./diagnosis.scss";

const { Option } = Select;

const diagnosis = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "C"
    },
    {
        id: 3,
        name: "B"
    }
];

export default class Diagnosis extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    state = {
        value: null
    };

    onChange = id => this.setState({ value: id });

    render() {
        const { value } = this.state;
        // const { diagnosis, questions } = this.props;

        return (
            <div className="diagnosis__container">
                <Card
                    title="Выберите диагноз..."
                    extra={<a href="#">More</a>}
                    style={{ width: "500px" }}
                >
                    <Select
                        showSearch
                        defaultValue="Выберите диагноз..."
                        style={{ width: "100%" }}
                        filterOption={(input, option) =>
                            option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                        optionFilterProp="children"
                        onSearch={() => {}}
                        onChange={this.onChange}
                    >
                        {diagnosis &&
                            diagnosis.map(item => (
                                <Option key={item.id} value={item.id}>
                                    {item.name}
                                </Option>
                            ))}
                    </Select>

                    <div className="diagnosis__buton-container">
                        <Button type="primary" disabled={!value}>
                            Проверить
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }
}
