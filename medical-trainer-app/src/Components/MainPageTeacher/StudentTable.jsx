import {React} from "react";
import {DataGrid, ukUA} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {updateTeacherPage} from "../../redux/reducers/TeacherPageReducer";

const URL_SET_STATUS_ACCOUNT = "http://u118049.test-handyhost.ru/rest-full-api/teacher-page/teacher-page-set-status-account.php";
const URL_SET_ATTEMPT_TEST = "http://u118049.test-handyhost.ru/rest-full-api/teacher-page/teacher-page-set-attempt-test.php";

export const StudentTable = (props) => {
    const dispatch = useDispatch();
    const studentData = useSelector(state => state.studentData);
    const columns = [
        {field: 'id', headerName: 'ID', width: 90, headerAlign: 'center'},
        {field: 'login', headerName: 'Логін', width: 150, headerAlign: 'center'},
        {field: 'name', headerName: "Ім'я", width: 150, headerAlign: 'center'},
        {field: 'surname', headerName: "Прізвище", width: 150, headerAlign: 'center'},
        {field: 'group', headerName: "Група", width: 150, headerAlign: 'center'},
        {
            field: 'attempt', headerName: "Спроба проходження тесту", width: 270, headerAlign: 'center',
            renderCell: (params) => {
                if (params.formattedValue === "true")
                    return "Присутня";
                else
                    return <Button onClick={setAttemptTest.bind(this, params.id)} style={{color: "#3f51b5"}}>Оновити</Button>;
            }
        },
        {
            field: 'statusAccount', headerName: "Статус акаунту", width: 150, headerAlign: 'center',
            renderCell: (params) => {
                if (params.formattedValue === "true")
                    return "Активований";
                else
                    return <Button onClick={setStatusAccount.bind(this, params.id)}
                                   style={{color: "#3f51b5"}}>Активувати</Button>;
            }
        },

    ];
    const setStatusAccount = (id) => {
        const response = fetch(URL_SET_STATUS_ACCOUNT, {
            method: 'POST',
            body: JSON.stringify({user_id:  id}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json().then((data) => {
                return data;
            })
        });
        response.then((data)=>{
            localStorage.setItem("teacherFirstData", JSON.stringify(data.teacherFirstData));
            dispatch(updateTeacherPage(JSON.parse(localStorage.getItem("teacherFirstData"))));
            props.rerender();
        })
    }
    const setAttemptTest = (id) => {
        const response = fetch(URL_SET_ATTEMPT_TEST, {
            method: 'POST',
            body: JSON.stringify({user_id:  id}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json().then((data) => {
                return data;
            })
        });
        response.then((data)=>{
            localStorage.setItem("teacherFirstData", JSON.stringify(data.teacherFirstData));
            dispatch(updateTeacherPage(JSON.parse(localStorage.getItem("teacherFirstData"))));
            props.rerender();
        })
    }

    if(Object.keys(studentData).length === 0) {
        dispatch(updateTeacherPage(JSON.parse(localStorage.getItem("teacherFirstData"))));
    }

    return (
        <div
            style={{
                height: "90vh",
            }}>
            <DataGrid
                localeText={ukUA.components.MuiDataGrid.defaultProps.localeText}
                rows={studentData.data}
                columns={columns}
                rowsPerPageOptions={[5]}
            />
        </div>
    )

}