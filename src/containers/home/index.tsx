import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
    
    render() {
        const { numbers, increment, decrement, reset, sum } = this.props.homeStore;

        return (<>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                <Text style={{color:'lightblue', fontSize:30}}>Text</Text>                
                <Text>{numbers}</Text>
                <Button onPress={ () => increment()} title="Incrementar"></Button>
                <Button onPress={ () => decrement()} title="Decrementar"></Button>                
                <Button onPress={ () => reset()} title="Reset"></Button>                
                <Button onPress={ () => sum()} title="Soma"></Button>
            </View>
        </>);
    }   
}