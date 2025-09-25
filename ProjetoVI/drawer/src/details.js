import { Text, View } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { produtoId } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>📄 Tela Detalhes 📄</Text>
      <Text>ID Produto: {produtoId}</Text>
    </View>
  );
}