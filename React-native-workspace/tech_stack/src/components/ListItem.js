import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../Actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }
  renderDescription() {
    const { library, expanded } = this.props;


    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const { id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback onPress={ () => this.props.selectedLibrary(id) }>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    fontSize: 15,
    paddingRight: 15,
    paddingLeft: 15,
    flex: 1
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

//connect()의 첫번째 파라미터는 mapStateToProps 두번째파라미터는 actions
export default connect(mapStateToProps, actions)(ListItem);
