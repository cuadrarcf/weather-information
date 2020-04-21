import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Spin, Descriptions } from 'antd';
import { AppContent } from '../../app/components/appContent';
import actions from './actions';
import { AlertsTable } from "./view/alertsTable";

class AlertsContainer extends React.Component {

    componentDidMount() {

        // TODO: add html5 geolocation service.
        const filters = {
            area: 'FL'
        }

        this.props.onCrudApi('READ', filters);
    }

    render() {
        const {models, isLoading} = this.props;

        return (
            <AppContent title={'Alerts'}>
                <Row gutter={[0, 24]}>
                    <Col span={24} style={{textAlign: 'center'}}> {isLoading && <Spin size={'large'}/>}</Col>
                    <Col span={24}>
                        <Descriptions title="Info">
                            <Descriptions.Item label="Title">{models.title}</Descriptions.Item>
                            <Descriptions.Item label="Type">{models.type}</Descriptions.Item>
                            <Descriptions.Item
                                label="Updated">{new Date(models.updated).toLocaleString()}</Descriptions.Item>
                            <Descriptions.Item
                                label="Features">{models.features && models.features.length}</Descriptions.Item>
                        </Descriptions>
                        <AlertsTable isLoading={isLoading} dataSource={models.features && models.features}/>
                    </Col>
                </Row>
            </AppContent>
        );
    }

}

export default connect(
    (state) => ({
        ...state.Alerts
    }),
    {
        ...actions
    }
)(AlertsContainer);
