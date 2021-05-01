import { useState, useRef } from "react"
import { Form, Input, message } from "antd"
import { Button } from "evergreen-ui"
import emailjs from "emailjs-com"
import styles from "./contact.module.css"

const index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm()
    const formRef = useRef()
    const { TextArea } = Input

    const onFinish = values => {
        setIsLoading(true)
        emailjs
            .send(
                "service_sdasfoa",
                "template_g2gd5qp",
                values,
                "user_RGIAuejdUyP5Xaeo3BKsn"
            )
            .then(result => {
                if (result.text === "OK") {
                    message.success({
                        content: "Your message was successfully delivered!",
                    })
                    setIsLoading(false)
                    formRef.current !== null && formRef.current.resetFields()
                } else {
                    message.error({
                        content:
                            "There was an error while sending your message.",
                    })
                    setIsLoading(false)
                    formRef.current !== null && formRef.current.resetFields()
                }
            })
            .catch(error => console.log(error))
        setIsLoading(false)
    }
    return (
        <div className={styles.contact_card}>
            <div className={styles.contact_form}>
                <h2 className={styles.header}>Contact</h2>
                <Form
                    layout="vertical"
                    form={form}
                    ref={formRef}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Name is required",
                            },
                        ]}
                    >
                        <Input placeholder="ex. John Doe" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Email Address is invalid",
                            },
                        ]}
                    >
                        <Input placeholder="someone@example.com" />
                    </Form.Item>
                    <Form.Item
                        label="Subject"
                        name="subject"
                        rules={[
                            {
                                required: true,
                                message: "Subject is required",
                            },
                        ]}
                    >
                        <Input placeholder="Let’s get in touch..." />
                    </Form.Item>
                    <Form.Item
                        label="Your Message"
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: "Message is required",
                            },
                        ]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="Hi RangoliSweets, ......"
                        />
                    </Form.Item>

                    <div className={styles.button_app}>
                        <Button
                            appearance="primary"
                            htmlType="submit"
                            isLoading={isLoading}
                            height={40}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;SEND&nbsp;&nbsp;&nbsp;&nbsp;
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default index
