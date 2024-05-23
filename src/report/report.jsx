import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';
//import logo from '../assets/img/escudo_UDEC_Completo.webp';

const styles = StyleSheet.create({
  page: {
    padding: '12px',
    fontSize: '12px',
  },
  viewTitle: {
    alignItems: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    height: '48px',
    margin: 0,
    padding: 0,
  },
  title: {
    color: '#f59e0b',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '8px',
    marginBottom: '8px',
    width: '100%',
    borderBottom: '1px solid #f59e0b',
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
          {/* <Image src={logo} style={{ width: '56rem' }} /> */}
          <Text>{'Datos Biodigestor'}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            {'Fecha Reporte: '} {new Date().toLocaleString()}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>{'Datos'}</Text>
          <View style={styles.table}>
            <View style={{ ...styles.tableRow, ...styles.header }}>
              <Text style={styles.tableCell}>{'Fecha'}</Text>
              <Text style={styles.tableCell}>{'Muestra'}</Text>
              <Text style={styles.tableCell}>{'Temp_Int'}</Text>
              <Text style={styles.tableCell}>{'Temp_Ext'}</Text>
              <Text style={styles.tableCell}>{'Luz'}</Text>
              <Text style={styles.tableCell}>{'Hum_Rel'}</Text>
              <Text style={styles.tableCell}>{'Presion'}</Text>
              <Text style={styles.tableCell}>{'Ph'}</Text>
            </View>

            {entity.map((el, index) => (
              <View style={styles.tableRow} key={`row-${index}`}>
                <Text style={styles.tableCell}>
                  {new Date(el.dtBFchLectura).toLocaleTimeString()}
                </Text>
                <Text style={styles.tableCell}>{el.dtBMuestra}</Text>
                <Text style={styles.tableCell}>{el.dtBTmpInterna}</Text>
                <Text style={styles.tableCell}>{el.dtBTmpExterna}</Text>
                <Text style={styles.tableCell}>{el.dtBLigth}</Text>
                <Text style={styles.tableCell}>{el.dtBHmdRelativa}</Text>
                <Text style={styles.tableCell}>{el.dtBPresion}</Text>
                <Text style={styles.tableCell}>{el.dtBPh}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
