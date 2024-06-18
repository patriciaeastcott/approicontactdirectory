import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, Card, List } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        paddingBottom: 20,
        marginBottom: 20,
        borderColor: '#d9d9d9',
        borderWidth: 0.5,
    },
    personName: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Trebuchet'
    },
    personCompany: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Trebuchet'
    },
    personMetaInfoContainer: {
        padding: 10
    },
    actionButtonContainer: {
        margin: 10
    },
    editDeleteButtonsContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    actionButtonContainerRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

class DetailView extends Component {

    onEditPress() {
        this.props.updatePerson();
        this.props.navigateToAddPerson();
    }

    onDeletePress() {
        this.props.deletePerson();
        this.props.navigateToPeopleList();
    }

    render() {
        const { firstName, lastName, company, email, project, phone, notes } = this.props.person;
        const { noneSelected } = this.props;

        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Button color={'white'} style={{ backgroundColor: 'grey' }} icon="arrow-left" mode="text" onPress={() => noneSelected()}>
                            Back
                        </Button>
                    </View>
                    <View>
                        <Text style={styles.personName}>{`${firstName} ${lastName}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.personCompany}>{`${company}`}</Text>
                    </View>
                    <View style={styles.personMetaInfoContainer}>
                        <Card>
                            <Card.Content>
                                <List.Item
                                    style={styles.listItem}
                                    title="Phone"
                                    description={phone}
                                    left={props => <List.Icon {...props} icon="phone" />}
                                />
                                <List.Item
                                    title="E-Mail"
                                    description={email}
                                    left={props => <List.Icon {...props} icon="email" />}
                                />
                                <List.Item
                                    title="Project"
                                    description={project}
                                    left={props => <List.Icon {...props} icon="clipboard-text" />}
                                />
                                <List.Item
                                    title="Notes"
                                    description={notes}
                                    left={props => <List.Icon {...props} icon="text" />}
                                />
                            </Card.Content>
                            <Card.Actions style={styles.editDeleteButtonsContainer}>
                                <Button color={'grey'} onPress={this.onDeletePress.bind(this)}>Delete</Button>
                                <Button color={'grey'} onPress={this.onEditPress.bind(this)}>Edit</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                    <View style={styles.actionButtonContainerRoot}>
                        <View style={styles.actionButtonContainer}>
                            <Button color={'#f08e25'} style={{ backgroundColor: 'grey' }} icon="phone" mode="contained" onPress={() => console.log('Pressed')}>
                                Call
                            </Button>
                        </View>
                        <View style={styles.actionButtonContainer}>
                            <Button color={'#f08e25'} style={{ backgroundColor: 'grey' }} icon="email" mode="contained" onPress={() => console.log('Pressed')}>
                                E-mail
                            </Button>
                        </View>
                        <View style={styles.actionButtonContainer}>
                            <Button color={'#f08e25'} style={{ backgroundColor: 'grey' }} icon="message-alert" mode="contained" onPress={() => console.log('Pressed')}>
                                SMS
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        person: state.personSelected,
        toUpdate: state.toUpdate,
    }
}

export default connect(mapStateToProps, actions)(DetailView);
