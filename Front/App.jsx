
import { StyleSheet, Text,} from 'react-native';

export default function App() {

  return (
    <>
    <Text style={styles.container} >hello world</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
