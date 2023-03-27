import React from 'react';
import { Text, StyleSheet } from "react-native";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';



const ClientView = () => {

    const history = useHistory();

    const redirect = () => {
      history.push('/cside');
    }

    return (
        <div>
            <Text style={styles.titleText}>

                {"Program Details\n"}

            </Text>
            <Text style={styles.bodyText} >

                {"\nProgram Detail Information\n\n"}

            </Text>

            <Text style={styles.titleText}>

                {"Optional Details\n"}

            </Text>
            <Text style={styles.bodyText}>

                {"\nInformation variable\n\n"}

            </Text>
            <Text style={styles.titleText}>

                {"\nRequester Name: John Doe\n"}

            </Text>
            <Text style={styles.titleText}>

                {"\nDate Requested:0/0/00\n"}

            </Text>
            <Button
                onClick={redirect}
                position='absolute'
                type="submit"
                fullWidth
                variant="secondary"
                width='50%'
                sx={{ mt: 3, mb: 2 }}
            >
                Update Request
            </Button>
            <Button
                onClick={redirect}
                position='absolute'
                type="submit"
                fullWidth
                variant="secondary"
                sx={{ mt: 3, mb: 2 }}
                
            >
                Cancel Request
            </Button>
            


        </div>

    );
};


const styles = StyleSheet.create({
    titleText: {
        position: 'relative',
        fontSize: 20,
        borderWidth: 0,
        borderColor: 'black',


    },
    bodyText: {
        position: 'relative',
        fontSize: 15,
        width: '10%',
        left: '5%',

    },
    webstyle: {
        position: 'relative',
        
    }

})

export default ClientView;