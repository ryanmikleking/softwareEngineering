import React from 'react';
import {Text} from "react-native";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { useHistory } from 'react-router-dom';


const AdminView = () => {

        const history = useHistory();

        const redirect = () => {
          history.push('/aside');
        }

    return (
    <div class = "page-container">

            <div class="box">

                <div class="one">

                    <p>

                        {"Program Details\n"}

                    </p>
                    <p class="textFormat">

                        {"Program Detail Information Variable Call\n\n"}
              
                    </p>
            
                    <p>

                        {"Optional Details\n"}

                    </p>
                    <p class="textFormat">

                        {"\nInformation variable call\n\n"}

                    </p>
                </div>
                <div class="two">

                    <Text>

                        {"\nRequester Name: John Doe\n"}

                    </Text>

                    <Text>

                        {"\nDate Approved: 0/0/00\n"}
                        {"\nDate Recieved: 0/0/00\n"}
                        {"\nLicense: 0/0/00\n"}

                    </Text>

                    <Button

                        onClick={redirect}

                        class="colorApprove"

                        type="submit"

                        variant="secondary"

                        width='100'

                        sx={{ mt: 3, mb: 2 }}

                    >

                        Approve Request

                    </Button>

                    <Button

                        onClick={redirect}

                        class ="colorDeny"

                        type="submit"

                        variant="secondary"

                        width='50'

                        sx={{ mt: 3, mb: 2 }}

                    >

                        Deny Request

                    </Button>

                </div>

                <div id="three">

                    <iframe

                        
                        src="www.google.com"

                        title="View Program"

                        class="iframec"

                        loading="eager"

                        scrolling="auto"

                        frameborder="2"


                        webkitallowfullscreen mozallowfullscreen allowfullscreen>

                    </iframe>

                </div>
           

                </div>
            </div>
    );
};

export default AdminView;