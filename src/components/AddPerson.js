import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { TextInput, Button, Headline } from 'react-native-paper';
import UpdatePerson from './UpdatePerson';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        backgroundColor: '#d9d9d9'
    },
    addButton: {
        marginTop: 20,
        backgroundColor: '#941A1D'
    },
    inputField: {
        margin: 2
    },
    headline: {
        textAlign: 'center',
        color: '#262626',
        fontFamily: 'Trebuchet'
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'Trebuchet'
    }
});

class AddPerson extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: ''
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'add'} size={50} color={'#941a1d'} />
        )
    }

    formUpdate({ prop, value }) {
        this.setState(prevState => ({ ...prevState, [prop]: value }))
    }

    onAddPress() {
        const { firstName, lastName, phone, email, company, project, notes } = this.state;

        this.props.addPerson({ firstName, lastName, phone, email, company, project, notes });

        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            project: '',
            notes: ''
        })

        this.props.navigation.navigate('People List');
    }

    render() {
        if (this.props.toUpdate) {
            return <UpdatePerson backToPeopleList={() => this.props.navigation.navigate("People List")} />
        }

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Headline style={styles.headline}>Add a new contact</Headline>
                    <TextInput
                        autoFocus={true}
                        style={styles.inputField}
                        label="First name"
                        value={this.state.firstName}
                        onChangeText={value => this.formUpdate({ prop: 'firstName', value })}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Last name"
                        value={this.state.lastName}
                        onChangeText={value => this.formUpdate({ prop: 'lastName', value })}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Phone number"
                        value={this.state.phone}
                        onChangeText={value => this.formUpdate({ prop: 'phone', value })}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Email"
                        value={this.state.email}
                        onChangeText={value => this.formUpdate({ prop: 'email', value })}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Department"
                        value={this.state.company}
                        onChangeText={value => this.formUpdate({ prop: 'company', value })}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Project"
                        value={this.state.project}
                        onChangeText={value => this.formUpdate({ prop: 'project', value })}
                    />
                    <TextInput
                        style={styles.inputField}
                        label="Notes"
                        value={this.state.notes}
                        onChangeText={value => this.formUpdate({ prop: 'notes', value })}
                    />
                    <View style={styles.addButton}>
                        <Button mode="contained" onPress={this.onAddPress.bind(this)}>
                            <Text style={styles.buttonText}>Add</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const toUpdate = state.toUpdate;
    return {
        toUpdate
    }
}

export default connect(mapStateToProps, actions)(AddPerson);
