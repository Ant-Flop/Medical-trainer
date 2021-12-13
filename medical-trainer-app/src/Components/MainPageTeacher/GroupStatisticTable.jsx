import {React} from "react";
import {DataGrid, ukUA} from "@mui/x-data-grid";
import {useDispatch, useSelector} from "react-redux";
import {updateTeacherResultTest} from "../../redux/reducers/TeacherResultTestReducer";


export const GroupStatisticTable = (props) => {
    const dispatch = useDispatch();
    const studentResultData = useSelector(state => state.studentResultData);
    const columns = [
        {field: 'id', headerName: 'ID', width: 90, headerAlign: 'center'},
        {field: 'login', headerName: 'Логін', width: 150, headerAlign: 'center'},
        {field: 'name', headerName: "Ім'я", width: 150, headerAlign: 'center'},
        {field: 'surname', headerName: "Прізвище", width: 150, headerAlign: 'center'},
        {field: 'group', headerName: "Група", width: 150, headerAlign: 'center'},
        {field: 'datetime', headerName: "Дата проходження тесту", width: 270, headerAlign: 'center'},
        {field: 'resultTest', headerName: "Результат тесту", width: 300, headerAlign: 'center'},
    ];

    if(Object.keys(studentResultData).length === 0) {
        dispatch(updateTeacherResultTest(JSON.parse(localStorage.getItem("teacherResultTestData"))));

    }

    return (
        <div
            style={{
                height: "90vh",
            }}>
            <DataGrid
                localeText={ukUA.components.MuiDataGrid.defaultProps.localeText}
                rows={studentResultData.data}
                columns={columns}
                rowsPerPageOptions={[5]}
            />
        </div>
    )

}