import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    companyItemContainer: {
        margin: 10
    },
    employeeName: {
        fontSize: 16,
        margin: 2,
        fontFamily: 'Trebuchet'
    }
});

const CompanyItem = (props) => {
    return (
        <View style={styles.companyItemContainer}>
            <Card>
                <Card.Title
                    title={props.companies.company}
                    titleStyle={{ fontFamily: 'Trebuchet' }}
                    left={(props) => <Avatar.Icon {...props} color={'#ffffff'} style={{ backgroundColor: '#941a1d' }} icon="group" />}
                />
                <Card.Content>
                    {props.companies.names.map((name) => {
                        return (
                            <Text style={styles.employeeName}>
                                {name.firstName} {name.lastName}
                            </Text>
                        )
                    })}
                </Card.Content>
            </Card>
        </View>
    )
}

export default CompanyItem;
