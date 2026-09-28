import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Streamline Your\nMilk Distribution',
    description:
      'Manage orders, track deliveries, handle payments and grow your retail network — all in one place.',
    image: require('../../../assets/images/onboarding_1.jpg'),
  },
  {
    id: '2',
    title: 'Secure & Reliable',
    description:
      'Your data is safe with us. We use industry-standard security to keep your business protected.',
    image: require('../../../assets/images/onboarding_2.jpg'),
  },
  {
    id: '3',
    title: 'Built for Retailers\nand Distributors',
    description:
      'From daily orders to real-time updates, DoodhSetu helps everyone in the supply chain.',
    image: require('../../../assets/images/onboarding_3.jpg'),
  },
];

export function OnboardingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push('/(auth)/login');
    }
  };

  const skip = () => {
    router.push('/(auth)/login');
  };

  const isLast = currentIndex === slides.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Slides */}
      <View style={styles.slideWrapper}>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width }]}>
              {/* Illustration */}
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} resizeMode="contain" />
              </View>
              {/* Text */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      {/* Bottom Controls */}
      <View style={styles.footer}>
        {/* Pagination dots */}
        <View style={styles.paginator}>
          {slides.map((_, i) => (
            <View
              key={i.toString()}
              style={[
                styles.dot,
                {
                  backgroundColor: i === currentIndex ? '#1D4ED8' : '#C7D2FE',
                  width: i === currentIndex ? 24 : 8,
                },
              ]}
            />
          ))}
        </View>

        {/* Next / Get Started button */}
        <TouchableOpacity
          style={[styles.button, isLast && styles.buttonGetStarted]}
          onPress={scrollToNext}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>{isLast ? 'Get Started' : 'Next'}</Text>
        </TouchableOpacity>

        {/* Skip */}
        <TouchableOpacity onPress={skip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  slideWrapper: {
    flex: 3,
  },
  slide: {
    alignItems: 'center',
    paddingTop: 30,
  },
  imageContainer: {
    width: width * 0.9,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 14,
    lineHeight: 32,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingBottom: 10,
  },
  paginator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#1D4ED8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonGetStarted: {
    backgroundColor: '#DC2626',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '500',
  },
});
