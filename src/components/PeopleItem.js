import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        color: '#941a1d',
        fontFamily: 'Trebuchet'
    },
});

const PeopleItem = (props) => {
    const { firstName, lastName, company } = props.people;

    const getAvatarLabel = (firstName, lastName) => {
        return `${firstName[0]}${lastName[0]}`.toUpperCase();
    }

    return (
        <TouchableWithoutFeedback onPress={() => props.selectPerson(props.people)}>
            <View>
                <Card.Title
                    title={`${firstName} ${lastName}`}
                    subtitle={`${company}`}
                    titleStyle={styles.title}
                    left={(props) => <Avatar.Text color={'#ffffff'} style={{ backgroundColor: '#941a1d' }} size={24} {...props} label={getAvatarLabel(firstName, lastName)} />}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default connect(null, actions)(PeopleItem);
