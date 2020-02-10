import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Header from '../../components/Header';
import MainFlowStyles from '../../Styles/MainFlowStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';
const {width, height} = Dimensions.get('window');

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDaily: true,
            selectedWeekly: false,
            selectedMonthly: false,
            dailyBills: [
                { id: 0, date: 'Jan 01, 2020', bNumber: '01', status: 'Approved' },
                { id: 1, date: 'Jan 01, 2020', bNumber: '02', status: 'Rejected' },
                { id: 2, date: 'Jan 01, 2020', bNumber: '03', status: 'Pending' },
                { id: 3, date: 'Jan 01, 2020', bNumber: '04', status: 'Approved' },
                { id: 4, date: 'Jan 01, 2020', bNumber: '05', status: 'Rejected' },
                { id: 5, date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
                { id: 6, date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
                { id: 7, date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
                { id: 8, date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
            ],
            weeklyBills: [
                { date: 'Jan 01, 2020', bNumber: '01', status: 'Pending' },
                { date: 'Jan 01, 2020', bNumber: '02', status: 'Rejected' }
            ],
            monthlyBills: [
                { date: 'Jan 01, 2020', bNumber: '01', status: 'Approved' },
                { date: 'Jan 01, 2020', bNumber: '02', status: 'Rejected' },
                { date: 'Jan 01, 2020', bNumber: '03', status: 'Pending' },
                { date: 'Jan 01, 2020', bNumber: '04', status: 'Pending' }
            ]
        };
    }

    render() {
        return (
            <View>
                <Header />
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 20 }}>Reports</Text>

                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity
                            style={{ width: (width - 40) / 3 }}
                            onPress={() => this.setState({ selectedDaily: true, selectedWeekly: false, selectedMonthly: false })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ paddingBottom: 10, borderBottomColor: this.state.selectedDaily ? '#FF3301' : 'transparent', borderBottomWidth: 3 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: this.state.selectedDaily ? 'black' : 'grey' }}>Daily</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: (width - 40) / 3 }}
                            onPress={() => this.setState({ selectedDaily: false, selectedWeekly: true, selectedMonthly: false })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{flex: 1}} />
                                <View style={{ paddingBottom: 10, borderBottomColor: this.state.selectedWeekly ? '#FF3301' : 'transparent', borderBottomWidth: 3 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: this.state.selectedWeekly ? 'black' : 'grey' }}>Weekly</Text>
                                </View>
                                <View style={{flex: 1}} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: (width - 40) / 3, alignItems: 'flex-end' }}
                            onPress={() => this.setState({ selectedDaily: false, selectedWeekly: false, selectedMonthly: true })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }} />
                                <View style={{ paddingBottom: 10, borderBottomColor: this.state.selectedMonthly ? '#FF3301' : 'transparent', borderBottomWidth: 3 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: this.state.selectedMonthly ? 'black' : 'grey' }}>Monthly</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {this.state.selectedDaily && (
                        <Text>selectedDaily</Text>
                    )}
                    {this.state.selectedWeekly && (
                        <Text>selectedWeekly</Text>
                    )}
                    {this.state.selectedMonthly && (
                        <Text>selectedMonthly</Text>
                    )}
                </View>
            </View>
        );
    }
}

export default Reports;