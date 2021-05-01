import React from "react"
import { Collapse } from "antd"
import styles from "./faq.module.css"

const index = () => {
    const { Panel } = Collapse

    return (
        <div className={styles.accordian}>
            <h2>Frequently Asked Questions</h2>
            <Collapse accordion>
                <Panel header="1. Which is the nearest landmark ?" key="1">
                    <p className={styles.para}>
                        You can easily locate the establishment as it is in
                        close proximity to KMOU Bus Stand
                    </p>
                </Panel>
                <Panel header="2. What are its hours of operation ?" key="2">
                    <p className={styles.para}>
                        The establishment is functional on :
                    </p>
                    <p className={styles.para}>Sunday:- 7AM-9PM</p>
                    <p className={styles.para}>Monday:- 7AM-9PM</p>
                    <p className={styles.para}>Tuesday:- 7AM-9PM</p>
                    <p className={styles.para}>Wednesday:- 7AM-9PM</p>
                    <p className={styles.para}>Thursday:- 7AM-9PM</p>
                    <p className={styles.para}>Friday:- 7AM-9PM</p>
                    <p className={styles.para}>Saturday:- 7AM-9PM</p>
                </Panel>
                <Panel header="3. Is home delivery available ?" key="3">
                    <p className={styles.para}>
                        Sorry, but the home delivery is not available at the
                        moment, but we are planning to establish it soon.
                    </p>
                </Panel>
                <Panel
                    header="4. What are the various mode of payment accepted here ?"
                    key="4"
                >
                    <p className={styles.para}>
                        You can make payment via Cash, Master Card, Visa Card,
                        Debit Cards, Credit Cards.
                    </p>
                </Panel>
            </Collapse>
        </div>
    )
}

export default index
