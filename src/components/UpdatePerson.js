import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Headline } from 'react-native-paper';
import * as actions from '../actions';

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

class UpdatePerson extends Component {
    state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: ''
    }

    formUpdate({ prop, value }) {
        this.setState(prevState => ({ ...prevState, [prop]: value }))
    }

    onUpdatePress() {
        const { firstName, lastName, phone, email, company, project, notes } = this.state;
        this.props.updatePersonData({ id: this.props.person.id, firstName, lastName, phone, email, company, project, notes });
        this.props.navigateToPeopleList();
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Headline style={styles.headline}>Update Contact</Headline>
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
                        <Button mode="contained" onPress={this.onUpdatePress.bind(this)}>
                            <Text style={styles.buttonText}>Update</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.personSelected,
        toUpdate: state.toUpdate,
    }
}

export default connect(mapStateToProps, actions)(UpdatePerson);
