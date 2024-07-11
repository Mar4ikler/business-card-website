import { ProTable } from '@ant-design/pro-components';
import styles from './InfoView.module.css';

const InfoView = () => {
    const columns = [
        {
            dataIndex: 'key',
            width: 48,
            hideInSearch: true,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            tooltip: 'Client name',
            copyable: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Anna White',
            age: 28,
            address: 'Berlin No. 3 Garden Avenue',
        },
        {
            key: '5',
            name: 'James Wilson',
            age: 36,
            address: 'Tokyo No. 2 River Road',
        },
        {
            key: '6',
            name: 'Emily Johnson',
            age: 26,
            address: 'Paris No. 4 Sunset Boulevard',
        },
        {
            key: '7',
            name: 'Michael Smith',
            age: 39,
            address: 'San Francisco No. 5 Ocean Drive',
        },
        {
            key: '8',
            name: 'Robert Brown',
            age: 45,
            address: 'New York No. 6 Broadway Street',
        },
        {
            key: '9',
            name: 'David Lee',
            age: 50,
            address: 'Seoul No. 7 Mountain Hill',
        },
        {
            key: '10',
            name: 'Laura Martin',
            age: 31,
            address: 'Madrid No. 8 River Street',
        },
        {
            key: '11',
            name: 'Sophia Davis',
            age: 22,
            address: 'Los Angeles No. 9 Sunset Boulevard',
        },
    ];

    return (
        <div className={styles.infoViewContainer}>
            <ProTable
                columns={columns}
                dataSource={data}
                rowKey="key"
                search={true}
                pagination={{
                    pageSize: 5,
                }}
            />
        </div>
    );
};

export default InfoView;
