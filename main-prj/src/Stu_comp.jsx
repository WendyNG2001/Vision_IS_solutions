import React from 'react';
import { List, Datagrid, TextField, EmailField, NumberField, Create, SimpleForm, Edit, Show, SimpleShowLayout} from 'react-admin';

const Stu_comp={
    StudentLsit: ()=>{
        return(
            <List>
                <Datagrid>
                    <TextField source="id"/>
                    <NumberField source="ID_number"/>
                    <TextField source="Name"/>
                    <EmailField source="Email"/>
                    <NumberField source="Phone_number"/>
                    <TextField source="Program_Of_Study"/>
                    
                </Datagrid>
            </List>
        );
    },
    StudentCreate: ()=>{
        return (
            <Create>
              <SimpleForm>
                    <TextField source="id"/>
                    <NumberField source="ID_number"/>
                    <TextField source="Name"/>
                    <EmailField source="Email"/>
                    <NumberField source="Phone_number"/>
                    <TextField source="Program_Of_Study"/>
                    
              </SimpleForm>
            </Create>
          );

    },
    StudentEdit: () =>{
        return(
            <Edit>
                <SimpleForm>
                    <TextField source="id"/>
                    <NumberField source="ID_number"/>
                    <TextField source="Name"/>
                    <EmailField source="Email"/>
                    <NumberField source="Phone_number"/>
                    <TextField source="Program_Of_Study"/>
                  
                </SimpleForm>

            </Edit>

        );
    },
    StudentShow: () => {
        return (
          <Show>
            <SimpleShowLayout>
                    <TextField source="id"/>
                    <NumberField source="ID_number"/>
                    <TextField source="Name"/>
                    <EmailField source="Email"/>
                    <NumberField source="Phone_number"/>
                    <TextField source="Program_Of_Study"/>
                 
            </SimpleShowLayout>
          </Show>
        );
      }

};
export default Stu_comp;