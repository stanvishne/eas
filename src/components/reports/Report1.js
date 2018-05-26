import React from 'react';
import { Label } from 'react-bootstrap';
import Iframe from 'react-iframe';

class Report1 extends React.Component {
    render() {
        return (
            <div>
                <Label>Отчет1</Label>

                <Iframe
                    url="/pages/testPage/"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                />
            </div>
        );
    }
}

export default Report1;
