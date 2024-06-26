import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/EvilIcons';
import CompanyItem from './CompanyItem';

class CompanyList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'archive'} size={50} color={'#941a1d'} />
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.companies}
                    renderItem={({ item }) => <CompanyItem companies={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const people = state.people;

    const companies = 
        _.chain(people)
            .groupBy('company')
            .map((value, key) => {
                return {
                    company: key,
                    names: value
                }
            })
            .value();

    return {
        companies,
    }
}

export default connect(mapStateToProps)(CompanyList);
