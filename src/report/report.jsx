import {
  Document,
  Image,
  Page,
  Text,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import logo from '../assets/img/escudo_UDEC_Completo.webp';

const styles = StyleSheet.create({
  page: {
    padding: '12px',
  },
  viewTitle: {
    alignItems: 'center',
    height: '48px',
    margin: 0,
    padding: 0,
  },
  title: {
    color: '#06b6d4',
    fontWeight: 'bold',
    marginTop: '8px',
    marginBottom: '8px',
    width: '100%',
    borderBottom: '1px solid #06b6d4',
  },
  text: {
    marginTop: '4px',
    marginBottom: '5px',
  },
  section: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableCell: {
    flex: 1,
    padding: '8px',
    margin: '2px',
    border: '1px solid #000000',
  },
  header: {
    fontWeight: 'black',
    backgroundColor: '#f2f2f2',
  },
});

export const GenerateReport = ({ entity }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.viewTitle}>
          <Image src={logo} style={{ width: '56rem' }} />
          <Text>{'TITLE'}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>{'INFORMATIONSEARCHED'}</Text>
          <Text style={styles.text}>
            {'DATE'} {new Date().toLocaleDateString()}
          </Text>
          <Text style={styles.text}>
            {'TEXTFIELD'} {entity?.searchedName}
          </Text>
          <Text style={styles.text}>
            {'ACURACY'} {entity?.searchedPrecision}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>{'BASED'}</Text>
          <View style={styles.table}>
            <View style={{ ...styles.tableRow, ...styles.header }}>
              <Text style={styles.tableCell}>{'CODE'}</Text>
              <Text style={styles.tableCell}>{'NAME'}</Text>
              <Text style={styles.tableCell}>{'RECORDS'}</Text>
            </View>
            {/* {entity?.searchedLists.map((el, index) => (
              <View
                style={styles.tableRow}
                key={`header-searchedList-${index}`}
              >
                <Text style={styles.tableCell}>{el.code}</Text>
                <Text style={styles.tableCell}>{el.name}</Text>
                <Text style={styles.tableCell}>{el.records}</Text>
              </View>
            ))} */}
          </View>
        </View>
      </Page>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.viewTitle}>{'NONE'}</Text>
          <Text style={styles.text}>{'MATCHES'}</Text>
          {true && (
            <View style={styles.section}>
              <Text style={styles.title}>{'ALLOWLIST'}</Text>
              <View style={styles.table}>
                <View style={{ ...styles.tableRow, ...styles.header }}>
                  <Text style={styles.tableCell}>{'CODE'}</Text>
                  <Text style={styles.tableCell}>{'NAME'}</Text>
                  <Text style={styles.tableCell}>{'RECORDS'}</Text>
                </View>
                {/* {entity?.foundLists.allowList.map((el, index) => (
                  <View style={styles.tableRow} key={`allow-${index}`}>
                    <Text style={styles.tableCell}>{el.code}</Text>
                    <Text style={styles.tableCell}>{el.name}</Text>
                    <Text style={styles.tableCell}>
                      {el.listDetails.length}
                    </Text>
                  </View>
                ))} */}
              </View>
            </View>
          )}
          {true && (
            <View style={styles.section}>
              <Text style={styles.title}>{'BLOCKLIST'}</Text>
              <View style={styles.table}>
                <View style={{ ...styles.tableRow, ...styles.header }}>
                  <Text style={styles.tableCell}>{'CODE'}</Text>
                  <Text style={styles.tableCell}>{'NAME'}</Text>
                  <Text style={styles.tableCell}>{'RECORDS'}</Text>
                </View>
                {/* {entity?.foundLists.blockList.map((el, index) => (
                  <View style={styles.tableRow} key={`block-${index}`}>
                    <Text style={styles.tableCell}>{el.code}</Text>
                    <Text style={styles.tableCell}>{el.name}</Text>
                    <Text style={styles.tableCell}>
                      {el.listDetails.length}
                    </Text>
                  </View>
                ))} */}
              </View>
            </View>
          )}
          {true && (
            <View style={styles.section}>
              <Text style={styles.title}>{'SANCTIONLIST'}</Text>
              <View style={styles.table}>
                <View style={{ ...styles.tableRow, ...styles.header }}>
                  <Text style={styles.tableCell}>{'CODE'}</Text>
                  <Text style={styles.tableCell}>{'NAME'}</Text>
                  <Text style={styles.tableCell}>{'RECORDS'}</Text>
                </View>
                {/* {entity?.foundLists.sanctionList.map((el, index) => (
                  <View style={styles.tableRow} key={`sanction-${index}`}>
                    <Text style={styles.tableCell}>{el.code}</Text>
                    <Text style={styles.tableCell}>{el.name}</Text>
                    <Text style={styles.tableCell}>
                      {el.listDetails.length}
                    </Text>
                  </View>
                ))} */}
              </View>
            </View>
          )}
        </View>
      </Page>
      <Page style={styles.page}>
        <Text style={styles.title}>{'NOTICE'}</Text>
        <Text style={styles.text}>{'1'}</Text>
        <Text style={styles.text}>{'2'}</Text>
        <Text style={styles.text}>{'3'}</Text>
        <Text style={styles.text}>{'4'}</Text>
        <Text style={styles.text}>{'5'}</Text>
        <Text style={styles.text}>{'6'}</Text>
        <Text style={styles.text}>{'7'}</Text>
      </Page>
    </Document>
  );
};
