import { View, Text, FlatList, StyleSheet } from 'react-native';
import { memo } from 'react';

const PRODUCTS = [
  { id: '1', name: 'Laptop', price: '$900' },
  { id: '2', name: 'Headphones', price: '$80' },
  { id: '3', name: 'Keyboard', price: '$45' },
];

const ProductRow = memo(function ProductRow({ product }: { product: (typeof PRODUCTS)[number] }) {
  return <Text style={styles.item}>{product.name} – {product.price}</Text>;
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Muhammad Awais Akbar – Roll No: 22I-2688</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductRow product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 80 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: { fontSize: 18, paddingVertical: 8 },
});
