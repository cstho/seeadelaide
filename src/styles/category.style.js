import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        elevation: 0,
      flex: 1,
      backgroundColor: '#EBF2F5',
    },
    titleStyle: {
      padding: 16,
      fontSize: 20,
      color: 'white',
      backgroundColor: '#307ecc',
    },
    cardStyle: {
        elevation: 0,
        
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      backgroundColor: '#EBF2F5',
      padding: 10,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
    },
    cardHeadingStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardHeadingTextStyle: {
      color: '#606070',
      fontWeight: 'bold',
      fontSize: 20
    },
    childViewTextStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });