import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./src/HomeScreen";
import BudgetListPage from "./src/Budget";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false,statusBarColor: "black"}}/>
                <Stack.Screen name={"Budget"} component={BudgetListPage} options={{headerShown: false,statusBarColor: "black"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;


//http://192.168.1.4:8080/transactions/