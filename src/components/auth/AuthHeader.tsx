import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

interface AuthHeaderProps {
  /** Main title shown below the logo icon */
  title: string;
  /** Subtitle / description line below the title */
  subtitle: string;
  /** Whether to show the DoodhSetu app title above the page title */
  showAppName?: boolean;
}

export function AuthHeader({
  title,
  subtitle,
  showAppName = true,
}: AuthHeaderProps) {
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons
        name="bottle-tonic-outline"
        size={40}
        color="#1D4ED8"
        style={styles.icon}
      />
      {showAppName && <Text style={styles.appName}>DoodhSetu</Text>}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 40,
  },
  headerImage: {
    width: 220,
    height: 130,
    marginBottom: 16,
    borderRadius: 12,
  },
  icon: {
    marginBottom: 8,
  },
  appName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1D4ED8',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});
