import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
};

const HomeAboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About</Text>
        </View>
    );
};

const NewsScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>News</Text>
    </View>
);

const ChatScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Chat</Text>
    </View>
);

const SettingsScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
    </View>
);

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTitle: () => (
                        <Ionicons name="home" size={30} color="black" style={{ alignSelf: 'center' }} />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('HomeAbout')}
                            title="О приложении"
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="HomeAbout"
                component={HomeAboutScreen}
                options={{ title: 'О приложении' }}
            />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const icons = {
        Home: 'star-outline',
        News: 'earth-outline',
        Chat: 'mail-outline',
        Settings: 'cog-outline',
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name={icons[route.name]} size={size} color={color} />
                ),
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <TabNavigation />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
