import React, { forwardRef } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import MaterialTable, { MTableToolbar } from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { fetchDataGestores } from '../actions/gestores';



const Gestores = ({ classes }) => {

  const dispatch = useDispatch();
  const {listaGestores} = useSelector((store) => store.gestoresReducer);
  

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} className={classes.iconGeneric} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  React.useEffect(
    () => {
      dispatch(fetchDataGestores());
    },
    [dispatch],
  );

  const columns = [
    { title: 'Usuario ID', field: 'usuario_ID' },
    { title: 'Primer Nombre', field: 'primer_NOMBRE' },
    { title: 'Segundo Nombre', field: 'segundo_NOMBRE' },
    { title: 'Primer Apellido', field: 'primer_APELLIDO' },
    { title: 'Segundo Apellido', field: 'segundo_APELLIDO' },
  ];

  return (
      <MaterialTable
        title="LISTA GESTORES"
        columns={columns}
        data={listaGestores}
        icons={tableIcons}options={{
          pageSize: 50,
          pageSizeOptions: [50],
          headerStyle:{backgroundColor:'#00bcd4'}
      
        }} 
        components={{
          Toolbar: props => (
              <div style={{ backgroundColor: '#00bcd4' }}>
                  <MTableToolbar {...props} />
              </div>
          )
        }}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}',
            labelRowsSelect: 'filas',
            firstTooltip: 'Primera página',
            previousTooltip: 'Página anterior',
            nextTooltip: 'Página siguiente',
            lastTooltip: 'Última página',
          },
          toolbar: {
            searchPlaceholder: 'Búsqueda',
            searchTooltip: 'Búsqueda',
          },
          header: {
            actions: 'info',
          },
          body: {
            emptyDataSourceMessage: 'No se encuentra el gestor',
            filterRow: {
              filterTooltip: 'Filter',
            },
          },
        }}
      />
  );
};

export default Gestores;
