import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

interface TrabalhoReactProps { }

function App() {

  return (
    <View style={styles.container}>


      <View style={{ flex: 1 }}>

        <View style={{
          flex: 0.5,
          backgroundColor: '#E54B4B',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
        }}>
          <Text style={styles.sub}>Bem vindo, Carlos</Text>

          <View>
            <Text style={styles.txt}>Você gastou hoje </Text>
            <Text style={styles.preco}>R$ 500 </Text>
          </View>

          <View>

            <Text style={styles.txt}>ESCOLHER PERÍODO:</Text>
            <View style={styles.week}>
              <Text style={styles.txt}>Hoje</Text>
              <Text style={styles.txt}>Essa Semana</Text>
              <Text style={styles.txt}>Esse Mês</Text>
            </View>

          </View>


        </View>

        <View style={styles.items}>


          <View style={styles.buttons}>

            <Button icon={{ name: 'flight', color: 'white' }} buttonStyle={styles.button} />
            <Button icon={{ name: 'home', color: 'white' }} buttonStyle={styles.button} />
            <Button icon={{ name: 'local-dining', color: 'white' }} buttonStyle={styles.button} />
            <Button icon={{ name: 'directions-car', color: 'white' }} buttonStyle={styles.button} />
            <Button icon={{ name: 'build', color: 'white' }} buttonStyle={styles.button} />

          </View>


          <View style={styles.produto}>

            <Text style={styles.text}>Pizza (R$ 30)</Text>
            <Text style={styles.text}>20/10/2022</Text>

          </View>

          <View style={styles.produto}>

            <Text style={styles.text}>Coca-Cola (R$ 30)</Text>
            <Text style={styles.text}>20/10/2022</Text>

          </View>

        </View>


      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EBE8'
  },
  sub: {
    fontSize: 43,
    textAlign: 'center',
    color: '#fff',
    marginTop: 30
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  preco: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 30,
    width: '100%',
    alignItems: 'center',
  },
  items: {
    width: '100%',
    flex: 0.3,
    flexDirection: 'column',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#444140',
  },
  produto: {
    padding: 25,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 18,
    color: '#000',
  }
});

export default App;
