import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookListScreen from '../screens/BookListScreen';

type RootStackParamList = {
    BookListScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookListScreen" component={BookListScreen} />
    </Stack.Navigator>
  );
};
