import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
} from '@tremor/react';

const data = [
  {
    nombre: 'Viola Amherd',
    correo: 'Federal Councillor',
    actividad:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    ultimaConexion: 'active',
  },
  {
    nombre: 'Simonetta Sommaruga',
    correo: 'Federal Councillor',
    actividad:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    ultimaConexion: 'active',
  },
  {
    nombre: 'Alain Berset',
    correo: 'Federal Councillor',
    actividad: 'The Federal Department of Home Affairs (FDHA)',
    ultimaConexion: 'active',
  },
  {
    nombre: 'Ignazio Cassis',
    correo: 'Federal Councillor',
    actividad: 'The Federal Department of Foreign Affairs (FDFA)',
    ultimaConexion: 'active',
  },
  {
    nombre: 'Ueli Maurer',
    correo: 'Federal Councillor',
    actividad: 'The Federal Department of Finance (FDF)',
    ultimaConexion: 'active',
  },
  {
    nombre: 'Guy Parmelin',
    correo: 'Federal Councillor',
    actividad:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    ultimaConexion: 'active',
  },
  {
    nombre: 'Karin Keller-Sutter',
    correo: 'Federal Councillor',
    actividad: 'The Federal Department of Justice and Police (FDJP)',
    ultimaConexion: 'active',
  },
];

const Usuarios = () => {
  return (
    <Card>
      <Title>List of Swiss Federal Councillours</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Correo</TableHeaderCell>
            <TableHeaderCell>Actividad</TableHeaderCell>
            <TableHeaderCell>Última Conexión</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.nombre}>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>
                <Text>{item.correo}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.actividad}</Text>
              </TableCell>
              <TableCell>{item.ultimaConexion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
export default Usuarios;
