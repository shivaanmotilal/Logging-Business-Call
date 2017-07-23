import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';

const Button = (props) => {
     
    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }
 
    return (
        <TouchableHighlight 
            underlayColor="#ccc"
            onPress={props.onPress} 
            style={[
                props.noDefaultStyles ? '' : styles.button, 
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
    );
}

const Container = (props) => {
    return (
        <View style={styles.labelContainer}>
            { props.children }
        </View>
    );
}

const Label = (props) => {
    return (
        <Text 
            style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}
        >
            {props.text}
        </Text>
    );
}


export default class WorkingApp extends Component {
  _onPress(){
     Alert.alert('You tapped the button!')
  }
  render() {
    return (
        <ScrollView style={styles.scroll}>
			
			<Container>
			    <Button 
				label="Forgot Login/Password"
				styles={{button: styles.alignRight, label: styles.label}} 
				onPress={this.onPress} />
			</Container>

			<Container>
			    <Label text="Username or Email" />
			    <TextInput
			        style={styles.textInput}
			    />
			</Container>


			{/* Adding password buttons */}
			<Container>
			    <Label text="Password" />
			    <TextInput
			        secureTextEntry={true}
			        style={styles.textInput}
			    />
			</Container>


			{/* Adding Sign In and CANCEL buttons */}
			<View style={styles.footer}>
			    <Container>
			        <Button 
			            label="Sign In"
			            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
			            //onPress= {this._onPress}/>
			            />
			    </Container>
			    <Container>
			        <Button 
			            label="CANCEL"
			            styles={{label: styles.buttonBlackText}} 
			            //onPress={this._onPress} />
			            />
			    </Container>
			</View>

        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
        button: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	    },
        
        labelContainer: {
		marginBottom: 20
	    },

	textLabel: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Verdana',
		marginBottom: 10,
		color: '#595856'
	    },

	scroll: {
	    backgroundColor: '#E1D7D8',
	    padding: 30,
	    flexDirection: 'column'
	},

	label: {
	    color: '#0d8898',
	    fontSize: 20
	},
	alignRight: {
	    alignSelf: 'flex-end'
	},


	textInput: {
	    height: 80,
	    fontSize: 30,
	    backgroundColor: '#FFF'
	},

        buttonWhiteText: {
	    fontSize: 20,
	    color: '#FFF',
	},
        
	buttonBlackText: {
	    fontSize: 20,
	    color: '#595856'
	},

	primaryButton: {
	    backgroundColor: '#34A853'
	},

	footer: {
	   marginTop: 100
	}
});

AppRegistry.registerComponent('WorkingApp', () => WorkingApp);
