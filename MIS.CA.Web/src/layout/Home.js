import React, { } from 'react';
import { } from 'antd';
import { Typography, Row, Col } from 'antd';
import logo from '../assets//OpenSSL_logo.png';
const { Title, Paragraph } = Typography;


const Home = () => {






  return (
    <Row style={{ paddingTop: 40 }}>
      <Col span={12} offset={1}>
        <Paragraph><img src={logo} /> </Paragraph>
        <Paragraph style={{ fontSize: 16, textAlign: 'justify' }} strong>Το OpenSSL είναι µια βιβλιοθήκη κρυπτογράφησης για την υλοποίηση των πρωτοκόλλων
  SSL (Secure Sockets Layer) και TLS (Transport Layer Security). Το πρόγραµµα openssl
  χρησιµοποιεί συναρτήσεις της βιβλιοθήκης OpenSSL για τη δηµιουργία κλειδιών τόσο
  συµµετρικής όσο και ασύµµετρης κρυπτογράφησης, για την υλοποίηση διαδικασιών
  κρυπτογράφησης και αποκρυπτογράφησης καθώς και για τις διαδικασίες υπογραφής και
επαλήθευσης.</Paragraph>
        <Title level={4}>Τρόπος λειτουργίας</Title>
        <Paragraph style={{ fontSize: 16, textAlign: 'justify' }} strong>
          Το HTTPS δεν είναι ξεχωριστό πρωτόκολλο όπως μερικοί νομίζουν, αλλά αναφέρεται
          στον συνδυασμό του απλού HTTP πρωτοκόλλου και των δυνατοτήτων κρυπτογράφησης που παρέχει το
          πρωτόκολλο Secure Sockets Layer (SSL). Η κρυπτογράφηση που χρησιμοποιείται διασφαλίζει ότι
          τα κρυπτογραφημένα δεδομένα δεν θα μπορούν να υποκλαπούν από άλλους κακόβουλους χρήστες ή
          από επιθέσεις man-in-the-middle. Δεν σταματάει όμως εδώ, πρωτόκολλο με πρωτόκολλο έχει διαφορά
          στα αποτελέσματα κατάταξης σε συνδυασμό με την ασφάλεια, για κάθε ιστοσελίδα.
          <Paragraph style={{ fontSize: 16, textAlign: 'justify' }} strong>
          </Paragraph>
          Για να χρησιμοποιηθεί το HTTPS σε έναν server, θα πρέπει ο διαχειριστής του να εκδώσει ένα
          πιστοποιητικό δημοσίου κλειδιού. Σε servers που χρησιμοποιούν το λειτουργικό σύστημα UNIX αυτό
          μπορεί να γίνει μέσω του προγράμματος OpenSSL. Στην συνέχεια το πιστοποιητικό αυτό θα πρέπει να
          υπογραφεί από μία αρχή πιστοποίησης (certificate authority), η οποία πιστοποιεί ότι ο εκδότης του
          πιστοποιητικού είναι νομότυπος και ότι το πιστοποιητικό είναι έγκυρο. Με τον τρόπο αυτό οι χρήστες
          μπορούν να δουν την υπογραφή της αρχής πιστοποίησης και να βεβαιωθούν ότι το πιστοποιητικό είναι έγκυρο
          και ότι κανένας κακόβουλος χρήστης δεν το έχει πλαστογραφήσει.
        </Paragraph>
      </Col>

      <Col span={10} offset={1}>
        <Paragraph>

        </Paragraph>
      </Col>
    </Row >
  );
};

export default Home;