import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Dimensions } from 'react-native';
import { styles } from '../../../pages/LoginPage/LoginPage.styles';

const { width } = Dimensions.get('window');

export function LoginHeader() {
  return (
    <View style={styles.header}>
      {/* Header illustration */}
      <Image
        source={require('../../../../assets/images/login-header.jpg')}
        style={{
          width: width * 0.6,
          height: 140,
          borderRadius: 12,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      {/* Logo */}
      <MaterialCommunityIcons
        name="bottle-tonic-outline"
        size={40}
        color="#1D4ED8"
        style={styles.logoIcon}
      />
      <Text style={{ fontSize: 22, fontWeight: '800', color: '#1D4ED8', marginBottom: 16 }}>
        DoodhSetu
      </Text>

      {/* Welcome text */}
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Please login to your account</Text>
    </View>
  );
}
