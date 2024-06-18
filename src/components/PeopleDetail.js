import React, { Component } from 'react';
import DetailView from './DetailView';

class PeopleDetail extends Component {
    render() {
        return <DetailView navigateToPeopleList={this.props.navigateToPeopleList}
                           navigateToAddPerson={this.props.navigateToAddPerson} />
    }
}

export default PeopleDetail;
