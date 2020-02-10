import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Header from '../../components/Header';
import MainFlowStyles from '../../Styles/MainFlowStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

class ReportsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDaily: true,
            selectedWeekly: false,
            selectedMonthly: false,
            dailyBills: [
                { date: 'Jan 01, 2020', bNumber: '01', status: 'Approved' },
                { date: 'Jan 01, 2020', bNumber: '02', status: 'Rejected' },
                { date: 'Jan 01, 2020', bNumber: '03', status: 'Pending' },
                { date: 'Jan 01, 2020', bNumber: '04', status: 'Approved' },
                { date: 'Jan 01, 2020', bNumber: '05', status: 'Rejected' },
                { date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
                { date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
                { date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
                { date: 'Jan 01, 2020', bNumber: '06', status: 'Rejected' },
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
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 20 }}>Reports</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <TouchableOpacity
                            style={{ width: (width - 20) / 3 }}
                            onPress={() => this.setState({ selectedDaily: true, selectedWeekly: false, selectedMonthly: false })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ paddingBottom: 10, borderBottomColor: this.state.selectedDaily ? '#FF3301' : 'transparent', borderBottomWidth: 3, marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: this.state.selectedDaily ? 'black' : 'grey' }}>Daily</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ width: (width - 20) / 3 }}
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
                            style={{ width: (width - 20) / 3 }}
                            onPress={() => this.setState({ selectedDaily: false, selectedWeekly: false, selectedMonthly: true })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }} />
                                <View style={{ paddingBottom: 10, borderBottomColor: this.state.selectedMonthly ? '#FF3301' : 'transparent', borderBottomWidth: 3, marginRight: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: this.state.selectedMonthly ? 'black' : 'grey' }}>Monthly</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <FlatList
                        style={{ maxHeight: height * 0.8 }}
                        data={this.state.selectedDaily ? this.state.dailyBills : this.state.selectedWeekly ? this.state.weeklyBills : this.state.monthlyBills}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ marginBottom: index === this.state.dailyBills.length - 1 ? 20 : 0 }}>
                                    <View style={[MainFlowStyles.cardStyle, { marginBottom: 20, marginHorizontal: 5, marginTop: index === 0 ? 20 : 0, flex: 1 }]}>
                                        <View style={{ padding: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', width: (width - 50) / 3 }}>
                                                    <View>
                                                        <AntDesign name='calendar' size={20} color='#FF3301' />
                                                    </View>
                                                    <Text> {item.date}</Text>
                                                </View>

                                                <View style={{ width: (width - 50) / 3, alignItems: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bill {item.bNumber}</Text>
                                                </View>

                                                <View style={{ width: (width - 50) / 3, alignItems: 'flex-end' }}>
                                                    <Text style={{ color: item.status === 'Approved' ? '#26FF26' : item.status === 'Rejected' ? 'red' : 'grey', fontSize: 14 }}>{item.status}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ borderBottomColor: '#FF3301', borderBottomWidth: 1 }} />
                                        <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'center' }}>
                                            <Text style={{ color: '#FF3301', fontWeight: 'bold', fontSize: 16, marginRight: 10 }}>Show Details</Text>
                                            <View style={{ justifyContent: 'flex-end', marginBottom: 4 }}>
                                                <FontAwesome name='chevron-down' size={12} color='#FF3301' />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default ReportsScreen;