import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Card */}
      <View style={styles.card}>
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://example.com/doctor.jpg' }} // Replace with your image
          style={styles.profileImage}
        />

        {/* Name & Role */}
        <Text style={styles.name}>Dr. Sarah Wilson</Text>
        <View style={styles.badge}>
          <Icon name="stethoscope" size={16} color="#0D47A1" />
          <Text style={styles.badgeText}>Doctor</Text>
        </View>

        {/* Info */}
        <View style={styles.infoSection}>
          <InfoRow icon="hospital-building" label="Central Medical Center" />
          <InfoRow icon="email-outline" label="dr.wilson@medical.com" />
          <InfoRow icon="calendar-clock" label="Mon-Fri, 9AM - 5PM" />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Icon name="logout" size={18} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const InfoRow = ({ icon, label }) => (
  <View style={styles.infoRow}>
    <Icon name={icon} size={18} color="#1976D2" />
    <Text style={styles.infoText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 95,
    height: 95,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 20,
    gap: 6,
  },
  badgeText: {
    color: '#1976D2',
    fontSize: 14,
    fontWeight: '500',
  },
  infoSection: {
    width: '100%',
    gap: 18,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 15,
    color: '#34495E',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Profile;
