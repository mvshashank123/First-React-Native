import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Todo from "./Todo";

export default function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([
    {
      description: "Book",
      amount: 200
    },
  ]);

  useEffect(() =>{
    setTotal(expenses.reduce((total,expense) => total+expense.amount,0))
  },[expenses])

  const addExpenses = () => {
    setExpenses([...expenses, { description: description, amount: amount, timestamp: new Date() }]);
    setAmount('')
    setDescription('')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello React Native</Text>
      <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="Rs "
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      <Text>Total: {total}</Text>
      <StatusBar style="auto" />

      <TextInput
        placeholder="Enter the description"
        style={styles.textContainer}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        placeholder="Enter the amount"
        style={styles.textContainer}
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <Button onPress={addExpenses} title="Add Todo" />
      <ScrollView>
        {expenses.map((expense)=>(
          <View>
          <Text>{expense.description}</Text>
          <Text>{expense.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  titleText: {
    //backgroundColor:'green',
    fontSize: 30,
    fontWeight: "bold",
  },
  textContainer: {
    margin: 20,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
});
