/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ToastAndroid,
    TextInput,
    Alert,
    TouchableHighlight,
    ScrollView,
    ActivityIndicator,
    FlatList
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type
Props = {};
export default class App extends Component {

    getRandomNumber() {
        return (Math.floor(Math.random() * (10 - 1))).toString();
    }

    constructor(props) {
        super(props);
        this.state = {
            names: Array(3).fill(""),
            isShowingText: true,
            // text: 'Remove this text to show the placeholder!',
            text: 'Useless Multiline Placeholder', // For multiline textinput example
            count: 0,
            isLoading: true
        };

        let newArray = this.state.names.map(name => {
            return this.getRandomNumber()
        });
        this.state = {...this.state, names: newArray};
        setInterval(() => (
            this.setState({...this.state, isShowingText: !this.state.isShowingText})
        ), 1000);
    }

    randomchangeNumbersInButton(arrayIndex) {
        var state = this.state;
        var names = this.state.names;
        names[arrayIndex] = this.getRandomNumber();
        this.setState({...this.state, names: names});
        var stateString = "Names: ";
        names.forEach(name => {
            stateString += name + ", ";
        });
        // this.state.names = state;
        this.buttonClicked(arrayIndex, stateString);
    }

    buttonClicked(arrayIndex, stateString) {
        ToastAndroid.show('The value is ' + this.state.names[arrayIndex] + " " + ", The current state is: " + stateString, ToastAndroid.SHORT)
    }

    onPress() {
        ToastAndroid.show("this.state.count: " + this.state.count, ToastAndroid.SHORT);

        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    // Network Fetch API example
    componentDidMount(){
        //Self made 3 seconds delay to see loading indicator
        setTimeout(() => {
            return fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        ...this.state,
                        isLoading: false,
                        dataSource: responseJson.movies,
                    }, function(){

                    });

                })
                .catch((error) =>{
                    console.error(error);
                });
        }, 3000)
    }

    render() {

        // Default first test render
        // if (!this.state.isShowingText) {
        //     return null;
        // }
        //
        // let pic = {
        //     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        // };
        //
        // return (
        //     <View style={styles.container}>
        //         <Text style={styles.welcome}>Welcome to React Native!</Text>
        //         <Text style={styles.instructions}>To get started, edit App.js</Text>
        //         <Text style={styles.instructions}>{instructions}</Text>
        //         <Image source={pic} style={{width: 193, height: 110}}/>
        //         <Greeting title={this.state.names[0]} changeNumber2={(arrayValue) => {return this.randomchangeNumbersInButton(arrayValue)}} arrayValue={0}/>
        //         <Greeting title={this.state.names[1]} changeNumber2={(arrayValue) => {return this.randomchangeNumbersInButton(arrayValue)}} arrayValue={1}/>
        //         <Greeting title={this.state.names[2]} changeNumber2={(arrayValue) => {return this.randomchangeNumbersInButton(arrayValue)}} arrayValue={2}/>
        //     </View>
        // );

        //Using Flexbox concepts with style
        // return (
        //     <View style = {styles.container}>
        //         <View style = {styles.redbox} />
        //         <View style = {styles.bluebox} />
        //         <View style = {styles.blackbox} />
        //     </View>
        // )

        // Text Input
        // return (
        //     <View style={{padding: 10}}>
        //         <TextInput
        //             style={{height: 40}}
        //             placeholder="Type here to translate!"
        //             onChangeText={(text) => this.setState({text})}
        //             value={this.state.text}
        //         />
        //         <Text style={{padding: 10, fontSize: 42}}>
        //             {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        //         </Text>
        //     </View>
        // );

        // Multiline TextInput example
        // If you type something in the text box that is a color, the background will change to that
        // color.
        // return (
        //     <View style={{
        //         backgroundColor: this.state.text,
        //         borderBottomColor: '#000000',
        //         borderBottomWidth: 1 }}
        //     >
        //         <UselessTextInput
        //             multiline = {true}
        //             numberOfLines = {4}
        //             onChangeText={(text) => this.setState({text})}
        //             value={this.state.text}
        //         />
        //     </View>
        // );

        // Button example
        // return (
        //     <Button
        //         onPress={() => {
        //             Alert.alert('You tapped the button!', 'hahahaha');
        //         }}
        //         title="Press Me"
        //     />
        // )

        // Button with touchableHighlight example
        // return (
        //     <View style={styles.container}>
        //         <Text style={selfStyle.text}>This is a button</Text>
        //          <Button
        //              onPress={() => {
        //                  Alert.alert('You tapped the button!', 'hahahaha');
        //              }}
        //              title="Press Me"
        //          />
        //         <Text style={selfStyle.text}>This is a touchablehighLight</Text>
        //         <TouchableHighlight
        //             style={styles.button}
        //             onPress={() => {
        //                 this.onPress()
        //             }}
        //         >
        //             <Text> Touch Here </Text>
        //         </TouchableHighlight>
        //         <View style={[styles.countContainer]}>
        //             <Text style={[styles.countText]}>
        //                 {this.state.count !== 0 ? this.state.count : null}
        //             </Text>
        //         </View>
        //     </View>
        // )

        // ScrollView example
        // return (
        //     <ScrollView>
        //         <Text style={{fontSize: 96}}>Scroll me plz</Text>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Text style={{fontSize: 96}}>If you like</Text>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Text style={{fontSize: 96}}>Scrolling down</Text>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Text style={{fontSize: 96}}>What's the best</Text>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Text style={{fontSize: 96}}>Framework around?</Text>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Image
        //             source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}}/>
        //         <Text style={{fontSize: 80}}>React Native</Text>
        //     </ScrollView>
        // );

        //Fetch API network request example
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );

    }
}


function Greeting(props) {
    return (
        <Button title={props.title} onPress={() => {
            props.changeNumber2(props.arrayValue)
        }}/>
    );
}

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={40}
            />
        );
    }
}


// Default first test styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

//Flexbox styles
// const styles = StyleSheet.create ({
//     container: {
//         flexDirection: 'column', // column/row
//         justifyContent: 'center', //'center', 'flex-start', 'flex-end', 'space-around', 'space-between'
//         alignItems: 'stretch', 	//'center', 'flex-start', 'flex-end', 'stretch', same like text-align left, right center or justified
//         backgroundColor: 'grey',
//         height: 600, // control the height of the container manually. You can control the height of the box dynamically like below
//         // flex: 1
//     },
//     redbox: {
//         width: 100,
//         height: 100,
//         // flex: 0.3,
//         backgroundColor: 'red'
//         ,
//     },
//     bluebox: {
//         width: 100,
//         height: 100,
//         backgroundColor: 'blue'
//     },
//     blackbox: {
//         width: 100,
//         height: 100,
//         backgroundColor: 'black'
//     },
// })

// Styles for touchableHighlight example
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})

const selfStyle = StyleSheet.create({
    text: {
        paddingBottom: 10
    }
})