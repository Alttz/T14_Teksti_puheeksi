import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 40,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
    fontSize: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default styles;
