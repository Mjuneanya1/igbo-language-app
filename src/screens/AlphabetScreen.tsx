import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AlphabetScreen = () => {
    const vowels = [
        { letter: 'A', pronunciation: 'Ah' },
        { letter: 'E', pronunciation: 'Eh' },
        { letter: 'I', pronunciation: 'Ee' },
        { letter: 'O', pronunciation: 'Oh' },
        { letter: 'U', pronunciation: 'Oo' }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Igbo Alphabet Vowels</Text>
                <TouchableOpacity>
                    <Image source={require('./assets/sound-icon.png')} style={styles.soundIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.vowelContainer}>
                {vowels.map((vowel, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.vowelLetter}>{vowel.letter}</Text>
                        <Text style={styles.pronunciation}>{vowel.pronunciation}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.aboutSection}>
                <Text style={styles.aboutTitle}>About the Igbo Alphabet</Text>
                <Text style={styles.aboutText}>The Igbo alphabet consists of 36 letters and includes 8 vowels. This screen helps users learn the pronunciation of the vowels in the Igbo language.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    soundIcon: {
        width: 24,
        height: 24,
    },
    vowelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    card: {
        width: '20%',
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 5,
        borderRadius: 8,
        alignItems: 'center',
    },
    vowelLetter: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    pronunciation: {
        fontSize: 16,
        color: '#555',
    },
    aboutSection: {
        marginTop: 20,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    aboutText: {
        fontSize: 16,
        color: '#333',
    },
});

export default AlphabetScreen;