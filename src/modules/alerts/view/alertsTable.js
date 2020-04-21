import React from "react";
import { Table } from "antd";

const columns = [
    {
        title: 'Certainty',
        dataIndex: 'certainty',
        key: 'certainty',
    },
    {
        title: 'Headline',
        dataIndex: 'headline',
        key: 'headline',
    },
    {
        title: 'Sender Name',
        dataIndex: 'senderName',
        key: 'senderName',
    },
    {
        title: 'Event',
        dataIndex: 'event',
        key: 'event',
    },
];

export function AlertsTable(props) {

    const {isLoading, dataSource} = props;

    const properties = !dataSource ? [] : dataSource.map( item => item.properties);

    return(
        <Table rowKey={'id'} loading={isLoading} dataSource={properties} columns={columns} />
    );
}
