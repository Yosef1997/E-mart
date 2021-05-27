import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: this.props.label,
      pickerDisplayed: false,
    };
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue,
    });
    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.togglePicker()}
          style={styles.btnDropdown}>
          <Text style={styles.text1}>
            {this.state.pickerSelection}
          </Text>
          <Icon name="chevron-small-down" size={18} />
        </TouchableOpacity>
        <Modal
          visible={this.state.pickerDisplayed}
          animationType={'slide'}
          transparent={true}>
          <View style={styles.popup}>
            <Text>{this.state.pickerSelection}</Text>
            <ScrollView style={styles.pickerset}>
              {this.props.data.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.setPickerValue(value.label)}
                    style={styles.text2}>
                    <Text>{value.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TouchableOpacity onPress={() => this.togglePicker()}>
              <Text style={styles.text2}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#efefef',
    bottom: 0,
    width: '100%',
    height: 300,
    alignItems: 'center',
    position: 'absolute',
  },
  text1: {
    color: '#4E4B66',
    fontSize: 14,
    fontWeight: '600',
  },
  text2: {
    color: '#4E4B66',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    textAlign: 'center',
  },
  pickerset: {
    width: '100%',
    marginVertical: 15,
  },
  btnDropdown: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    width: '100%',
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginTop: 12,
  },
});

export default index;
