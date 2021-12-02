export const signup = {
    name :{
        label: "name",
        placeholder: "Name",
        type: "text",
        validation :{
            required:true
        }
    },
    email :{
        label: "email",
        placeholder: "user@panamoure.com",
        type: "email",
        validation :{
            required:true
        }
    },
    phone :{
        label: "phone",
        placeholder: "Phone no",
        type: "text",
        validation :{
            required:true
        }
    },
    password :{
        label: "Password",
        placeholder: "********",
        type: "password",
        validation :{
            required:true
        }
    },
    designatin :{
        label: "Designation",
        placeholder: "software engineer",
        type: "text",
        validation :{
            required:true
        }
    },
    department :{
        label: "Departmet",
        placeholder: "i.e. development",
        type: "select",
        options:[
            {label:'(choose one)', value:''},
            {label:'Accounts and Finance', value:'accounts&Finance'},
            {label:'Administration', value:'administration'},
            {label:'Database Adminstration', value:'databaseAdminstration'},
            {label:'Management.', value:'management'},
            {label:'Qualaity Analyst', value:'qualaityAnalyst'},
            {label:'Research and development', value:'r&d'},
        ],
        validation :{
            required:true
        }
    },
    
}