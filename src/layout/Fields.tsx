import { Col, Row } from "reactstrap"
import { Layout } from "../styles/Common/Common"
import { FieldsBox } from "../styles/Fields/FieldsLayout"
import { defaultFormSchema } from "../constants/defaultFieldTypes"

const Fields = () => {
    const fields = defaultFormSchema
    return (
        <Layout>
            <Row>
                <Col>
                    <h5>Elements</h5>
                </Col>
            </Row>
            <Row className="mt-2">
                {/* <Col sm={12}>
                    <FieldsBox>
                        {fieldIcons?.["name"]
                            &&
                            <span
                                dangerouslySetInnerHTML={{ __html: fieldIcons["name"] }}></span>}
                        Name
                    </FieldsBox>
                </Col> */}
                {fields.map((field) => (
                    <Col sm={12} className="mb-3" key={field.id}>
                        <FieldsBox
                            draggable
                            onDragStart={(e) => {
                                e.dataTransfer.setData("fieldType", field.type)
                            }}
                        >
                            {field?.icon
                                &&
                                <span
                                    dangerouslySetInnerHTML={{ __html: field?.icon }}></span>}
                            {field.label || field.type}
                        </FieldsBox>
                    </Col>
                ))}
            </Row>
        </Layout>
    )
}

export default Fields