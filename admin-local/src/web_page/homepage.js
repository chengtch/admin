import { Card, Row, Col } from 'antd';


export default function HomePage(pros: any) {

    return (
        <div>
            <Row>
                <Card title="Youtube" bordered={true} style={{ width: 400 }}
                    cover={
                        <img
                            height={120}
                            width={20}
                            alt="youtube"
                            src="https://github.com/chengtch/admin/blob/main/admin-local/src/web_page/photo/youtube.png?raw=true"
                        />
                    }
                >
                    <a href="https://www.youtube.com/" target="_blank">goto</a>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>

            <br />
            <Row>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>

            <br />
            <Row>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Col span={1}/>
                <Card title="Card title" bordered={true} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>

            <br />

        </div>
    )
}