import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        {/* <Text style={styles.title}>Medical History Wallet</Text> */}

        {/* My Health Overview */}
        <Text style={styles.sectionTitle}>My Health Overview</Text>
        <View style={styles.overviewGrid}>
          <View style={styles.healthCard}>
            <Icon name="water" size={24} color="#D32F2F" />
            <Text style={styles.cardLabel}>Blood Type</Text>
            <Text style={styles.cardValue}>A+</Text>
          </View>

          <View style={styles.healthCard}>
            <Icon name="leaf" size={24} color="#43A047" />
            <Text style={styles.cardLabel}>Allergies</Text>
            <Text style={styles.cardValue}>Penicillin, Peanuts</Text>
          </View>

          <View style={styles.healthCard}>
            <Icon name="heart-pulse" size={24} color="#1976D2" />
            <Text style={styles.cardLabel}>Conditions</Text>
            <Text style={styles.cardValue}>Asthma, Diabetes</Text>
          </View>

          <View style={styles.healthCard}>
            <Icon name="pill" size={24} color="#00897B" />
            <Text style={styles.cardLabel}>Medications</Text>
            <Text style={styles.cardValue}>2 Active Prescriptions</Text>
          </View>
        </View>

        {/* Important Documents */}
        <Text style={styles.sectionTitle}>Important Documents</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.documentCard}>
            <Icon name="file-document-outline" size={30} color="#1976D2" />
            <Text style={styles.docTitle}>Latest Health Summary</Text>
            <Text style={styles.docDate}>Jan 15, 2024</Text>
          </View>

          <View style={styles.documentCard}>
            <Icon name="file-document-outline" size={30} color="#1976D2" />
            <Text style={styles.docTitle}>Vaccination Record</Text>
            <Text style={styles.docDate}>Dec 20, 2023</Text>
          </View>

          <View style={styles.documentCard}>
            <Icon name="file-document-outline" size={30} color="#1976D2" />
            <Text style={styles.docTitle}>Insurance</Text>
            <Text style={styles.docDate}>Active</Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.shareButton}>
          <Icon name="share-variant" size={20} color="#1976D2" />
          <Text style={styles.shareText}>Share Medical Information</Text>
        </TouchableOpacity>

        {/* Emergency Contacts */}
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        <View style={styles.contactCard}>
          <Icon name="account-circle-outline" size={24} color="#444" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Sarah Johnson</Text>
            <Text style={styles.contactRelation}>Spouse</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactCard}>
          <Icon name="account-circle-outline" size={24} color="#444" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>David Wilson</Text>
            <Text style={styles.contactRelation}>Father</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContent: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  healthCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 13,
    color: '#777',
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
  },
  documentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 160,
    padding: 12,
    marginRight: 12,
    elevation: 2,
    alignItems: 'center',
  },
  docTitle: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 6,
    color: '#333',
  },
  docDate: {
    fontSize: 11,
    color: '#777',
    marginTop: 4,
  },
  shareButton: {
    marginTop: 14,
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  shareText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1976D2',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 10,
  },
  contactName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  contactRelation: {
    fontSize: 12,
    color: '#777',
  },
  callText: {
    fontSize: 14,
    color: '#1E88E5',
    fontWeight: '500',
  },
});

export default Home;
