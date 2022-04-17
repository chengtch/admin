import { Card, Row, Col } from 'antd';


export default function HomePage(pros: any) {

    return (
        <div>
            <Row>
                <Card title="Card title" bordered={true} style={{ width: 500 }}
                    cover={
                        <img
                            alt="youtube"
                            src="./photo/youtube.png"
                        />
                    }
                >
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>

            <br />
            <Row>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>

            <br />
            <Row>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>

            <br />

        </div>
    )
}