import {View, Text} from 'react-native';
export const SectionHeader = props => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            color: 'grey',
            opacity: 0.5,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'rgba(158, 150, 150, 0.8)',
            textAlign: 'center',
            alignSelf: 'center',
            paddingVertical: 5,
            paddingHorizontal: 15,
            fontSize: 12,
          }}>
          {props.option}
        </Text>
      </View>
    </View>
  );
};
