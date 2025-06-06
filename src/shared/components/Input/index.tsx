import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

type InputPropsWithLabel = TextInputProps & {
  label?: string;
}

const Input = ({label, ...rest}: InputPropsWithLabel) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...rest}/>
    </View>
  );
}

export { Input };

