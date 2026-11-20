import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const imgUrl = (cardNo) =>
    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +
    cardNo +
    '-2x.png';


const datasource = [
  {
    data: [
      { key: 'Pikachu', card: 25 },
      { key: 'Voltorb', card: 100 },
    ],
    title: 'ELECTRIC',
    icon: 'flash',
    backgroundColor: '#FFF200',
    textColor: '#B8860B',
  },
  {
    data: [
      { key: 'Squirtle', card: 7 },
      { key: 'Psyduck', card: 54 },
    ],
    title: 'WATER',
    icon: 'water',
    backgroundColor: '#87CEEB',
    textColor: '#1E4D8C',
  },
  {
    data: [
      { key: 'Charmander', card: 4 },
      { key: 'Growlithe', card: 58 },
    ],
    title: 'FIRE',
    icon: 'flame',
    backgroundColor: '#FFA07A',
    textColor: '#B22222',
  },
];

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />


        <View style={styles.buttonContainer}>
          <Button title="ADD POKEMON" onPress={() => {}} />
        </View>

        <SectionList
            contentContainerStyle={styles.listContainer}
            sections={datasource}

            renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemStyle}>
                  <Text style={styles.nameText}>{item.key}</Text>
                  <Image
                      source={{ uri: imgUrl(item.card) }}
                      style={styles.cardImage}
                  />
                </TouchableOpacity>
            )}

            renderSectionHeader={({ section: { title, icon, backgroundColor, textColor } }) => (
            <View style={[styles.headerContainer, { backgroundColor: backgroundColor }]}>
              <Ionicons name={icon} size={20} color={textColor} />
              <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
            </View>
        )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  listContainer: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderWidth: 1,
    padding: 10,
  },
  nameText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardImage: {
    width: 150,
    height: 210,
    resizeMode: 'contain',
  },
});